import React, {useEffect, useState} from 'react';
import style from './CoinPage.module.scss'
import {coinNamesFilter, hashFilter} from "../../Filters";
import {CoinPageData} from "./CoinPageData/CoinPageData";
import Err404 from "../404/404";
import Fetcher from "../Fetcher/Fetcher";


export const CoinPage = (props) => {

    const index = props.content.coins.findIndex(el => `/${el.pool}` === window.location.pathname)
    const coin = props.content.coins[index]

    useEffect(() => {
        props.addMinersThunk(localStorage.getItem('selectedCoin'))
    }, [])

    let x = {...props.content.miners}
    let c = {miners: {...x.miners}}
    let keys = Object.keys(c.miners)

    return (props.content.isFetching === true ? <Fetcher/> : (props.content.statusCode !== 404 ?
        <div className={style.coin}>
            <div className={style.coinData}>
                <div className={style.stats}>Статистика</div>
                <div className={style.graph}>График</div>
                <div className={style.search}>
                    <div className={style.inputText}>Введите адрес майнера:</div>
                    <input/>
                    <div className={style.inputBtn}><i className="fa-solid fa-magnifying-glass"> </i></div>
                </div>
            </div>
            <div className={style.totalHashrate}>
                Общий хешрейт
                пула {index === -1 ? '' : coinNamesFilter(coin.data.pool)}: {index === -1 ? '' : hashFilter(coin.data.hashrate)}
                {props.content.miners.miners[0] === undefined ? '' : keys.map(el => {

                        let obj = {
                            [el]: c.miners[el]
                        }


                        let element = Object.values(obj[el])
                        // let element2 = {...element}

                        let obj2 = {
                            data: {...element[0]}
                        }
                        // console.log(obj2.data)
                        return <div key={el}>
                            <CoinPageData miner={Object.keys(obj[el])}
                                          hashrate={hashFilter(obj2.data.hr)}
                                          lastShare={obj2.data.lastBeat}
                                          offline={obj2.data.offline}/>
                        </div>

                    }
                )}


            </div>
        </div> : <Err404/>));
};
