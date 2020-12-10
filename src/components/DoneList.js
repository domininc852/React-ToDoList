import React, { Component } from 'react';
import { List, Divider } from 'antd';
import LabelGroupContainer from '../containers/LabelGroupContainer';
import { getAllTodoList } from '../apis/todos'

class DoneList extends Component {
    componentDidMount() {
        getAllTodoList().then((response) => {
            this.props.initTodo(response.data);
        });   
    }
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