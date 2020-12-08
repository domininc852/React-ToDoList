import React, { Component } from 'react';
import ToDoItemContainer from '../containers/ToDoItemContainer'

class ToDoGroup extends Component {

    render() {
        return (
            this.props.toDoList.map(toDoItem => {
                return <ToDoItemContainer id={toDoItem.id} key={toDoItem.id} text={toDoItem.text} done={toDoItem.done} />
            })
        );
    }
}

export default ToDoGroup;