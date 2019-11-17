let BaseController = require('./base');

module.exports = class CategoriesController extends BaseController {
    async index() {
        const { ctx } = this;
        try {
            let categories = await ctx.model.Category.find();
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

    }
    async destroy() {

    }
}