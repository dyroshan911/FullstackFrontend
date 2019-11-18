'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/user', controller.users.get_list);
  router.post('/api/user/signup', controller.users.signup);
  router.post('/api/user/signin', controller.users.signin);
  router.post('/api/user/signout', controller.users.signout);
  // router.get('/news', controller.news.index);

  router.resources('categories', '/api/categories', controller.categories); //文章分类
  router.resources('articles', '/api/articles', controller.articles); //文章

  //阅读量
  router.get('/api/articles/pv/:id', controller.articles.addPv);
  router.post('/api/articles/comment/:id', controller.articles.addComment);
};
