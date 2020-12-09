import React, { Component } from 'react';
import { List, Divider } from 'antd';
import LabelGroup from './LabelGroup';

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
                            <LabelGroup toDoItem={item} />
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default DoneList;