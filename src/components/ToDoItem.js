import React, { Component } from 'react';

class ToDoItem extends Component {
    toggleStatus = () => {
        this.props.updateStatus(this.props.id);
    }
    deleteItem = () => {
        this.props.deleteItem(this.props.id);
    }
    render() {
        return (
            <div>
                <input style={{
                    textDecoration: this.props.done ? 'line-through' : 'none',
                }} class="todoItem" type="button" value={this.props.text} id={this.props.id} onClick={this.toggleStatus} />
                <input type="button" class="deleteButton" value="x" onClick={this.deleteItem} />
            </div>
        );
    }
}

export default ToDoItem;