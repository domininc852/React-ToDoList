import {combineReducers} from 'redux'
import {ADD_TODO_ITEM} from './actionTypes'

const ToDos= (state=[], action) =>{
    if (action.type===ADD_TODO_ITEM){
        return [action.payload,...state];
    }
    return state;

}

export default combineReducers(
    {
        ToDos
    }
)

