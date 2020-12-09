import React, { Component } from 'react';
import { Popconfirm, Button } from 'antd';
class DeleButton extends Component {
    confirm = ()=>{
        this.props.onClick();
    }
    render() {
        const text="Are you sure to delet the ToDo item?"
        return (
            <div style={{ marginTop: "-32px", marginLeft: "900px" }}>
                <Popconfirm placement="topLeft" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                    <Button>X</Button>
                </Popconfirm>
            </div>
        );
    }
}

export default DeleButton;