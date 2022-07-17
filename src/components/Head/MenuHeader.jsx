import React from 'react';
import {Button, Menu} from "antd";
import {MenuFoldOutlined, UserOutlined} from "@ant-design/icons";
import cl from './MenuHeader.module.css'
import './MenuHeader.module.css'
import {Link} from "react-router-dom";
import '../../Image/AVA.png'
const MenuHeader = () => {
    return (
        <Menu
            mode='horizontal'
            theme='dark'
            overflowedIndicator={<MenuFoldOutlined/>}
            className={cl.menu}
            style={{
                fontSize: '20px',
                fontFamily: 'Roboto',
                fontWeight: 300,
                height: 46
            }}
        >
            <Menu.Item><Link to='/main'><img
                style={{
                    height: '90%',
                    width: 'auto',

                }}
                src='https://altacons.ru/wp-content/uploads/2020/01/AVA.png'
            /></Link></Menu.Item>
            <Menu.Item>Карта</Menu.Item>
            <Menu.Item><Link to='/jk1'>Grand Palace</Link></Menu.Item>
            <Menu.Item><Link to='/jk2'>Fresh</Link></Menu.Item>
            <Menu.Item>AVrorA</Menu.Item>
            <Menu.Item>URAL</Menu.Item>
            <Menu.Item><Link to='/profile'> <Button shape="round" icon={<UserOutlined />} /></Link></Menu.Item>
        </Menu>
    );
};

export default MenuHeader;