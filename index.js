// server.js
const app = require('./app')
const { logger } = require('./services/logger')
const port = process.env.PORT || 80

app.listen(port, () => {
  var mesg = `Servidor Iniciado en el puerto ${port}`
  logger.log({
    level: 'info',
    class: 'index',
    message: mesg
  })
})
