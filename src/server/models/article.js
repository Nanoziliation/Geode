const ArticleModel = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    content: DataTypes.TEXT,

    order: DataTypes.INTEGER,

    editable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },

  })

  return Article
}

export default ArticleModel
