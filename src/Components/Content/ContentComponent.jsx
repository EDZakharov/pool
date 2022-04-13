import React from "react";
import style from "./ContentComponent.module.scss"
import CoinCard from "../Coincard/Coincard";
import {io} from "socket.io-client";



const socket = io('https://ws.e4pool.com');

const Content = (props, id) => {

    if (props.content.coins.length === 0) {
        socket.emit('startStats')
        socket.on("update", (res) => {
            props.addCoinDataAC(res)
            props.addCoinsDataAC(res)
            // console.log(res)
            }
        )
    }


    return (<div className={style.content}>
            <div className={style.content_center}>
                {props.content.coins.map(c => {
                return (<CoinCard
                    addStatusAC={props.addStatusAC}
                    poolType={c.data.type}
                    key={c.pool}
                    fullName={c.pool}
                    hashrate={c.data.hashrate}
                    minersTotal={c.data.miners}
                    maturedTotal={c.maturedTotal}
                    difficulty={' '}/>)
            })}</div>

        </div>
    );
}


export default Content;
