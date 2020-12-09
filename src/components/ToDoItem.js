import React, { Component } from 'react';
import { deleteTodo, updateTodo } from '../apis/todos';
import DeleButton from './DeleteButton';
import AddLabelContainer from '../containers/AddLabelContainer'
import LabelGroupContainer from '../containers/LabelGroupContainer';

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

        const { id, text, done } = this.props.toDoItem;
        return (
            <div >
                <input style={{
                    textDecoration: done ? 'line-through' : 'none'
                }} type="button" className="todoItem" value={text} onClick={this.toggleStatus} />
                <DeleButton onClick={this.deleteItem} />
                <LabelGroupContainer toDoItem={this.props.toDoItem} />
                <AddLabelContainer item={this.props.toDoItem} />
            </div >
        );
    }
}

export default ToDoItem;