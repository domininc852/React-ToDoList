import React, { Component } from 'react';
import { Menu } from 'antd';

class Navigation extends Component {
    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="mail">
                    <Link to="/">go to list</Link>
                </Menu.Item>
                <Menu.Item key="app" >
                    <Link to="/done">go to done list</Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default Navigation;