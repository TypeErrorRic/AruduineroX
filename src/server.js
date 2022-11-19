const express = require('express');
const path = require("path");
const morgan = require('morgan');
const ejs = require('ejs');

const app = express();

//Configuraciones
app.set('port',3000)
app.set('views', (path.join(__dirname, 'views')));
app.set('view engine', 'ejs');
//app.engine('html', require('ejs').renderFile);

//Traer rutas:
const Index = require('./routes/index')

//Middlewares:
app.use(express.json());
app.use(express.text());
app.use(morgan('dev'))

const Hostname = 'localhost';
app.use(Index);

//Carppeta estaticas:
app.use('/public', express.static(path.join(__dirname, '/public')))

app.use((req, res) => {
    res.status(404).send('Pagina no encontrada. ');
})

app.listen(app.get('port'), Hostname, function (req, res) {
    console.log(`http://${Hostname}:${app.get('port')}/`);
})
