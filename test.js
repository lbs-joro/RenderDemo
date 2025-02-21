const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Hej från Johan!");
})

app.listen(3000);