const express = require('express');
const { getAllTodos, getTodoById } = require('../controllers/todos');

const router = express.Router();

router.get('/', getAllTodos);
router.get('/:id', getTodoById);

module.exports = router;