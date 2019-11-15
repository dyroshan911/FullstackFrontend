'use strict';

let { Controller } = require('egg');

class News extends Controller {
    //控制器只负责只会处理请求的参数，和返回响应
    async index() {
        const { ctx } = this;
        let news = await this.service.news.fetch();

        await ctx.render('news.ejs', { news });
    }
}

module.exports = News;