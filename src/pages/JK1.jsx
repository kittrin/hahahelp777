import React from 'react';
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import {Link} from "react-router-dom";
import {Button} from "antd";
import {ArrowDownOutlined} from "@ant-design/icons";
import './stylesPages/JK1.css'
const Jk1 = () => {

    return (
        <Parallax pages={2} style={{top: '46px', left: '0', background: 'url("https://sun9-19.userapi.com/impf/USxmLcvo8D7N-PSiNTbLJSJMFNNbHLzFe2WiKQ/d5JypZYjPUw.jpg?size=1920x1080&quality=95&sign=3c41c9acee33a8141e7fd4b8cd1062da&type=album")',
            backgroundSize: 'cover'}}>
            <ParallaxLayer offset={0} speed={1}
                           style={{
                               display: 'flex',
                               justifyContent: 'center',
                               alignItems: 'center',
                               color: 'white',
                           }}>
                <div className='jk1'>
                    <div className='jk1Body'>
                        <div className='photojk2'>

                        </div>
                        <div className='textjk1'>
                            <p style={{
                                fontFamily: 'Montserrat',
                                fontStyle: 'light',
                                // lineHeight: '96px',
                                letterSpacing: '0.165em',

                            }} className='titlejk'>ЖК “Grand Palace”</p>
                            <ul>
                                <li>Красная, 25</li>
                                <li>от 10 000 за м2</li>
                                <li>1-5 комнат в квартире</li>
                                <li>500 метров до школы</li>
                                <li>100 магазинов на территории</li>
                            </ul>
                            <Button type="primary" size='large'>Дома на карте <ArrowDownOutlined /></Button>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={1} style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
            }}>
                <div className='jk1'>
                    <div className='jk1Body'>
                        <div className='photocardjk2'>

                        </div>
                        <div className='textcardjk1'>
                            <p style={{
                                fontFamily: 'Montserrat',
                                fontStyle: 'light',
                                letterSpacing: '0.165em',
                            }} className='titlejk'>Свободные дома</p>
                            <table>
                                <tbody>
                                <tr>
                                    <th>Дом №1</th>
                                    <td>от ХХХ за кв. метр</td>
                                </tr>

                                <tr>
                                    <th>Дом №2</th>
                                    <td>от ХХХ за кв. метр</td>
                                </tr>

                                <tr>
                                    <th>Дом №3</th>
                                    <td>от ХХХ за кв. метр</td>
                                </tr>

                                <tr>
                                    <th>Дом №4</th>
                                    <td>от ХХХ за кв. метр</td>
                                </tr>
                                </tbody>
                            </table>
                            <Link to='/choice1'><Button type="primary" size='large'>Посмотреть все предложения</Button></Link>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>
        </Parallax>
    );
};

export default Jk1;