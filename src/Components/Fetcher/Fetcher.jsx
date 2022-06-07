import React, {useEffect} from 'react';
import style from './Fetcher.module.scss'
import loaderGif from '../../assets/loader.gif'

const Fetcher = () => {


    useEffect(() => {
        let showRandomBackStyle = () => {
            let x = Math.ceil(Math.random() * 10)
            if (x <= 3) {
                return style.coin
            }
            if (x <= 7) {
                return style.coin2
            }
            if (x <= 10) {
                return style.coin3
            }
        }

        localStorage.setItem('showRandomStyle', showRandomBackStyle())
    }, [])


    return (<div className={style.fetcher}/>
    );
};

export default Fetcher;