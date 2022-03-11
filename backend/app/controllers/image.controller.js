const db = require('../models');
const multer = require('multer');
const Image = db.images;
const Op = db.Sequelize.Op;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single('file');

exports.upload = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.sendStatus(500);
    }
    res.send(req.file);
  });
};

exports.create = (req, res) => {
  if (!req.body.contributer && !req.body.name) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  const values = {
    contributer: req.body.contributer,
    name: req.body.name,
    category: req.body.category,
    downloads: 0,
  };

  Image.create(values)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Image.',
      });
    });
};

exports.findAllImages = (req, res) => {
  Image.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving images.',
      });
    });
};

exports.findAllImagesByContributer = (req, res) => {
  if (!req.query.name) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  Image.findAll({
    where: { contributer: req.query.name },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving images.',
      });
    });
};

exports.download = (req, res) => {
  if (!req.body.contributer && !req.body.name) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  Image.update(
    { downloads: req.body.downloads + 1 },
    { where: { contributer: req.body.contributer, name: req.body.name } }
  )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Image.',
      });
    });
};

exports.filterImages = (req, res) => {
  if (!req.query.value) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  Image.findAll({
    where: { category: req.query.value },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving images.',
      });
    });
};
