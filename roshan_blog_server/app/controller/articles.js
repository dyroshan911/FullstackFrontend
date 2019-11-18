let BaseController = require('./base');

module.exports = class Articles extends BaseController {
    async index() {
        try {
            let articles = await this.getPager('Article', ['title', 'content']);
            this.success(articles);
        } catch (error) {
            this.error(error);
        }
    }
    async create() {
        const { ctx } = this;
        let article = {
            ...ctx.request.body,
            user: this.user
        };
        try {
            article = await ctx.model.Article.create(article);
            this.success('文章发表成功');
        } catch (error) {
            this.error(error)
        }
    }
    async show() {

    }
    async update() {
        const { ctx } = this;
        const { id } = ctx.params;
        let article = ctx.request.body;
        try {
            article = await ctx.model.Article.findByIdAndUpdate(id, article);
            this.success('更新文章成功');
        } catch (error) {
            this.error(error);
        }
    }
    async destroy() {
        const { ctx } = this;
        try {
            let result = await ctx.model.Article.findByIdAndDelete(ctx.params.id);
            this.success(result);
        } catch (error) {
            this.error(error);
        }
    }

    async addPv() {
        const { ctx } = this;
        try {
            await ctx.model.Article.findByIdAndUpdate(ctx.params.id, { $inc: { pv: 1 } });
            this.success('修改pv成功');
        } catch (error) {
            this.error(error)
        }
    }

    async addComment() {
        const { ctx } = this;
        let comment = {
            ...ctx.request.body,
            user: this.user
        }
        try {
            await ctx.model.Article.findByIdAndUpdate(ctx.params.id, {$push: {comments: comment}});
            this.success('添加评论成功');
        } catch (error) {
            this.error(error);
        }
    }
}