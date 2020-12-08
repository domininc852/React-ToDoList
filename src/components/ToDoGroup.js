import React, { Component } from 'react';
import ToDoItem from './ToDoItem'

class ToDoGroup extends Component {

    render() {
        return (
            this.props.toDoList.map(toDoItem => { 
                return <ToDoItem id={toDoItem.id} key={toDoItem.id} text={ToDoItem.text} done={toDoItem.done} />
            })
        );
    }
}

export default ToDoGroup;