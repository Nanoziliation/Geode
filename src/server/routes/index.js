import { Router } from 'express'

import ArticleController from '../controllers/article'

const routes = Router()

routes.post('/articles', ArticleController.create)
routes.get('/articles', ArticleController.list)
routes.get('/:articleSlug', ArticleController.retrieve)
routes.put('/:articleSlug', ArticleController.update)
routes.delete('/:articleSlug', ArticleController.destroy)

export default routes
