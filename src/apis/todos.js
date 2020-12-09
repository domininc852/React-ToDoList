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
    return api.put('/todos/' + todoItem.id, { ...todoItem, done: !todoItem.done });
}

export const updateLabel = (todoItem) => {
    return api.put('/todos/' + todoItem.id, { ...todoItem, labels: todoItem.labels });
}