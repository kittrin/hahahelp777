import React from 'react';
import cl from "./stylesPages/Domofon.module.css";

const DomofonProfile = ({url}) => {
    return (
            <div className={cl.bodyBlock}>
                <div className={cl.photoBlock}
                     style={{background: `url("${url}")`}}></div>

                <p style={{width: '100%', height: '20%', borderRadius: '11px', padding: 5}}>Предоставлен доступ
                    для входа в дом</p>
            </div>

    );
};

export default DomofonProfile;