const express = require('express');
const router = express.Router();

let todos = [];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Todo App',
    todos: todos,
  });
});

/* POST home page. */
router.post('/', function(req, res, next) {
  const todo = req.body.todo;
  todos.push(todo);
  res.render('index', { title: 'Todo App'});

  res.redirect('/');
});

module.exports = router;
