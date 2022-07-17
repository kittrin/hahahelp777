import React from 'react';
import cl from './stylesPages/Choice.module.css'
import {RightOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const Choice1 = () => {
    return (
        <div className={cl.main}>
            <div className={cl.block}>
                <div className={cl.blockPhoto1}></div>
                <Link to='/first1'><div className={cl.textBlock}>
                    <div>Первичка</div>
                    <RightOutlined style={{color: '#FB3640'}}/>
                </div></Link>
            </div>
            <div className={cl.block1}>
                <div className={cl.blockPhoto2}></div>
                <Link to='/twohata'><div className={cl.textBlock}>
                    <div>Вторичка</div>
                    <RightOutlined style={{color: '#FB3640'}}/>
                </div></Link>
            </div>
            <div className={cl.block2}>
                <div className={cl.blockPhoto3}></div>
                <Link to='/arenda'><div className={cl.textBlock}>
                    <div>Аренда</div>
                    <RightOutlined style={{color: '#FB3640'}}/>
                </div></Link>
            </div>
        </div>
    );
};

export default Choice1;