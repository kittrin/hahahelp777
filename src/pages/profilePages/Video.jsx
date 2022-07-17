import React from 'react';
import cl from '../stylesPages/Video.module.css'
const Video = () => {
    return (
        <div className={cl.main}>
            <p className={cl.titleMain}>Камеры видеонаблюдения</p>
            <div className={cl.cameras}>
                <div className={cl.camera}>Камера №1</div>
                <div className={cl.camera}>Камера №2</div>
                <div className={cl.camera}>Камера №3</div>
                <div className={cl.camera}>Камера №4</div>
                <div className={cl.camera}>Камера №5</div>
                <div className={cl.camera}>Камера №6</div>
            </div>
        </div>
    );
};

export default Video;