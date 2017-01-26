var express = require('express');
var app = express();


app.use(express.static(__dirname + "/app"));

var router = express.Router();
app.use('/api/register', require('./app/controllers/registerCtrl'));
app.use('/api/login', require('./app/controllers/loginCtrl'));

app.use(router);

app.listen(process.env.PORT || 3000);
console.log("Server up on port 3000");
