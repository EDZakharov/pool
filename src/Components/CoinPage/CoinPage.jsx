import React, {useEffect, useRef, useState} from 'react';
import style from './CoinPage.module.scss'
import {CoinPageData} from "./CoinPageData/CoinPageData";
import Fetcher from "../Fetcher/Fetcher";
import {dateFilter, hashFilter, imgFilter} from "../../Filters";
import Charts from "../Charts/Charts";
import {Link} from "react-router-dom";
import PaginatedItems from "../Pagination";
import DropBtn from "../Account/DropBtn";


export const CoinPage = (props) => {

    let thisPool = localStorage.getItem('selectedCoin')
    let coinLogo = imgFilter(localStorage.getItem('selectedCoin'))
    let luck = props.coinPage.fullStats.currentEffort * 100;
    // let date = new Date(props.coinPage.fullStats.lastBlockFound * 1000);
    // let lastBlockFound = `at ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}, ${('0' + date.getDate()).slice(-2)}.${('0' + (date.getMonth() + 1)).slice(-2)}.${date.getFullYear()}`
    // let h = Math.floor(new Date().getTime()/1000)
    // console.log(props.coinPage.fullStats.lastBlockFound * 1000)
    // console.log(props.coinPage.fullStats.lastBlockFound)


    dateFilter(props.coinPage.fullStats.lastBlockFound)

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
        }, 1500)

        return () => {
            clearInterval(start)
            props.dellFullStats()
            props.dellMinersData()
            navigator.clipboard.writeText('').catch(e => e)
            props.addAccountAddress('')
        }
    }, [])

    let showMiners = () => {
        setChecked(!checked)
    }

    let setAddr = (e) => {
        props.addAccountAddress(e.target.value)
    }

    let addrFilter = (coinName) => {
        if (props.coinPage.accountAddress === null) {
            return `/${coinName}`
        }
        return `/${coinName}/account/${props.coinPage.accountAddress}`
    }


    return (props.coinPage.isFetching ? <Fetcher/> : <div className={localStorage.getItem('showRandomBackStyle')}>
        <div className={style.coinData}>
            {props.coinPage.fullStats.charts && props.coinPage.fullStats.charts.length !== 0 ?
                <div className={style.graph}>
                    <div className={style.chartsGraph}>
                        <Charts charts={props.coinPage.fullStats.charts} text={`Общая мощность ${thisPool} пула`}/>
                    </div>
                </div> : <div className={style.graph}><span>Загрузка..</span></div>}
            {thisPool === 'evox-prop' || thisPool === 'evox-solo' || thisPool === 'keva' ?
                <div className={style.inputForm}/> : <div className={style.inputForm}>
                    <img src={coinLogo} alt='logo'/>
                    <input type='text' autoComplete='off' placeholder={`Введите адрес кошелька фермы`}
                           onChange={setAddr} value={props.coinPage.accountAddress !== null ? props.coinPage.accountAddress : ''}/>
                    <Link to={addrFilter(thisPool)}>
                        <div className={style.inputBtn}><i className="fa-solid fa-magnifying-glass"/></div>
                    </Link>
                </div>}

            <div className={style.stats}>
                <div className={style.stats__grid}>
                    <div
                        className={style.currentEffort}>Текущая
                        удача: {isNaN(luck) ? 'not found' : `${luck.toFixed(0)} %`}</div>
                    <div className={style.fee}>Комиссия пула: {props.coinPage.fullStats.fee} %</div>
                    <div
                        className={style.hashrate}>Хэшрейт: {hashFilter(props.coinPage.fullStats.hashrate).hashrate}{hashFilter(props.coinPage.fullStats.hashrate).unit}</div>
                    <div className={style.height}>Решаем блок: {props.coinPage.fullStats.height}</div>
                    <div className={style.lastBlockFound}>Последний блок: {dateFilter(props.coinPage.fullStats.lastBlockFound)}</div>
                    <div className={style.minPayment}>Минимальный вывод: {props.coinPage.fullStats.minPayment}</div>
                    <div className={style.miners}>Майнеры: {props.coinPage.fullStats.miners}</div>
                    <div className={style.type}>Тип пула: {props.coinPage.fullStats.type}</div>
                    <div className={style.charts}>
                        <div className={style.showMinersBtn}
                             onClick={showMiners}>{!checked ? 'Показать список майнеров' : 'Убрать список майнеров'}
                        </div>
                    </div>
                </div>
            </div>

            {checked ? <div className={style.totalHashrate} id='anchorBtn'>
                <div className={style.coin_column_grid}>
                    <div className={style.wallet}>Кошелек</div>
                    <div className={style.hashrate}>Хэшрейт</div>
                    <div className={style.shares}>Последняя шара</div>
                    <div className={style.status}>Статус</div>
                </div>
                <div className={style.minersWrapper}>
                    <PaginatedItems itemsPerPage={7} items={props.coinPage.miners} type={'coinPage'} addInputValue={props.addInputValue}/>
                </div>

            </div> : ''}
        </div>

    </div>);
};
