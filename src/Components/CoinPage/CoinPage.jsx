import React, {useEffect} from 'react';
import style from './CoinPage.module.scss'
import {CoinPageData} from "./CoinPageData/CoinPageData";
import Fetcher from "../Fetcher/Fetcher";
import {hashFilter} from "../../Filters";
import Charts from "../Charts/Charts";


export const CoinPage = (props) => {

    let thisPool = localStorage.getItem('selectedCoin')

    useEffect(() => {
        props.showFullStatsOnce()
        props.ShowMinersOnce(thisPool)

        let start = setInterval(() => {
            props.showFullStats()
            props.showMiners(thisPool)
            props.fetching(false)
        }, 1000)

        return () => {
            clearInterval(start)
            props.dellMinersData()

        }
    }, [])

    let lastBlockFound = `${new Date(props.coinPage.fullStats.lastBlockFound * 1000).getMinutes()} мин. назад`


    return (props.coinPage.isFetching ? <Fetcher/> : <div className={style.coin}>
        <div className={style.coinData}>
            <div className={style.graph}>{props.coinPage.isFetching ? <Fetcher/> :
                <Charts charts={props.coinPage.fullStats.charts} text={`Общая мощность ${thisPool} пула`}/>}</div>
            <div className={style.stats}>
                <div className={style.stats__grid}>
                    <div className={style.currentEffort}>Усилие: {props.coinPage.fullStats.currentEffort}</div>
                    <div className={style.fee}>Комиссия пула: {props.coinPage.fullStats.fee} %</div>
                    <div className={style.hashrate}>Хэшрейт: {hashFilter(props.coinPage.fullStats.hashrate)}</div>
                    <div className={style.height}>Решаем блок: {props.coinPage.fullStats.height}</div>
                    <div className={style.lastBlockFound}>Последний блок: {lastBlockFound}</div>
                    <div className={style.minPayment}>Минимальный вывод: {props.coinPage.fullStats.minPayment}</div>
                    <div className={style.miners}>Майнеры: {props.coinPage.fullStats.miners}</div>
                    <div className={style.type}>Тип пула: {props.coinPage.fullStats.type}</div>
                    <div
                        className={style.charts}>График: {props.coinPage.fullStats.charts !== 'n/a' ? 'online' : 'offline'}</div>
                </div>
            </div>

        </div>
        <div className={style.totalHashrate}>
            <div className={style.coin_column_grid}>
                <div className={style.wallet}>Кошелек:</div>
                <div className={style.hashrate}>Хэшрейт:</div>
                <div className={style.shares}>Последняя шара:</div>
                <div className={style.status}>Статус:</div>
            </div>
            {props.coinPage.miners.map(el => {
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
