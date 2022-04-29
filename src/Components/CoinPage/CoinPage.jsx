import React, {useEffect, useState} from 'react';
import style from './CoinPage.module.scss'
import {coinNamesFilter, hashFilter} from "../../Filters";
import {CoinPageData} from "./CoinPageData/CoinPageData";
import Err404 from "../404/404";
import Fetcher from "../Fetcher/Fetcher";


export const CoinPage = (props) => {
    const index = props.content.coins.findIndex(el => `/${el.pool}` === window.location.pathname)
    const coin = props.content.coins[index]

    let x = {...props.content.miners}
    let c = {miners: {...x.miners}}
    let keys = Object.keys(c.miners)

    return (props.content.isFetching === true ? <Fetcher/> : (props.content.statusCode !== 404 ?
        <div className={style.coin}>
            <div className={style.coinData}>
                <div className={style.stats}>Статистика</div>
                <div className={style.graph}>График</div>
            </div>
            <div className={style.totalHashrate}>
                <span className={style.totalHashrate_span}>Общий хешрейт
                пула {index === -1 ? '' : coinNamesFilter(coin.data.pool)}: <span className={style.totalHashrate_span_span}>{index === -1 ? '' : hashFilter(coin.data.hashrate)}</span></span>
                <div className={style.coin_column_grid}>
                    <div className={style.wallet}>Кошелек: </div>
                    <div className={style.hashrate}>Хэшрейт: </div>
                    <div className={style.shares}>Последняя шара: </div>
                    <div className={style.status}>Статус: </div>
                </div>
                {props.content.miners.miners[0] === undefined ? '' : keys.map(el => {
                        let obj = {[el]: c.miners[el]}
                        let element = Object.values(obj[el])
                        let obj2 = {data: {...element[0]}}
                        return <div key={el}>
                            <CoinPageData miner={Object.keys(obj[el])}
                                          hashrate={hashFilter(obj2.data.hr)}
                                          lastShare={obj2.data.lastBeat}
                                          offline={obj2.data.offline}/>
                        </div>
                    })}
            </div>
        </div> : <Err404/>));
};
