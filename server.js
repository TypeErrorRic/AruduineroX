const express = require('express');
const path = require("path");
app = express();

const port = 3000;
const Hostname = 'localhost';

//Configuraciones
app.set('views', (path.join(__dirname, 'views')));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Rutas
app.use(require('./src/routes/index.js'));

app.listen(port, Hostname, function (req, res) {
    console.log(`http//:${Hostname}:${port}/`);
})