import React from 'react';
import cl from '../stylesPages/Service.module.css'
import {Select} from "antd";
import {Option} from "antd/es/mentions";
import HouseProfile from "../../components/HouseProfile/HouseProfile";
import img from '../json/imageUrist.json'
const Service = () => {
    return (
        <div className={cl.main}>
            <div className={cl.title}>
                <p style={{
                    fontFamily: 'Montserrat',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: '96px',
                }} className={cl.title1}>Услуги специалистов</p>
                <p className={cl.title2} style={{color: '#FFFFFF'}}>Юристы</p>
            </div>
            <div className={cl.search}>

                <Select defaultValue={'Стоимость: '} style={{width: '250px'}}>
                    <Option key={'0'}>Стоимость: </Option>
                    <Option key={'1'}>По возрастанию</Option>
                    <Option key={'2'}>По убыванию</Option>
                </Select>

                <Select defaultValue={'С отзывами '} style={{width: '250px'}}>
                    <Option key={'0'}>С отзывами </Option>
                    <Option key={'1'}>Да</Option>
                    <Option key={'2'}>Нет</Option>

                </Select>

                <Select defaultValue={'Сортировать по: '} style={{width: '250px'}}>
                    <Option key={'0'}>Сортировать по: </Option>
                    <Option key={'1'}>По рейтингу</Option>
                    <Option key={'2'}>По стоимости</Option>
                </Select>

            </div>
            <div className={cl.body}>
                {img.map(el=><HouseProfile url={el}/>)}

            </div>
        </div>
    );
};

export default Service;