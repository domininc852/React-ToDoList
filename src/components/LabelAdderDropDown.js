import React, { Component } from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid'
import { updateTodo } from '../apis/todos'

class LabelAdderDropDown extends Component {
    assignLabel = (event) => {
        const toDoItem = this.props.toDoItem;
        const labels = this.props.labels;
        if (!toDoItem.labels.map(label => label.id).includes(event.target.id)) {
            const label = labels.find(label => label.id === event.target.id);
            const newLabels = [ ...toDoItem.labels, label ];
            const newToDoItem = {...toDoItem, labels:newLabels};
            updateTodo(newToDoItem).then((response)=>{
                this.props.assignLabel(response.data)
            })
        }
        else{
            console.log("hello");
        }
    }
    render() {
        const labels = this.props.labels;
        const menu = (
            <Menu>
                {labels.map(label => <Menu.Item key={uuidv4()}>
                    <span style={{background: label.color}}id={label.id} onClick={this.assignLabel}>{label.description}</span>
                </Menu.Item>)}
            </Menu>
        );

        return (
            <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Assign Label <DownOutlined />
                </a>
            </Dropdown>
        );
    }
}

export default LabelAdderDropDown;