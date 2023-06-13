//Load express
const express = require('express');
const path = require('path');

//require the todo database
const todoDb = require('./data/todo-db');
const instructorsDb = require('./data/instructors-db');

//create our express app
const app = express();

//configure the app (app.set)
//provides default engine and extension
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));


//route
app.get('/todos', function(req, res){ //the function to execute in this path
    const todos = todoDb.getAll();
    const instructors = instructorsDb.getInstructors();
    res.render('todos/index', { todos, instructors }); //todos folder, template is index.html
});





//tell the app to listen on port 3000
//for http requests from clients

app.listen(3000,function(){
    console.log('Listening on port 3000.')
});

