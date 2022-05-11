import React from "react";
import Fetcher from "../../Fetcher/Fetcher";
import CoinCard from "./Coincard/Coincard";
import style from './CoinsPage.module.scss'


export let CoinsPage = (props) => {

    if (props.content.coins.length !== 0) {
        return <div className={style.coinCardWrapper}>
            {props.content.coins.map(c => {
                console.log(c)
                return (<CoinCard
                        isFetching={props.fetching}
                        content={props.content}
                        selectCoin={props.selectCoin}
                        poolType={c.type}
                        key={c.pool}
                        fullName={c.pool}
                        hashrate={c.hashrate}
                        minersTotal={c.miners}
                        maturedTotal={c.maturedTotal}
                        fee={c.fee}/>
                )
            })}
        </div>

    } else {
        return <Fetcher/>
    }
}