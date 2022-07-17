import React, {useState} from 'react';
import cl from "./stylesPages/FirstHata.module.css";
import {Select} from "antd";
import {Option} from "antd/es/mentions";
import HouseProfile from "../components/HouseProfile/HouseProfile";
import imgRoom from "./json/ImageRoom.json";


const ArendaHata = () => {
    const [posts, setPosts] = useState([])
    fetch('http://10.254.199.132:8080/get_sales_apprtment_pervichka')
        .then(response => response.json())
        .then(data => setPosts(data));

    return (
        <div className={cl.main}>
            <div className={cl.title}>
                <p style={{
                    fontFamily: 'Montserrat',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: '96px',
                }} className={cl.title1}>Аренда</p>
                <p className={cl.title2} style={{color: '#FFFFFF'}}>ЖК "Grand Palace"</p>
            </div>
            <div className={cl.search}>

                <Select defaultValue={'Номер дома: '} style={{width: '250px'}}>
                    <Option key={'0'}>Номер дома: </Option>
                    <Option key={'1'}>{1}</Option>
                </Select>

                <Select defaultValue={'Кол-во комнат: '} style={{width: '250px'}}>
                    <Option key={'0'}>Кол-во комнат: </Option>
                    <Option key={'1'}>1</Option>
                    <Option key={'2'}>2</Option>
                    <Option key={'3'}>3</Option>
                </Select>

                <Select defaultValue={'Кол-во комнат: '} style={{width: '250px'}}>
                    <Option key={'0'}>Кол-во комнат: </Option>
                    <Option key={'1'}>1</Option>
                    <Option key={'2'}>2</Option>
                    <Option key={'3'}>3</Option>
                </Select>

                <Select defaultValue={'Цена: '} style={{width: '250px'}}>
                    <Option key={'0'}>Цена: </Option>
                    <Option key={'1'}>По возрастанию</Option>
                    <Option key={'2'}>По убыванию</Option>
                </Select>
                <Select defaultValue={'Этаж: '} style={{width: '250px'}}>
                    <Option key={'0'}>Этаж: </Option>
                    <Option key={'1'}>1</Option>
                    <Option key={'2'}>2</Option>
                    <Option key={'3'}>3</Option>
                    <Option key={'4'}>4</Option>
                </Select>
            </div>
            <div className={cl.body}>
                {posts.map((el, idx) =>
                    <HouseProfile numOfRooms={el.num_of_rooms} url={imgRoom[idx%9]} txt={`${el.square} м²`}/>
                )}
            </div>
        </div>
    );
};

export default ArendaHata;