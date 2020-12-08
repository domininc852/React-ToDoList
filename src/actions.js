import { ADD_TODO_ITEM, UPDATE_ITEM_STATUS, DELETE_ITEM } from './actionTypes'
export const addToDoItem = (toDoItem) => {
    return {
        type: ADD_TODO_ITEM,
        payload: toDoItem
    }
}
export const updateItemStatus = (id) => {
    return { type: UPDATE_ITEM_STATUS, payload: id, }
}
export const deleteItem = (id) => {
    return { type: DELETE_ITEM, payload: id }
}