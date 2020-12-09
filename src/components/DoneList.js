import React, { Component } from 'react';

class DoneList extends Component {
    render() {
        return (
            <div className="DoneList">
                <h1>Done List</h1>
                <ul style={{display: "table", margin:"0 auto"}}>
                    {this.props.doneList.map(doneItem => {
                        return <li key={doneItem.id}>{doneItem.text}</li>;
                    })}
                </ul>
            </div>
        );
    }
}

export default DoneList;