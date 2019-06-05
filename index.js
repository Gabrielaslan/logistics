var path = require('path')
var express = require("express");
var app = express();




var db ={username:'gabrielaslan2016@gmail.com', password:"pass"}

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))



  app.get('/', (req, res) => {
    res.render('index', { name: 'Flavio' })
  })

app.get("/login", function(req, res){
    console.log(req)
    if(req.query.username == db.username){
        if(req.query.password == db.username){
            res.send(dashboard.html)
        }
        else res.send({value:true, string:"invalued"});
    console.log("You start program https://localhost:" + port)

})