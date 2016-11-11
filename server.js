var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var config = require('./config.json');
var cors = require('cors');
var userCtrl = require('./controllers/userCtrl.js');
var profileCtrl = require('./controllers/profileCtrl.js');

var app = express();

app.use(express.static(__dirname + './public'));

app.use(bodyParser.json());

app.use(session({
  secret: 'config.sessionSecret',
  saveUninitialized: false,
  resave: false
}));

var corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));


app.post('/api/login', userCtrl.login);





app.listen(config.port, function(){
  console.log('Listening on port', config.port);
});
