/**
 * Summary (Plantilla app)
 *
 * Description. (Plantilla app)
 *
 * @class
 * @author Jorge Veliz
 * @since  1.0.0
 */
const express = require('express')
const app = express()
const { logger } = require('./services/logger')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

/**
 *
 * Description. (peticion inicial)
 *
 * @since      1.0.0
 * @param {Tipo} name   Descripcion
*/
app.get('/', (req, res) => {
  logger.log({
    level: 'info',
    class: 'index',
    message: 'peticion inicial'
  })
  res.statusCode = 200
  res.end('Bye world')
})

module.exports = app
