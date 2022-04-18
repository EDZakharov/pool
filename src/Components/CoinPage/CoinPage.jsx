import React, {useEffect, useState} from 'react';
import style from './CoinPage.module.scss'
import {coinNamesFilter, hashFilter} from "../../Filters";
import {CoinPageData} from "./CoinPageData/CoinPageData";


export const CoinPage = (props) => {

    const index = props.content.coins.findIndex(el => `/${el.pool}` === window.location.pathname)
    const coin = props.content.coins[index]

    // console.log(props.content.coins)
    // let [prevState, setState] = useState('')
    useEffect(() => {
        props.addMinersThunk(window.location.pathname.slice(1))
    }, [])
    //


    let x = {...props.content.miners}
    let c = {miners: {...x.miners}}
    let keys = Object.keys(c.miners)

    let miners = keys.map(el => {
        return {
            [el]: c.miners[el]
        }
    })

    // console.log(miners)
    //
    // console.log(keys.length)

    // console.log(props.content.miners)

    // let c = Object.getOwnPropertyNames(b.miners.miners) === undefined ? '' : Object.getOwnPropertyNames(b.miners.miners);

    // let b = {
    //     miners: {...action.miners}
    // }
    // stateCopy.miners.push(Object.getOwnPropertyNames(b.miners.miners))

    // console.log(props.content.miners)
    // let arr = props.content.miners.map(el => {
    //     return  Object.keys(el)
    //
    // })

    // console.log(arr.map(el => {console.log(el.slice(0))}))

    // function spliceIntoChunks(arr, chunkSize) {
    //     const res = [];
    //     while (arr.length > 0) {
    //         const chunk = arr.splice(0, chunkSize);
    //         res.push(chunk);
    //     }
    //     return res;
    // }

    // console.log(spliceIntoChunks(arr,1))


    // console.log(props.content.miners)
    // {props.content.miners.map(m => {
    //     // let keys = ;
    //
    //     return <div>Кошелек: {Object.keys(m).map(el => el[0])}</div>
    // })}


    return (
        <div className={style.coin}>
            <div className={style.coinData}>
                <div className={style.stats}>Статистика</div>
                <div className={style.graph}>График</div>
                <div className={style.search}><div className={style.inputText}>Введите адрес майнера: </div><input/><div className={style.inputBtn}>
                    <i className="fa-solid fa-magnifying-glass"></i></div></div>
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
                        console.log(obj2.data)
                        return <div key={el}>
                            <CoinPageData miner={Object.keys(obj[el])}
                                          hashrate={hashFilter(obj2.data.hr)}
                                          lastShare={obj2.data.lastBeat}
                                          offline={obj2.data.offline}/>
                        </div>

                    }
                )}


            </div>
        </div>

    );
};
