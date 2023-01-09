const express = require('express');
const app = express();
const port = 3000;

//GET /budgets - Index
app.get('/budgets', function(req, res){
    res.send('budgets page');
});

//GET /budgets/new - New
app.get('/budgets/new', function(req, res){
    res.send('Add new budgets');
})

//POST /budgets - Create
app.post('/budgets', function(req, res){
    res.send('This page takes data');
})

//GET /budgets/:index - Show
app.get('/budgets/:index', function(req,res){
    res.send('budgets index page');
})

app.listen(port, function(){
    console.log(`Express is listening on port ${port} `); //a callback function which will be invoked when app.listen runs
});