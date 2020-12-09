import React, { Component } from 'react';
import { deleteTodo, updateTodo } from '../apis/todos';
import { Button } from 'antd';

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
            <div className="site-button-ghost-wrapper">
                <Button className="todoItem" onClick={this.toggleStatus} style={{
                        textDecoration: this.props.toDoItem.done ? 'line-through' : 'none',
                    }} type="primary" ghost>{this.props.toDoItem.text}
                </Button>
                <Button type="primary" ghost onClick={this.deleteItem}>X</Button>
            </div>
        );
    }
}

export default ToDoItem;