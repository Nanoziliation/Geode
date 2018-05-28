import { Article } from '../models'

class ArticleController {
  static create(req, res) {
    return Article
      .create({
        title: req.body.title,
        content: req.body.content,
        editable: req.body.editable,
      })
      .then(article => res.status(201).send(article))
      .catch(error => res.status(400).send(error))
  }
  static list(req, res) {
    return Article
      .all()
      .then(article => res.status(200).send(article))
      .catch(error => res.status(400).send(error.toString()))
  }
  static retrieve(req, res) {
    return Article
      .findOne({ where: { slug: req.params.articleSlug } })
      .then(article => {
        if (!article) {
          return res.status(404).send({
            message: 'Article not found',
          })
        }
        res.status(200).send(article)
      })
      .catch(error => res.status(400).send(error.toString()))
  }
  static update(req, res) {
    return Article
      .findOne({ where: { slug: req.params.articleSlug } })
      .then(article => {
        if (!article) {
          return res.status(404).send({
            message: 'Article not found',
          })
        }
        return article
          .updateAttributes({
            title: req.body.title || article.title,
            content: req.body.content || article.content,
            order: req.body.order || article.order,
            editable: req.body.editable || article.editable ,
            updatedAt: req.body.updatedAt || article.updatedAt ,
          })
          .then(() => res.status(200).send(todo))
          .catch((error) => res.status(400).send(error))
      })
      .catch((error) => res.status(400).send(error))
  }
}

export default ArticleController
