import app from './app'
import { WEB_PORT } from '../shared/config'
import { isProd } from '../shared/util'

app.listen(WEB_PORT, () => {
  console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' : '(development)'}.`)
})
