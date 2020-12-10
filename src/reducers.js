import { act } from 'react-dom/test-utils';
import { combineReducers } from 'redux'
import { ADD_TODO_ITEM, UPDATE_ITEM, DELETE_ITEM, INIT_TODO, ADD_LABEL, INIT_LABEL, DELETE_LABEL, UPDATE_LABEL } from './actionTypes'

const ToDos = (state = [], action) => {
    if (action.type === INIT_TODO) {
        return action.payload;
    }

    if (action.type === ADD_TODO_ITEM) {
        return [...state,action.payload ];
    }
    if (action.type === UPDATE_ITEM) {
        return state.map(todo => todo.id === action.payload.id ? { ...action.payload } : todo);
    }
    if (action.type === DELETE_ITEM) {
        return state.filter(todo => todo.id !== action.payload);
    }
    return state;


}

const labels = (state = [], action) => {
    if (action.type === INIT_LABEL) {
        return action.payload;
    }
    if (action.type === ADD_LABEL) {
        return [action.payload, ...state];
    }
    if (action.type === DELETE_LABEL) {
        return state.filter(label => label.id !== action.payload);
    }
    if (action.type === UPDATE_LABEL) {
        return state.map(label => label.id === action.payload.id ? { ...action.payload } : label);
    }
    return state;
}
export default combineReducers(
    {
        ToDos,
        labels
    }
)

