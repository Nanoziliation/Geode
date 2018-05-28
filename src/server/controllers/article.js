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
}

export default ArticleController
