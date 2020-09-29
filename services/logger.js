var winston = require('winston')
require('winston-daily-rotate-file')
const { combine, timestamp, prettyPrint } = winston.format
// configuracion de los archivos log
var infoTransport = new winston.transports.DailyRotateFile({
  filename: 'P3-%DATE%.log',
  dirname: './services/logs',
  datePattern: 'DD-MM-YYYY',
  zippedArchive: true, // Archivos de logs de dias anteriores .gz
  maxSize: '20m', // Tamaño maximo por archivo 20 mb
  maxFiles: '15d' // Backup de logs, dado en dias para control de posibles fallas en ese periodo
})

// Tiempo y zona horaria customizada
const timezoned = () => {
  var now = new Date()
  return new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString()
}

module.exports.logger = winston.createLogger({
  format: combine(
    timestamp(
      {
        format: timezoned // formato de fecha puesta en funcion
      }
    ), prettyPrint() // formato json
  ),
  transports: [
    infoTransport,
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(), // colorea el level
        winston.format.simple(), // formato de salida simple, una linea sin modo json
        winston.format.timestamp(
          {
            format: timezoned // formato de fecha puesta en funcion
          })
      )
    })
  ]
})
