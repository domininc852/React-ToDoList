import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'

class ToDoGenerator extends Component {
    constructor(props) {
        super(props);

    }

    addToDoItem = (event) => {
        let toDoItem = { id: uuidv4(), text: document.getElementById("text").value, done: false }
        this.props.addToDo(toDoItem);
    }

    render() {
        return (
            <div>
                <input id="text" type="text" placeholder="Input some text here" />
                <input type="button" value="add" onClick={this.addToDoItem} />
            </div>
        );
    }
}

export default ToDoGenerator;