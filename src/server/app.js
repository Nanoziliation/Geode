import compression from 'compression'
import express from 'express'
import bodyParser from 'body-parser'

import { STATIC_PATH } from '../shared/config'
import { isProd } from '../shared/util'
import routes from './routes'

const app = express()

app.use(compression())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(routes)

export default app
