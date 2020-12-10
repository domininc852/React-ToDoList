import React, { Component } from 'react';
import { List, Divider } from 'antd';
import LabelGroupContainer from '../containers/LabelGroupContainer';

class DoneList extends Component {

    render() {
        const data = this.props.doneList;
        return (
            <div className="DoneList">
                <Divider orientation="middle">Done List</Divider>
                <List
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            {item.text}
                            <LabelGroupContainer toDoItem={item} />
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default DoneList;