module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
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

  return User;
};
