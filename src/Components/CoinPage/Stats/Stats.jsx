import React, {useEffect} from 'react';
import style from './Stats.module.scss'
import {poolChecker} from "../../../Filters";
import Charts from "../../Charts/Charts";
import Fetcher from "../../Fetcher/Fetcher";

const Stats = ({
                   fee,
                   luck,
                   hashrate,
                   unit,
                   height,
                   lastBlockFound,
                   minPayment,
                   thisPool,
                   miners,
                   type,
                   charts,
               }) => {

    return (
        <div className={style.stats}>
            {charts && charts.length !== 0 ?
                <div className={style.graph}>
                    <div className={style.chartsGraph}>
                        <Charts charts={charts} text={`Общая мощность ${thisPool} пула`}/>
                    </div>
                </div> : <div className={style.graph}><Fetcher/></div>}
                <div className={style.items}>
                    <div className={style.item}>Текущая удача: {isNaN(luck) ? 'n/a' : `${luck.toFixed(0)} %`}</div>
                    <div className={style.item}>Комиссия пула: {fee} %</div>
                    <div className={style.item}>Хэшрейт пула: {hashrate}{unit}</div>
                    <div className={style.item}>Решаем блок: {height}</div>
                    <div className={style.item}>Последний блок: {lastBlockFound}</div>
                    <div className={style.item}>Минимальный вывод: {minPayment} {poolChecker(thisPool)}</div>
                    <div className={style.item}>Майнеры: {miners}</div>
                    <div className={style.item}>Тип пула: {type}</div>
                </div>
        </div>
    );
};

export default Stats;