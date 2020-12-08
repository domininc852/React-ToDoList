import React, { Component } from 'react';

class ToDoItem extends Component {
    toggleStatus = () => {
        this.props.updateStatus(this.props.id, this.props.done);
    }
    render() {
        return (
            <div>
                <input style={{
                    textDecoration: this.props.done ? 'line-through' : 'none',
                }} type="button" value={this.props.text} id={this.props.id} onClick={this.toggleStatus} />
            </div>
        );
    }
}

export default ToDoItem;