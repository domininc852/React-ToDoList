import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { updateTodo } from '../apis/todos'
class AddLabel extends Component {
    constructor(props) {
        super(props);
        this.state = { isModalVisible: false, text: "", color: null }
    }

    showModal = () => {
        this.setState({ isModalVisible: true });
    };

    handleOk = () => {
        const { text, color } = this.state;
        if (text === "") {
            return;
        }
        const labels = this.props.item.labels;
        const toDoItem = { ...this.props.item, labels: [...labels, { description: text, color: color }] };
        updateTodo(toDoItem).then((response) => {
            this.props.addLabel(response.data)
        })
        this.setState({ isModalVisible: false, text: "" });
    };

    handleCancel = () => {
        this.setState({ isModalVisible: false, text: "" });
    };
    changeText = (event) => {
        this.setState({ text: event.target.value });
    }
    chanegColor = (event) => {
        this.setState({ color: event.target.value });
    }
    render() {
        return (
            <div style={{ marginTop: "10px" }}>
                <Button type="primary" onClick={this.showModal}>
                    Add label
            </Button>
                <Modal
                    title="New Label"
                    visible={this.state.isModalVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <label>Description: </label>
                    <input type="text" placeholder="Description" value={this.state.text} onChange={this.changeText} />
                    <br />
                    <br />
                    <label>Color: </label>
                    <input type="color" onChange={this.chanegColor} />
                </Modal>
            </div>
        );
    }
}

export default AddLabel;