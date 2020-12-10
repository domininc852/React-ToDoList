import React, { Component } from 'react';
import { Button, Modal } from 'antd';
import { deleteLabel, updateLabel } from '../apis/labels';
class LabelItem extends Component {
    constructor(props) {
        super(props);
        this.state = { isModalVisible: false, text: "", color: null, repeated: false }
    }
    deleteLabel = (event) => {
        event.stopPropagation();
        const id = this.props.label.id;
        deleteLabel(id).then(() => {
            this.props.deleteLabel(id)
        })
    }
    showModal = () => {
        this.setState({ isModalVisible: true });
    };

    handleOk = () => {
        const { text, color } = this.state;
        const label = { ...this.props.label, description: text, color: color };
        updateLabel(label).then((response) => {
            this.props.updateLabel(response.data);
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
        const { description, color } = this.props.label;
        const { isModalVisible, text, repeated } = this.state;
        return (
            <div className="LabelItem" style={{ background: color }}>
                <span className="LabelDescription" onClick={this.showModal}>{description}</span>
                <div className="LabelDeleteButton">
                    <Button onClick={this.deleteLabel}>X</Button>
                </div>
                <Modal
                    title="Modify Label"
                    visible={isModalVisible}
                    okButtonProps={{ disabled: repeated||text==="" ? true : false }}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <label>Description: </label>
                    <input type="text" placeholder={description} value={text} onChange={this.changeText} />
                    <br />
                    <p style={{ display: repeated ? "" : "none", color: "red" }}>Repeated description</p>
                    <br />
                    <label>Color: </label>
                    <input type="color" value={color} onChange={this.chanegColor} />
                </Modal>
            </div>
        );
    }
}

export default LabelItem;