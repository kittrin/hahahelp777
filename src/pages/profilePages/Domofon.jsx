import React from 'react';
import cl from '../stylesPages/Domofon.module.css'
import UploadPhoto from "./UploadPhoto";
import {Button, Drawer, Input} from "antd";
import {useState} from "react";
import DomofonProfile from "../DomofonProfile";


const Domofon = () => {
    const [posts, setPosts] = useState([])
    const fetchPosts = async () => {
        try {
            fetch('http://10.254.199.132:8080/get_users')
                .then(response => response.json())
                .then(data => setPosts(data));
        } catch (e) {
            console.log(e)
        } finally {
            console.log('finally')
        }
        return
    }
    fetchPosts()
    const [name, setName] = useState({name: ''})
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    const [url, setUrl] = useState('')
    const qrPop = () => {
        fetch('http://10.254.199.132:8080/gen_qr')
            .then(response => response.json())
            .then(data => setUrl(data.qr));
        console.log(url)
        showDrawer()
    }

    const [fio, setFio] = useState('')
    fetch('http://10.254.200.175:8089/ac')
        .then(response => response.json())
        .then(data => setFio(data));

    return (
        <div className={cl.main}>
            <p className={cl.titleMain}>Домофон</p>

            <div className={cl.domofonBody}>
                <div className={cl.row1}>
                    <div className={cl.domofonVideo}>
                        <img src='http://10.254.199.147:8080/video' style={{width: '100%'}}/>
                        <p>{fio}</p>
                    </div>

                    <div className={cl.newMan}>
                        <div className={cl.upload}>
                            <UploadPhoto name={name}/>
                            <Input value={name.name} placeholder="Имя: "
                                   onChange={(e) => setName({...name, name: e.target.value})}/>
                        </div>
                        <div className={cl.enterD}>
                            <Button type="primary" size={"small"} style={{
                                width: '70%', height: '30%', paddingLeft: 5, paddingRight: 5, fontSize: '8px'
                            }}>Разрешить доступ</Button>
                            <p>или</p>
                            <Button type="primary" size={'small'} style={{
                                width: '70%', height: '30%', paddingLeft: 5, paddingRight: 5, fontSize: '8px'
                            }} onClick={qrPop}>Сгенерировать QR</Button>
                        </div>
                    </div>
                </div>
                <div className={cl.blocks}>
                    <DomofonProfile
                        url={'https://yandex-images.clstorage.net/5g4xV1H19/71dbc67aW/uF6KAhfINtDCUTMC8q-kllhkSq4QLKoUt9jk3OuLGl3_1qFcvNQVVvFqWPnvehyn2yYTzhS5aTNMHinbcT7bivwSyipq_Xado1BTRrtqxJYcOCanYWCrJZf46cyW1woc27v5aRWlFRfAKz2MX14Uu6eau0JtZYWG4LK8IowLkv74CqZTYqDOdcah71bf18iWKejOCgxkuulneOydsy9qNP96sUAonPFTcPdNuG5HSc6PttcGpQ29dhjSNO5g64aKCEoT42JcHgT-Qf9G11_4Gi10ZooQ4J6pL8ykAQe7OpRX6q2EJPx5ayhjRYieH5VaR4IvVr1B_frsIkSCBFta3mAST0ee6KIcVi3TxqNXWFIlaLq-pCCurddMtG1bK27o27pxjOAQ5WdE711cilOdMteC23ZVwTV6mPKQDqj7Us64tm-vZkwmYO41gx7fK9QyBdAaFizgMllvgHjtAycSWIcSIXBw7JkfFH_VVI4HPdbz7o92pfEZtoT2RBq82zIagNrne5pwkqQame8C1y9Qyn0Y-gr4cN5hsyQoRVsrBkwT2pGE-NQ1G2xngTyy0wXyyzKPmjnZxf4EHnzW4F-mrjAa_39C4ObQrqWPentXBMIB5KY-NPyOuTtooCljowrEkxoNyABAOZ90A91UGl9NKqOyg665cdXqSH5A1nQ_AhbYPv_3fnC2IN7ZXyqfD5hOUWyeBhzUMuUjtNih-1MClKOW-axYfI0TjCttCHbTNb7DXkPaTXG1KqxSmN48I6IGZPbDY45ICkiOLQfON_cojtFAksKQJJrFG4REUYeTstBj6nUoiGjh--y3pQwSA9U6L_JD1o3lWR6cioRSkOcy3ghaL--WeD7oej1vgt8LVJIZ1CqiIFwWoRtQOEEPKxaIQ55lRATgyT_shzmsujfxPncqw2bhqfG-dD5wyoBrGvZIGvt7QhC6oOIJh2ILd7gqsWAeIhgYEp2zPNSlHwNk'}/>
                    {posts.map((el) => <DomofonProfile
                        url={'https://i.pinimg.com/originals/32/f0/f8/32f0f8d8d70dcc1defcb3a337bab1604.jpg'}/>)}
                </div>
            </div>
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
                <img src={`data:image/png;base64,${url}`} style={{width: '100%'}}/>
            </Drawer>
        </div>
    );
};

export default Domofon;