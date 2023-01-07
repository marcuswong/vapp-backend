module.exports = (sequelize, Sequelize) => {
  const vocab = sequelize.define("vocab", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    remark: {
      type: Sequelize.STRING
    }
  });

  return vocab;
};