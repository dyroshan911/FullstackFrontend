'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/user', controller.users.get_list);
  router.post('/api/user', controller.users.signup);
  // router.get('/news', controller.news.index);
};
