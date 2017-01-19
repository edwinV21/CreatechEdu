var express = require('express');
var app = express();


app.use(express.static(__dirname + "/app"));

var loginCtrl = require('./app/controllers/loginCtrl');

var router = express.Router();

router.route('/pruebaGet').get(loginCtrl.findUser );
app.use(router);

app.listen(process.env.PORT || 3000);
console.log("Server up on port 3000");
