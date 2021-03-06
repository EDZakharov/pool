import React from "react";
import style from "./Coincard.module.scss"
import {NavLink} from "react-router-dom";
import {dateFilter, hashFilter, imgFilter} from "../../../../Filters";
import CoinImage from "../../../CoinImage/CoinImage";


const CoinCard = ({
                      fullName,
                      name,
                      hashrate,
                      selectCoin,
                      poolType,
                      minersTotal,
                      fee,
                      lastBlockFound,
                      minPayment,
                      symbol
                  }) => {


    let adr = fullName.toString()
    let coinName = name;
    let hashes = hashFilter(hashrate);
    let image = imgFilter(`${fullName}`);

    return (

        <div className={style.coinCard}>
            <div className={style.coinCard_header}>
                <div className={style.wrapper}>
                    <span className={style.poolName}>{coinName}<span className={style.poolType}>{poolType}</span></span>
                    <CoinImage path={image}/>
                </div>
            </div>
            <div className={style.coinCard_main}>
                <div><span className={style.line}/> Хэшрейт пула: <span
                    className={style.text}>{!hashes ? '' : hashes.hashrate} {!hashes ? '' : hashes.unit}</span></div>
                <div><span className={style.line}/> Майнеры: <span className={style.text}>{minersTotal}</span></div>
                <div><span className={style.line}/> Комиссия пула: <span className={style.text}>{fee} %</span></div>
                <div><span className={style.line}/> Последний блок: <span className={style.text}>{dateFilter(lastBlockFound)}</span></div>
                <div><span className={style.line}/> Минимальный вывод: <span className={style.text}>{minPayment} {symbol}</span></div>
            </div>
            <div className={style.coinCard_footer}>
                <NavLink className={style.start_btn} to={`pool/${adr}`}>
                    Перейти на пул
                </NavLink>

            </div>
        </div>

    );
}

export default CoinCard;
