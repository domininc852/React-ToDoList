import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'

class ToDoGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = { text: "" }

    }

    addToDoItem = () => {
        let toDoItem = { id: uuidv4(), text: this.state.text, done: false }
        this.props.addToDo(toDoItem);
        this.setState({
            text: ""
        })
    }
    changeText = (event) => {
        this.setState({ text: event.target.value });
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.text} placeholder="Input some text here" onChange={this.changeText} />
                <input type="button" value="add" onClick={this.addToDoItem} />
            </div>
        );
    }
}

export default ToDoGenerator;