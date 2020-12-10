import { ADD_TODO_ITEM, UPDATE_ITEM, DELETE_ITEM, INIT_TODO, ADD_LABEL, INIT_LABEL, DELETE_LABEL, UPDATE_LABEL } from './actionTypes'
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

export const initLabel = (labels) => {
    return { type: INIT_LABEL, payload: labels }
}

export const addLabel = (label) => {
    return { type: ADD_LABEL, payload: label }
}

export const deleteLabel = (id) => {
    return { type: DELETE_LABEL, payload: id }
}

export const updateLabel = (label) => {
    return { type: UPDATE_LABEL, payload: label }
}