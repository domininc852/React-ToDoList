import React, { Component } from 'react';
import { addNewTodo } from '../apis/todos';

class ToDoGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = { text: "" }

    }
    addToDoItem = () => {
        let toDoItem = { text: this.state.text, done: false }
        addNewTodo(toDoItem).then((response) => {
            this.props.addToDo(response.data);
        })
        this.setState({
            text: ""
        })
    }
    handleKeyDown = (event) => {
        if (event.key === "Enter") {
            this.addToDoItem();
        }
    }
    changeText = (event) => {
        this.setState({ text: event.target.value });
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.text} placeholder="Input some text here" onChange={this.changeText} onKeyDown={this.handleKeyDown} />
                <input type="button" value="add" onClick={this.addToDoItem} />
            </div>
        );
    }
}

export default ToDoGenerator;