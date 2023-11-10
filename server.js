const express = require('express');

const path = require('path');

const todoDb = require('./data/todo-db');

const app = express(); 

//app.set comes before app. use
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

//app.use comes before app.get

app.get('/', function (req, res){
 res.send ('<h1>hellope</h1>');   
});


app.get('/home', function (req, res){
    res.render ('home');
   }); 

 app.get('/todos', function(req, res) {
    res.render('todos/index', {
        todos: todoDb.getAll()
    
    });
 });

 


 //  comes atthe very botton telling it all to listen
app.listen(3000, function () {
console.log('Listening on port 3000');    
});





