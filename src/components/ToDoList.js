import React, { Component } from 'react';
import ToDoGeneratorContainer from '../containers/ToDoGeneratorContainer';
import ToDoGroupContainer from '../containers/ToDoGroupContainer'
class ToDoList extends Component {
    render() {
        return (
            <div className="TodoList">
                <div className="TodoGroup">
                    <ToDoGroupContainer />
                    <ToDoGeneratorContainer />
                </div>

            </div>
        );
    }
}

export default ToDoList;