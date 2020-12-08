import React, { Component } from 'react';

class ToDoItem extends Component {
    toggleStatus = () => {
        const status= !this.props.done
        this.setState({done: status});
    }
    render() {
        return (
            <div>
                <input style={{
                    textDecoration: this.props.done ? 'line-through' : 'none',
                }} type="button" onClick={this.toggleStatus} />
            </div>
        );
    }
}

export default ToDoItem;