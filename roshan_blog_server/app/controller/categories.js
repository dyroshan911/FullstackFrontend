let BaseController = require('./base');

module.exports = class CategoriesController extends BaseController {
    async index() {
        try {
            let categories = await this.getPager('Category', ['name']);
            this.success(categories);
        } catch (error) {
            this.error(error);
        }
    }
    async create() {
        const { ctx } = this;
        let category = ctx.request.body;
        try {
            let doc = await ctx.model.Category.findOne(category);
            if (doc) {
                this.error('分类已存在');
            } else {
                category = await ctx.model.Category.create(category);
                this.success(category);
            }
        } catch (error) {
            this.error(error)
        }
    }
    async show() {

    }
    async update() {
        const { ctx } = this;
        const { id } = ctx.params;
        let category = ctx.request.body;
        try {
            category = await ctx.model.Category.findByIdAndUpdate(id, category);
            this.success(category);
        } catch (error) {
            this.error(error);
        }
    }
    async destroy() {
        const { ctx } = this;
        try {
            let result = await ctx.model.Category.findByIdAndDelete(ctx.params.id);
            this.success(result);
        } catch (error) {
            this.error(error);
        }
    }
}