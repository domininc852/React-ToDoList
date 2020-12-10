import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { addLabel } from '../apis/labels'

class AddLabel extends Component {
    constructor(props) {
        super(props);
        this.state = { isModalVisible: false, text: "", color: null, repeated: false }
    }

    showModal = () => {
        this.setState({ isModalVisible: true });
    };

    handleOk = () => {
        const { text, color } = this.state;
        const label = { description: text, color: color };
        addLabel(label).then((response) => {
            this.props.addLabel(response.data);
        })
        this.setState({ isModalVisible: false, text: "" });
    };

    handleCancel = () => {
        this.setState({ isModalVisible: false, text: "" });
    };
    changeText = (event) => {
        this.setState({ text: event.target.value });
        if (this.props.labels.find(label => label.description === event.target.value)) {
            this.setState({ repeated: true })
        }
        else {
            this.setState({ repeated: false })
        }
    }
    chanegColor = (event) => {
        this.setState({ color: event.target.value });
    }
    render() {
        const { isModalVisible, text, repeated } = this.state;
        return (
            <div className="AddLabelButton">
                <Button type="primary" onClick={this.showModal}>
                    Add label
                </Button>
                <Modal
                    title="New Label"
                    visible={isModalVisible}
                    okButtonProps={{ disabled: text === "" || repeated ? true : false }}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <label>Description: </label>
                    <input type="text" placeholder="Description" value={text} onChange={this.changeText} />
                    <br />
                    <p style={{ display: repeated ? "" : "none", color: "red" }}>Repeated description</p>
                    <br />
                    <label>Color: </label>
                    <input type="color" onChange={this.chanegColor} />
                </Modal>
            </div>
        );
    }
}

export default AddLabel;