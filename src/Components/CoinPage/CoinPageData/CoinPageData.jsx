import React, {useState} from 'react';
import style from './CoinPageData.module.scss'
import {dateFilter} from "../../../Filters";

export const CoinPageData = (props) => {
    let [show, setShow] = useState(false)

    let textCopy = () => {
        navigator.clipboard.writeText(props.miner).catch(e => e)
        props.addInputValue(props.miner)
        setShow(!show)

            setTimeout(() => {
                setShow(false)
            }, 200)


    }

    return (
        <div className={style.grid_data}>
            <div className={style.miner_s}>
                <div className={style.miner}>{props.miner.toString().length > 60 ?
                    <span className={style.longMiner} onClick={textCopy}><span className={style.minerSpan}>{props.miner}</span>
                        {show ? <span className={style.copy}> Copy</span> : ''}
                    </span> :
                    <span className={style.shortMiner} onClick={textCopy}><span className={style.minerSpan}>{props.miner}</span>{show ?
                        <span className={style.copy}> Copy</span> : ''}
                    </span>}
                </div>
            </div>
            <div className={style.hashrate_s}>
                <div className={style.hashrate}><span>{props.hashrate.hashrate}{props.hashrate.unit}</span></div>
            </div>
            <div className={style.shares_s}>
                <div className={style.shares}><span>{`${dateFilter(props.lastShare)}`}</span>
                </div>
            </div>
            <div className={style.status_s}>
                <div className={props.offline ? style.status_offline : style.status_online}>
                    <span>{`${props.offline ? 'Offline' : 'Online'}`}</span></div>
            </div>

        </div>

    );
};
