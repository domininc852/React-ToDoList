import React, { Component } from 'react';
import { deleteTodo, updateTodo } from '../apis/todos';
import DeleButton from './DeleteButton';
import LabelGroupContainer from '../containers/LabelGroupContainer';
import LabelAdderDropDownContainer from '../containers/LabelAdderDropDownContainer'


class ToDoItem extends Component {
    toggleStatus = () => {
        const toDoItem = { ...this.props.toDoItem, done: !this.props.toDoItem.done }
        updateTodo(toDoItem).then((response) => {
            this.props.updateStatus(response.data);
        })
    }
    deleteItem = () => {
        deleteTodo(this.props.toDoItem.id).then(() => {
            this.props.deleteItem(this.props.toDoItem.id);
        })

    }
    render() {

        const { text, done } = this.props.toDoItem;

        return (
            <div>
                <div className="ItemLabel">
                    <input style={{
                        textDecoration: done ? 'line-through' : 'none'
                    }} type="button" className="todoItem" value={text} onClick={this.toggleStatus} />
                    <LabelAdderDropDownContainer toDoItem={this.props.toDoItem}/>
                    <DeleButton onClick={this.deleteItem} />
                </div>

                <LabelGroupContainer toDoItem={this.props.toDoItem} />
            </div>
        );
    }
}

export default ToDoItem;