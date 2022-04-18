import React from 'react';
import style from './Fetcher.module.scss'
import loaderGif from '../../img/loader.gif'

const Fetcher = () => {
    return (
        <div className={style.fetcher}>
            <img src={loaderGif} alt='loader'/>
        </div>
    );
};

export default Fetcher;