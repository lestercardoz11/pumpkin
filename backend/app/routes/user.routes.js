module.exports = (app) => {
  const users = require('../controllers/user.controller.js');

  var router = require('express').Router();

  router.post('/', users.create);

  router.post('/validate', users.validateUser);

  app.use('/api/users', router);
};
