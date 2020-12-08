import { ADD_TODO_ITEM, UPDATE_ITEM_STATUS, DELETE_ITEM } from './actionTypes'
export const addToDoItem = (toDoItem) => {
    return {
        type: ADD_TODO_ITEM,
        payload: toDoItem
    }
}
export const updateItemStatus = (id, status) => {
    return { type: UPDATE_ITEM_STATUS, id: id, status: status }
}
export const deleteItem = (id) => {
    return { type: DELETE_ITEM, id: id }
}