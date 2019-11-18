'use strict';

const { Controller } = require('egg');

//控制器基类，封装通用方法
class BaseController extends Controller {

    get user() {
        return this.ctx.session.user;
    }

    //获取分页数据
    async getPager(modelName, fieds = []) {
        const { ctx } = this;
        let { pageNum = 1, pageSize = 5, keyword = '' } = ctx.query;
        pageNum = isNaN(pageNum) ? 1 : parseInt(pageNum);
        pageSize = isNaN(pageSize) ? 5 : parseInt(pageSize);
        let query = {};
        if (keyword) {
            query['$or'] = fieds.map(item => ({ [item]: new RegExp(keyword) }))
        }
        let total = await ctx.model[modelName].count(query);
        let items = await ctx.model[modelName].find(query).skip((pageNum - 1) * pageSize).limit(pageSize);
        items.total = total;
        return {
            items,
            total,
            pageNum,
            pageSize,
            pageCount: Math.ceil(total / pageSize)
        };
    }

    //请求成功时的返回
    success(data) {
        this.ctx.body = {
            code: 0,
            data
        }
    }

    //请求失败时的返回
    error(error) {
        console.error(error);
        this.ctx.body = {
            code: 1,
            error
        }
    }
}

module.exports = BaseController;