'use strict';
let BaseController = require('./base');

class UsersController extends BaseController {

  /**
   * 注册
   */
  async signup() {
    const { ctx } = this;
    try {
      let user = ctx.request.body;
      user =  await ctx.model.User.create(user);
      this.success(user);
    } catch (error) {
      this.error(error);
    }
  }

  /**
   * 登录
   */

  /**
   * 获取用户列表
   */
  async get_list() {
    const { ctx } = this;
    try {
      let users =  await ctx.model.User.find();
      this.success(users);
    } catch (error) {
      this.error(error);
    }
  }
}

module.exports = UsersController;
