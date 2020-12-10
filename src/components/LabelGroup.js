import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { updateTodo } from '../apis/todos'

class LabelGroup extends Component {
    deleteLabel = (event) => {
        const labels = this.props.toDoItem.labels.filter((label,index)=>index!=event.target.id);
        const toDoItem = {...this.props.toDoItem, labels:labels};
        updateTodo(toDoItem).then((response) => {
            this.props.deleteLabel(response.data);
        })
    }


    render() {
        return (
            <div className="LabelGroup">
                {this.props.toDoItem.labels.map((label, index) => <label key={uuidv4()} id={index} onClick={this.deleteLabel} className="label" style={{ background: label.color }}>{label.description}</label>)}
            </div>
        );
    }
}

export default LabelGroup;