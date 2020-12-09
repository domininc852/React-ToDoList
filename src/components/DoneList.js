import React, { Component } from 'react';
import { List, Typography, Divider } from 'antd';

class DoneList extends Component {

    render() {
        const data = this.props.doneList.map(doneItem => doneItem.text);
        return (
            <div className="DoneList">
                <Divider orientation="left">Done List</Divider>
                <List
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default DoneList;