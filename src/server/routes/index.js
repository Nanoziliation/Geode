import { Router } from 'express'

import ArticleController from '../controllers/article'

const routes = Router()

routes.post('/articles', ArticleController.create)
routes.get('/articles', ArticleController.list)
routes.get('/:articleSlug', ArticleController.retrieve)

export default routes
