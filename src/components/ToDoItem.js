import React, { Component } from 'react';
import { deleteTodo, updateTodo } from '../apis/todos';

class ToDoItem extends Component {
    toggleStatus = () => {
        updateTodo(this.props.toDoItem).then((response) => {
            this.props.updateStatus(response.data.id);
        })
    }
    deleteItem = () => {
        deleteTodo(this.props.toDoItem.id).then(() => {
            this.props.deleteItem(this.props.toDoItem.id);
        })

    }
    render() {
        return (
            <div onClick={this.toggleStatus}>
                <input style={{
                    textDecoration: this.props.toDoItem.done ? 'line-through' : 'none',
                }} className="todoItem" type="button" value={this.props.toDoItem.text} onClick={this.toggleStatus} />
                <input type="button" className="deleteButton" value="x" onClick={this.deleteItem} />
            </div>
        );
    }
}

export default ToDoItem;