const express = require('express');
const bodyParser = require('body-parser');
app = express();

app.use(function (req,res,next) {
    res.header ('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header ('Access-Control-Allow-Credentials', true)
    res.header ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header ('Access-Control-Allow-Headers', 'Content-Type')
    next();

})
app.get('/tutor',function (req,res,next) {

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({"data":[
            {"id": 1, "name": "supun"},
            {"id": 2, "name": "yasith"},
            {"id": 3, "name": "buddhika"}
        ]}
    ));
})
app.listen(3000,function () {
    console.log("app running 3000")
})