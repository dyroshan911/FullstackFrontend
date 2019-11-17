'use strict';

const { Controller } = require('egg');

//控制器基类，封装通用方法
class BaseController extends Controller {

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