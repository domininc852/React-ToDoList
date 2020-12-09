import React, { Component } from 'react';

class ToDoItem extends Component {
    toggleStatus = () => {
        this.props.updateStatus(this.props.toDoItem.id);
    }
    deleteItem = () => {
        this.props.deleteItem(this.props.toDoItem.id);
    }
    render() {
        return (
            <div>
                <input style={{
                    textDecoration: this.props.toDoItem.done ? 'line-through' : 'none',
                }} className="todoItem" type="button" value={this.props.toDoItem.text} onClick={this.toggleStatus} />
                <input type="button" className="deleteButton" value="x" onClick={this.deleteItem} />
            </div>
        );
    }
}

export default ToDoItem;