import React, { Component } from 'react';
import { Modal, Button } from 'antd';

class AddLabel extends Component {
    constructor(props) {
        super(props);
        this.state = { isModalVisible: false, text: "", color: null }
    }

    showModal = () => {
        this.setState({ isModalVisible: true });
    };

    handleOk = () => {
        const labels = this.props.item.labels;
        const toDoItem={...this.props.item, labels:[...labels,{description:this.state.text, color: this.state.color}]};
        this.props.addLabel(toDoItem)
        this.setState({ isModalVisible: false });
    };

    handleCancel = () => {
        this.setState({ isModalVisible: false });
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