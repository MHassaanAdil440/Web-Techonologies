const http = require('http')
const routing = require('./routing')

http.createServer(routing.onRequest()).listen(5000)