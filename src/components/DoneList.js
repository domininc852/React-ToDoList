import React, { Component } from 'react';

class DoneList extends Component {
    render() {
        return (
            <ul>
                {this.props.doneList.map(doneItem => {
                    return <li>{doneItem.text}</li>;
                })}
            </ul>
        );
    }
}

export default DoneList;