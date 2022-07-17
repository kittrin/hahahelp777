import React from 'react';
import cl from "../../pages/stylesPages/FirstHata.module.css";
import {RightOutlined} from "@ant-design/icons";
import img from '../../Image/Vector 1.png'
const HouseProfile = ({numOfRooms, url, txt}) => {
    return (
        <div className={cl.house} style={{
            background: `url('${url}')`
        }}>
            <div className={cl.photoHouse}>
                    {txt}
            </div>
            <div className={cl.textHouse}>
                <p style={{color: '#605F5E'}}>{numOfRooms}</p>
                <p style={{color: '#000000', cursor: 'pointer'}}>Посмотреть <RightOutlined style={{color: '#FB3640'}} /></p>
            </div>
        </div>
    );
};

export default HouseProfile;