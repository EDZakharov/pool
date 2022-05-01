import React, {useEffect, useState} from 'react';
import style from './CoinPage.module.scss'

import {CoinPageData} from "./CoinPageData/CoinPageData";

import Fetcher from "../Fetcher/Fetcher";
import {hashFilter} from "../../Filters";


export const CoinPage = (props) => {
    let thisPool = localStorage.getItem('selectedCoin')

    useEffect(()=>{
        if(props.coinPage.isFetching){
            setTimeout(()=>{props.fetching(false)},1000)
        }
        let start = setInterval(()=>{
            props.showMiners(thisPool)
        },100)
        return () => {
            clearInterval(start)
            props.dellMinersData()
        }
    },[])


    // const index = props.content.coins.findIndex(el => `/${el.pool}` === window.location.pathname)
    // const coin = props.content.coins[index]

    return (<div className={style.coin}>
            <div className={style.coinData}>
                <div className={style.stats}>Статистика</div>
                <div className={style.graph}>График</div>
            </div>
            <div className={style.totalHashrate}>
                {/*<span className={style.totalHashrate_span}>Общий хешрейт*/}
                {/*пула {index === -1 ? '' : coinNamesFilter(coin.data.pool)}: <span className={style.totalHashrate_span_span}>{index === -1 ? '' : hashFilter(coin.data.hashrate)}</span></span>*/}
                <div className={style.coin_column_grid}>
                    <div className={style.wallet}>Кошелек:</div>
                    <div className={style.hashrate}>Хэшрейт:</div>
                    <div className={style.shares}>Последняя шара:</div>
                    <div className={style.status}>Статус:</div>
                </div>
                {props.coinPage.isFetching? <Fetcher/> : props.coinPage.miners.map(el => {
                    return <div key={el.address}>
                        <CoinPageData miner={el.address}
                                      hashrate={hashFilter(el.hr)}
                                      lastShare={el.lastBeat}
                                      offline={el.offline}/>
                    </div>
                })}
            </div>
        </div>);
};
