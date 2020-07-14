//Definimos esl servidor de trabajo
const express = require('express');
//Constante de nuesra aplicacion.
const app = express();
//Permite conectar dos servidores, y poder mandar y recibir datos.
const cors = require('cors');

//Settings
app.set('port',process.env.PORT || 4000);


//Middlewares funciones que se ejecutan antes de llegar a las urls
app.use(cors());

app.use(express.json());

//Routes
app.use('/api/users',require('./routes/users'));
app.use('/api/notes',require('./routes/notes'));

module.exports = app;

