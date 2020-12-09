import React, { Component } from 'react';
import ToDoItemContainer from '../containers/ToDoItemContainer'
import {getAllTodoList} from '../apis/todos'

class ToDoGroup extends Component {

    componentDidMount() {
        getAllTodoList().then((response) => {
            this.props.initTodo(response.data);
        })
    }

    render() {
        return (
            this.props.toDoList.map(toDoItem => {
                return <ToDoItemContainer toDoItem={toDoItem} key={toDoItem.id}  />
            })
        );
    }
}

export default ToDoGroup;