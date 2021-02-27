const express = require('express');
const unirest = require('unirest');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');
let port = process.env.PORT || 7000;

app.use(express.static(__dirname + '/client', { extensions: ['html'] }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', `http://localhost:${port}`);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
	next();
});
app.use(bodyParser.json());

const http = require('http').createServer(app);

http.listen(port, function(){
	console.log('listening on 127.0.0.1:' + port.toString());
});