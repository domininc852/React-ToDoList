import { combineReducers } from 'redux'
import { ADD_TODO_ITEM, UPDATE_ITEM_STATUS, DELETE_ITEM, INIT_TODO, ADD_LABEL, DELETE_LABEL } from './actionTypes'

const ToDos = (state = [], action) => {
    if (action.type === INIT_TODO) {
        return action.payload;
    }

    if (action.type === ADD_TODO_ITEM) {
        return [action.payload, ...state];
    }
    if (action.type === UPDATE_ITEM_STATUS) {
        return state.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo);
    }
    if (action.type === DELETE_ITEM) {
        return state.filter(todo => todo.id !== action.payload);
    }
    if (action.type === ADD_LABEL) {
        return state.map(todo => todo.id === action.payload.id ? { ...action.payload } : todo);
    }
    if (action.type === DELETE_LABEL) {
        return state.map(todo => todo.id === action.payload.id ? { ...action.payload } : todo);
    }
    return state;


}

export default combineReducers(
    {
        ToDos
    }
)

