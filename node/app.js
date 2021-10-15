const express = require("express");
const app = express();

app.listen(3000, () => {console.log("esto anda")});

app.get('/', function(req, res){
    res.send("bienvenidos al sito :) ")
});