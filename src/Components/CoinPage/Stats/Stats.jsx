import React, {useEffect} from 'react';
import style from './Stats.module.scss'
import {poolChecker} from "../../../Filters";

const Stats = ({fee,luck,hashrate,unit,height,lastBlockFound,minPayment,thisPool,miners,type,clearCashP}) => {
    useEffect(()=>{
        return () => {
            clearCashP()
        }
    },[])

    return (
        <div className={style.stats}>
            <div className={style.currentEffort}>Текущая
                удача: {isNaN(luck) ? 'n/a' : `${luck.toFixed(0)} %`}</div>
            <div className={style.fee}>Комиссия пула: {fee} %</div>
            <div
                className={style.hashrate}>Хэшрейт
                пула: {hashrate}{unit}</div>
            <div className={style.height}>Решаем блок: {height}</div>
            <div className={style.lastBlockFound}>Последний
                блок: {lastBlockFound}</div>
            <div className={style.minPayment}>Минимальный
                вывод: {minPayment} {poolChecker(thisPool)}</div>
            <div className={style.miners}>Майнеры: {miners}</div>
            <div className={style.type}>Тип пула: {type}</div>
            <div className={style.charts}>
            </div>
        </div>
    );
};

export default Stats;