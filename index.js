require('dotenv').config();

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/salut", function (req, res) {
    res.json({greeting: 'salut API'});
});

app.get('/api/whoami', (req, res) => {
    const ip = req.headers['x-forwarded-for']
    const lang = req.headers['accept-language']
    const software = req.headers['user-agent']
    res.json({ipaddress: ip, language: lang, software});
  });

const listener = app.listen(process.env.PORT, function () {
    console.log('Votre application écoute sur le port ' + listener.address().port);
});