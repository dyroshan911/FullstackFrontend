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
        ctx.session.user = doc;
        this.success('注册成功');
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
        ctx.session.user = doc;
        this.success('登录成功');
      } else {
        this.error('登陆失败');
      }
    } catch (error) {
      this.error(error);
    }
  }

  /**
   * 退出登录
   */
  async signout() {
    const {ctx} = this;
    this.user = null;
    ctx.session.user = null;
    this.success('登录成功');
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
