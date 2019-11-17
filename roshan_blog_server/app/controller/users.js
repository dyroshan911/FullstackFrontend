'use strict';
let BaseController = require('./base');

class UsersController extends BaseController {

  /**
   * 注册
   */
  async signup() {
    const { ctx } = this;
    let user = ctx.request.body;
    try {
      let doc = await ctx.model.User.findOne({
        username: user.username
      });
      if (doc) {
        this.error('用户名已经存在');
      } else {
        user = await ctx.model.User.create(user);
        this.success(user);
      }
    } catch (error) {
      this.error(error);
    }
  }

  /**
   * 登录
   */
  async signin() {
    const { ctx } = this;
    let user = ctx.request.body;
    try {
      let doc = await ctx.model.User.findOne(user);
      if (doc) {
        this.success(doc);
      } else {
        this.error('登陆失败');
      }
    } catch (error) {
      this.error(error);
    }
  }

  /**
   * 获取用户列表
   */
  async get_list() {
    const { ctx } = this;
    try {
      let users = await ctx.model.User.find();
      this.success(users);
    } catch (error) {
      this.error(error);
    }
  }
}

module.exports = UsersController;
