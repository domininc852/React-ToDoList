import api from './api';


export const getAllTodoList = () => {
    return api.get('/todos');
}

export const addNewTodo = (todoItem) => {
    return api.post('/todos', todoItem);
}

export const deleteTodo = (todoItemId) => {
    return api.delete('/todos/' + todoItemId)
}

export const updateTodo = (todoItem) => {
    const labels = todoItem.labels.map(label => label.id);
    const todoItemWithoutID = { text: todoItem.text, done: todoItem.done, labels: labels }
    return api.put('/todos/' + todoItem.id, todoItemWithoutID);
}


