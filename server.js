var express = require('express');
var app = express();
var pg = require('pg');
const pgp =require ('pg-promise')();



app.use(express.static(__dirname + "/app"));
//app.use(express.bodyParser());

var router = express.Router();
app.use('/api/register', require('./app/controllers/registerCtrl'));
app.use('/api/login', require('./app/controllers/loginCtrl'));

app.use(router);

/*
pg.defaults.ssl = true;
pg.connect(process.env.DATABASE_URL, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');
  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});*/





app.listen(process.env.PORT || 3000);
console.log("Server up on port 3000");
