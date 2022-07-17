import React from 'react';
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import './stylesPages/StylePages.css'
import {Button} from "antd";
import {Link} from "react-router-dom";
import {ArrowDownOutlined} from "@ant-design/icons";

const Main = () => {
    return (
        <Parallax pages={3} style={{top: '46px', left: '0', background: 'url("https://sun9-19.userapi.com/impf/USxmLcvo8D7N-PSiNTbLJSJMFNNbHLzFe2WiKQ/d5JypZYjPUw.jpg?size=1920x1080&quality=95&sign=3c41c9acee33a8141e7fd4b8cd1062da&type=album")',
            backgroundSize: 'cover'}}>
            <ParallaxLayer offset={0} speed={2} style={{clipPath: 'polygon(0% 0%, 0% 100%, 0% 100%, 100% 0%)',
                backgroundColor:'#0E204B'}}/>
            <ParallaxLayer
                offset={0}
                speed={0.5}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <p style={{
                    fontFamily: 'Montserrat',
                    fontStyle: 'light',
                    marginLeft: '20px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: '96px',

                }} className='titleMain'>AV group</p>
                <p className='bodyMain'>Надежно. Недорого. Превосходно</p>
            </ParallaxLayer>
            <ParallaxLayer
                offset={1}
                speed={0.5}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                }}>
                <div className='jk1'>
                    <div className='jk1Body'>
                        <div className='photojk1'>

                        </div>
                        <div className='textjk1'>
                            <p style={{
                                fontFamily: 'Montserrat',
                                fontStyle: 'light',

                                lineHeight: '96px',
                                letterSpacing: '0.165em',

                            }} className='titlejk'>ЖК “Grand Palace”</p>
                            <ul>
                                <li>Красная, 25</li>
                                <li>от 10 000 за м2</li>
                                <li>1-5 комнат в квартире</li>
                                <li>500 метров до школы</li>
                                <li>100 магазинов на территории</li>
                            </ul>
                            <Link to='/jk1'><Button type="primary" size='large'>Посмотреть дома</Button></Link>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={0.5}
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
                                lineHeight: '96px',
                                letterSpacing: '0.165em',

                            }} className='titlejk'>ЖК “Fresh”</p>
                            <ul>
                                <li>Красная, 25</li>
                                <li>от 10 000 за м2</li>
                                <li>1-5 комнат в квартире</li>
                                <li>500 метров до школы</li>
                                <li>100 магазинов на территории</li>
                            </ul>
                            <Link to='/jk2'><Button type="primary" size='large'>Посмотреть дома</Button></Link>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>
        </Parallax>
    );
};

export default Main;