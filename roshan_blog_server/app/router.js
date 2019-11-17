'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/user', controller.users.get_list);
  router.post('/api/user/signup', controller.users.signup);
  router.post('/api/user/signin', controller.users.signin);
  // router.get('/news', controller.news.index);

  router.resources('categories', '/api/categories', controller.categories);
};
