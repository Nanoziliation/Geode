import SequelizeSlugify from 'sequelize-slugify'

const ArticleModel = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    slug: {
      type: DataTypes.STRING,
      unique: true,
    },

    content: DataTypes.TEXT,

    order: DataTypes.INTEGER,

    editable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },

   updatedAt: {
     type: DataTypes.DATE,
     allowNull: false,
   },

  })

  SequelizeSlugify.slugifyModel(Article, {
    source: ['title'],
  })

  return Article
}

export default ArticleModel
