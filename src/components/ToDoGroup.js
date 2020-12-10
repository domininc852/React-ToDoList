import React, { Component } from 'react';
import ToDoItemContainer from '../containers/ToDoItemContainer'
import { getAllTodoList } from '../apis/todos'
import {getAllLabels} from '../apis/labels'
import { List, Divider } from 'antd';

class ToDoGroup extends Component {

    componentDidMount() {
        getAllTodoList().then((response) => {
            this.props.initTodo(response.data);
        });
        getAllLabels().then((response) => {
            this.props.initLabel(response.data);
        })
        
    }

    render() {
        const data = this.props.toDoList;
        return (

            <div>
                <Divider orientation="middle">Todo List</Divider>
                <List
                    bordered
                    dataSource={data}
                    renderItem={toDoItem => (
                        <List.Item>
                            <ToDoItemContainer toDoItem={toDoItem} key={toDoItem.id} />
                        </List.Item>)}
                />
            </div>

        );
    }
}

export default ToDoGroup;