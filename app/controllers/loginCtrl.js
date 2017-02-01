
module.exports = function(){
  var express = require('express');
  var bodyParser = require('body-parser')
  var app = express();
  const pgp =require ('pg-promise')();
  const env=process.env.DATABASE_URL;
  const db =pgp(env || 'postgres://:@localhost/educationdb' );
  var fs = require("fs");

  app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
  app.use(bodyParser.json());

  app.post('/', function(req, res){
      console.log("revisando");
      console.log(req.body);
      db.any('SELECT * FROM USERS',[true] ).then (function(data) {
      console.log('data',data[0] );
      res.send({ status: data[0] });

      //console.log(reviewUsr(3,4) );
      } );


  });

  return app;
}();


function reviewUsr(a, b) {
    return a * b;                // Function returns the product of a and b
}
