import React from 'react';
import cl from './stylesPages/Profile.module.css'
import {Col, Row} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {Line} from "@ant-design/charts";
import {Link} from "react-router-dom";

const Profile = () => {
    const data = [
        {
            day: '1',
            value: 3,
        },
        {
            day: '4',
            value: 4,
        },
        {
            day: '7',
            value: 3.5,
        },
        {
            day: '10',
            value: 5,
        },
        {
            day: '13',
            value: 4.9,
        },
        {
            day: '17',
            value: 6,
        },
        {
            day: '20',
            value: 7,
        },
        {
            day: '23',
            value: 9,
        },
        {
            day: '26',
            value: 13,
        },
        {
            day: '29',
            value: 13,
        }
    ];
    const config = {
        data,
        xField: 'day',
        yField: 'value',
        label: {},
        point: {
            size: 5,
            shape: 'custom-point',
            style: {
                fill: 'white',
                stroke: '#5B8FF9',
                lineWidth: 2,
            },
        },
        tooltip: {
            showMarkers: false,
        },
        state: {
            active: {
                style: {
                    shadowBlur: 4,
                    stroke: '#000',
                    fill: 'red',
                },
            },
        },
        interactions: [
            {
                type: 'custom-marker-interaction',
            },
        ],
    };
    return (
        <div className={cl.main}>

            <div className={cl.logoProfile}>
                <div className={cl.logo}><UserOutlined/></div>
                <div className={cl.nameProfile}>User Name</div>
            </div>

            <Row>
                <Col md={6} xs={10} offset={2} className={cl.sos}>
                    <p className={cl.sos1}>SOS</p>
                    <p className={cl.sos2}>Вызов экстренных служб</p>
                </Col>
                <Col md={8} xs={10} style={{height: '173px'}} className={cl.service}>
                    <Link to='/service'><p style={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '24px'
                    }}>Сервисы</p>
                        <p>Оплата ЖКХ, услуги специалистов, доставка, и прочее</p></Link>
                </Col>
                <Col md={{span: 6, offset: 0}} xs={{span: 20, offset: 2}} style={{height: '173px'}}
                     className={cl.communicate}>
                    <p style={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '20px'
                    }}>Коммуникация с жильцами и УК</p>
                    <p style={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '14px'
                    }}>Чат с жильцами, объявления управляющей компании,
                        “Сообщить об инциденте”</p>
                </Col>
            </Row>

            <Row>
                <Col md={6} xs={20} offset={2} className={cl.xuy}>
                    <div className={cl.domofon}>
                        <Link to='/domofon'>
                            <p style={{
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                fontSize: '20px',
                                color: '#FFFFFF'
                            }}>Домофон</p></Link></div>
                    <div className={cl.video}>
                        <Link to='/video'>
                            <p style={{
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                color: '#FFFFFF'
                            }}>Камеры видеонаблюдения</p></Link>
                    </div>
                </Col>
                <Col md={{span: 14, offset: 0}} xs={{span: 20, offset: 2}} className={cl.statistic}>
                    <Line {...config} />;
                </Col>
            </Row>


        </div>
    );
};

export default Profile;