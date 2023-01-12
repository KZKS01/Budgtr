const express = require('express');
const Budgets = require('./models/budget');
const app = express();
const port = 3000;

app.use(express.static('public')); //middleware: tells the server to the request and look at public folder, 
//so that the links for <link>, <script>, etc. doesn't need /public in the route, look at show.ejs line 7

app.get('/', function(req, res){
    res.redirect('/budget');
})
//GET /budget - Index
app.get('/budget', function(req, res){
    res.render('index.ejs', {Budget: Budgets});
});

//GET /budget/new - New
app.get('/budget/new', function(req, res){
    res.render('new.ejs');
})

//POST /budget - Create
app.post('/budget', function(req, res){
    res.send('This page takes data');
})

//GET /budget/:index - Show
app.get('/budget/:index', function(req,res){
    const budget = Budgets[req.params.index];
    res.render('show.ejs', {Budget: budget}); //original line 30
})

app.listen(port, function(){
    console.log(`Express is listening on port ${port} `); //a callback function which will be invoked when app.listen runs
});