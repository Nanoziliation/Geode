module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: DataTypes.STRING,
    editable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    order: DataTypes.INTEGER
  }, {})
  Article.associate = (models) => {
    // associations can be defined here
  }
  return Article;
}
