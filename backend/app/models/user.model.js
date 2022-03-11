module.exports = (sequelize, Sequelize) => {
  return sequelize.define('user', {
    username: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    isContributer: {
      type: Sequelize.BOOLEAN,
    },
  });
};
