import React, {useEffect, useState} from 'react';
import style from './CoinPage.module.scss'
import {CoinPageData} from "./CoinPageData/CoinPageData";
import Fetcher from "../Fetcher/Fetcher";
import {hashFilter, imgFilter} from "../../Filters";
import Charts from "../Charts/Charts";
import {Link} from "react-router-dom";


export const CoinPage = (props) => {

    let thisPool = localStorage.getItem('selectedCoin')
    let coinLogo = imgFilter(localStorage.getItem('selectedCoin'))
    let luck = props.coinPage.fullStats.currentEffort * 100;
    let lastBlockFound = `${new Date(props.coinPage.fullStats.lastBlockFound * 1000).getMinutes()} мин. назад`;


    let [checked, setChecked] = useState(false);

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

        localStorage.setItem('showRandomBackStyle', showRandomBackStyle())


        props.showFullStatsOnce()
        props.ShowMinersOnce(thisPool)

        let start = setInterval(() => {
            props.showFullStats()
            props.showMiners(thisPool)
            props.fetching(false)
        }, 1000)

        return () => {
            props.addAccountAddress(null)
            clearInterval(start)
            props.dellMinersData()

        }
    }, [])

    let showMiners = () => {
        setChecked(!checked)
    }


    let setAddr = (e) => {
        if (e.target.value !== '') {
            props.addAccountAddress(e.target.value)
        }
    }

    let addrFilter = (coinName) => {
        let x = props.account.accountAddress
        if (x === null){
            return `/${coinName}`
        } else {
            return `/${coinName}/account/${x}`
        }
    }





    return (props.coinPage.isFetching ? <Fetcher/> : <div className={localStorage.getItem('showRandomBackStyle')}>
        <div className={style.coinData}>
            <div className={style.graph}>
                <Charts charts={props.coinPage.fullStats.charts} text={`Общая мощность ${thisPool} пула`}/>
            </div>
            <div className={style.inputForm}>
                <img src={coinLogo} alt='logo'/>
                <input type='text' autoComplete='off' placeholder={`Введите адрес кошелька фермы`} onChange={setAddr}/>
                <Link to={addrFilter(thisPool)}>
                    <div className={style.inputBtn}><i className="fa-solid fa-magnifying-glass"></i></div>
                </Link>
            </div>

            <div className={style.stats}>
                <div className={style.stats__grid}>
                    <div
                        className={style.currentEffort}>Удача: {isNaN(luck) ? 'not found' : `${luck.toFixed(0)} %`}</div>
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
            <div className={style.showMinersBtn} onClick={showMiners}>{!checked?'Показать список майнеров':'Убрать список майнеров'}</div>
            {checked ? <div className={style.totalHashrate} id='anchorBtn'>
                <div className={style.coin_column_grid}>
                    <div className={style.wallet}>Кошелек:</div>
                    <div className={style.hashrate}>Хэшрейт:</div>
                    <div className={style.shares}>Последняя шара:</div>
                    <div className={style.status}>Статус:</div>
                </div>
                <div className={style.minersWrapper}>
                    {props.coinPage.miners.map(el => {
                        return <div key={el.address}>
                            <CoinPageData miner={el.address}
                                          hashrate={hashFilter(el.hr)}
                                          lastShare={el.lastBeat}
                                          offline={el.offline}/>
                        </div>
                    })}
                </div>

            </div> : ''}
        </div>

    </div>);
};
