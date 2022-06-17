import React from 'react';
import style from './CoinImage.module.scss'
import Fetcher from "../Fetcher/Fetcher";

const CoinImage = ({path}) => {
    return (
        <div className={style.wrapper}>
            {path? <img src={path} alt='logo' className={style.logo}/> : <Fetcher/>}
        </div>
    );
};

export default CoinImage;