const db = require('../models');
const User = db.users;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.username && !req.body.password) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  const user = {
    username: req.body.username,
    password: req.body.password,
    isContributer: req.body.isContributer ? req.body.isContributer : false,
  };

  User.findAll({
    where: { username: req.body.username },
  })
    .then((data) => {
      if (data.length === 0) {
        User.create(user)
          .then((value) => {
            res.send(value);
          })
          .catch((err) => {
            res.status(500).send({
              message:
                err.message || 'Some error occurred while creating user.',
            });
          });
      } else {
        res.status(500).send({
          message: 'Username already present',
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating user.',
      });
    });
};

exports.validateUser = (req, res) => {
  User.findAll({
    where: { username: req.body.username, password: req.body.password },
  })
    .then((data) => {
      if (data.length !== 0) {
        res.send(data);
      } else {
        res.status(500).send({
          message: 'Please check your username and password',
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving user.',
      });
    });
};
