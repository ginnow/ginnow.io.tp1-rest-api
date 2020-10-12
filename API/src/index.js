const express = require('express');
const cors = require('cors');
const server = express();

server.set('port', process.env.PORT || 5000);

server.listen(server.get('port'));

server.use(express.json());

server.use(cors());

server.use(require('./routes/route.factura'));

console.log('Servidor funcionando correctamente en puerto', server.get('port'));