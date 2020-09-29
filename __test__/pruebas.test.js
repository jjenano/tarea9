const request = require('supertest')
const app = require('../app')
let server, agent
const port = process.env.PORT || 5000

// Se inicia el servidor para comenzar a escuchar peticiones
beforeEach(done => {
  server = app.listen(port, err => {
    if (err) return done(err)
    agent = request.agent(server) // se obtiene el puerto en el que corre el server
    done()
  })
})
// despues de cada prueba se cierra el servidor iniciado en beforeEach
afterEach(done => {
  return server && server.close(done)
})

test('Fake Test', () => {
  expect(true)
})

// Server
describe('Pruebas para App/server', function () {
  test('get /', function (done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err)
        done()
      })
  })
})
