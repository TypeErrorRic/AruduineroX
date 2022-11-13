const express = require('express');
const path = require("path");
app = express();

const port = 3000;
const Hostname = 'localhost';

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
})

app.listen(port, Hostname, function (req, res) {
    console.log(`http//:${Hostname}:${port}/`);
})