const axios = require('axios');

const getAllTodos = async (req, res) => {
    const data = [];
    axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
        response.data.map((item) => {
            data.push({
                id: item.id,
                title: item.title,
                completed: item.completed
            });
        });
        res.json(data);
    }).catch((err) => {
        res.status(500).json({
            message: 'Error getting todos',
        });
    });
};

const getTodoById = async (req, res) => {
    const id = req.params.id;
    await axios.get('https://jsonplaceholder.typicode.com/users/' + id).then(async (response) => {
        const data = {
            id: response.data.id,
            name: response.data.name,
            email: response.data.email,
            phone: response.data.phone,
            todos: []
        }

        await axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
            response.data.map((item) => {
                if (item.userId === data.id) {
                    data.todos.push(item);
                }
            });
        });
        res.json(data);
    }
    ).catch((err) => {
        res.status(500).json({
            message: 'Error getting required data',
        });
    });
}

module.exports = {
    getAllTodos,
    getTodoById
};