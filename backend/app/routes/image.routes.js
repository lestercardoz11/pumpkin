module.exports = (app) => {
  const images = require('../controllers/image.controller.js');

  var router = require('express').Router();

  router.post('/', images.create);
  router.get('/', images.findAllImages);

  router.post('/upload', images.upload);
  router.get('/contributer', images.findAllImagesByContributer);
  router.post('/download', images.download);
  router.get('/category', images.filterImages);

  app.use('/api/images', router);
};
