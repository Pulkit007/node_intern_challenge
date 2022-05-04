const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const todosRoutes = require('./routes/todos');

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/todos', todosRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.listen(3000, () => {
    console.log('This app listening on port 3000!');
});