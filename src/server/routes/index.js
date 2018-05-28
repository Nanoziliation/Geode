import { Router } from 'express'

import ArticleController from '../controllers/article'

const routes = Router()

routes.post('/articles', ArticleController.create)
routes.get('/articles', ArticleController.list)

export default routes
