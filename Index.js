const express = require('express');
app = express();

const port = 3000;
const Hostname = 'localhost'

app.get('/', (req,res) => {
    res.send('No sé');
})

app.listen(port, Hostname, function (req, res) {
    console.log(`http//:${Hostname}:${port}/`)
})