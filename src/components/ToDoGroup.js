import React, { Component } from 'react';
import ToDoItemContainer from '../containers/ToDoItemContainer'

class ToDoGroup extends Component {

    render() {
        return (
            this.props.toDoList.map(toDoItem => {
                return <ToDoItemContainer toDoItem={toDoItem} key={toDoItem.id}  />
            })
        );
    }
}

export default ToDoGroup;