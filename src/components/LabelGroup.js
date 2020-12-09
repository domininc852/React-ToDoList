import React, { Component } from 'react';

class LabelGroup extends Component {
    render() {
        return (
            <div className="LabelGroup">
                {this.props.toDoItem.labels.map(label => <label className="label" style={{ background: label.color }}>{label.description}</label>)}
            </div>
        );
    }
}

export default LabelGroup;