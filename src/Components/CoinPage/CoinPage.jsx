import React, {useEffect, useState} from 'react';
import style from './CoinPage.module.scss'
import {coinNamesFilter, hashFilter} from "../../Filters";


export const CoinPage = (props) => {

    const index = props.content.coins.findIndex(el => `/${el.pool}` === window.location.pathname)
    const coin = props.content.coins[index]


    // console.log(props.content.coins)
    let [prevState, setState] = useState('')
    useEffect(()=>{
        setState(props.content.miners)
        console.log(props.content.miners)
    },[props.content.coins])
    // console.log(props.content.miners)
    // let c = Object.getOwnPropertyNames(b.miners.miners) === undefined ? '' : Object.getOwnPropertyNames(b.miners.miners);



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
            <div>
                Общий хешрейт
                пула {index === -1 ? '' : coinNamesFilter(coin.data.pool)}: {index === -1 ? '' : hashFilter(coin.data.hashrate)}
                {/*{props.content.miners[0] === undefined ? '' : props.content.miners[0].map(el =>*/}
                {/*    <div key={el}>*/}
                {/*        Кошелек: {el}*/}
                {/*    </div>)}*/}


            </div>
        </div>

    );
};
