var express = require('express');
var app = express();


app.use(express.static(__dirname + "/app"));

var router = express.Router();

router.get('/pruebaGet', function(req, res) {
   res.send("Hello World!");
});
app.use(router);


app.listen(process.env.PORT || 3000);
console.log("Server up on port 3000");
