import { url } from './config.js'
import { loadJson } from './lib.js'
import { printUsers } from './print.js'
import showError from './print.js'

loadJson(url)
  .then(users => printUsers(users))
  .catch(e => showError(e))
