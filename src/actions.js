import {ADD_TODO_ITEM} from './actionTypes'
export const addToDoItem = (toDoItem) =>{
    return {
        type: ADD_TODO_ITEM,
        payload: toDoItem
    }
}