import React, { Component } from 'react';
import { getAllLabels } from '../apis/labels';
import AddLabelButtonContainer from '../containers/AddLabelButtonContainer'
import { List, Divider } from 'antd';
import LabelItemContainer from '../containers/LabelItemContainer';
class LabelManagement extends Component {
    componentDidMount() {
        getAllLabels().then((response) => {
            this.props.initLabel(response.data);
        })
    }
    render() {
        const data = this.props.labels;
        return (
            <div>
                <AddLabelButtonContainer labels={this.props.labels} />
                <Divider orientation="middle">Label</Divider>
                <List
                    bordered
                    dataSource={data}
                    renderItem={label => (
                        <List.Item>
                            <LabelItemContainer labels={data} label={label} key={label.id} />
                        </List.Item>)}
                />
            </div>
        );
    }
}

export default LabelManagement;