import { ADD_TODO_ITEM, UPDATE_ITEM, DELETE_ITEM, INIT_TODO, ADD_LABEL, DELETE_LABEL } from './actionTypes'
export const addToDoItem = (toDoItem) => {
    return {
        type: ADD_TODO_ITEM,
        payload: toDoItem
    }
}
export const updateItem = (toDoItem) => {
    return { type: UPDATE_ITEM, payload: toDoItem }
}
export const deleteItem = (id) => {
    return { type: DELETE_ITEM, payload: id }
}

export const initTodo = (todoList) => {
    return { type: INIT_TODO, payload: todoList }
}
