import React, {useEffect, useState} from 'react';
import style from './CoinPageData.module.scss'

export const CoinPageData = (props) => {

    let timestamp = new Date(props.lastShare * 1000);
    let setEnd = timestamp.getSeconds().toString().slice(-1)


    let checkEnd = (setEnd) => {
        switch (setEnd) {
            case '0':
                return 'д'
            case '1':
                return 'ду'
            case '2':
                return 'ды'
            case '3':
                return 'ды'
            case '4':
                return 'ды'
            case '5':
                return 'д'
            case '6':
                return 'д'
            case '7':
                return 'д'
            case '8':
                return 'д'
            case '9':
                return 'д'
            default:
                return 'д'

        }

    }


    let [show, setShow] = useState(false)


    let textCopy = () => {
        navigator.clipboard.writeText(props.miner)
        setShow(!show)
        setTimeout(()=>{
            setShow(false)
        },200)
    }


    return (
        <div className={style.grid_data}>
            <div className={style.miner_s}><div className={style.miner} >{props.miner.toString().length > 60 ? <span className={style.longMiner}>{props.miner}
            <i className="fa-solid fa-copy" onClick={textCopy}/>{show? <span className={style.copy}> Copy</span>:''}</span> :
                <span className={style.shortMiner}>{props.miner} <i className="fa-solid fa-copy" onClick={textCopy}/>{show? <span className={style.copy}> Copy</span>:''}</span>}</div></div>
            <div className={style.hashrate_s}><div className={style.hashrate}><span>{props.hashrate}</span></div></div>
            <div className={style.shares_s}><div className={style.shares}><span>{`${timestamp.getSeconds()} секун${checkEnd(setEnd)} назад`}</span></div></div>
            <div className={style.status_s}><div className={props.offline? style.status_offline : style.status_online}><span>{`${props.offline ? 'Offline':'Online'}`}</span></div></div>

        </div>

    );
};
