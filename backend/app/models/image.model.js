module.exports = (sequelize, Sequelize) => {
  return sequelize.define('image', {
    contributer: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
    downloads: {
      type: Sequelize.INTEGER,
    },
  });
};
