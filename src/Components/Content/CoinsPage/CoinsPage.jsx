import React from "react";
import Fetcher from "../../Fetcher/Fetcher";
import CoinCard from "./Coincard/Coincard";
import style from './CoinsPage.module.scss'


export let CoinsPage = (props) => {

    if (props.content.coins.length !== 0) {
        let sortedCoins = props.content.coins.sort((a, b)=> {
            if(a.priority && b.priority){
                if(a.priority < b.priority){
                    return 1
                } else return -1
            } else return props.content.coins
        })

        return <div className={style.coinCardWrapper}>
            {sortedCoins.map(c => {
                return (<CoinCard
                        content={props.content}
                        selectCoin={props.selectCoin}
                        poolType={c.type}
                        key={c.pool}
                        fullName={c.pool}
                        name={c.name}
                        symbol={c.symbol}
                        hashrate={c.hashrate}
                        minersTotal={c.miners}
                        maturedTotal={c.maturedTotal}
                        lastBlockFound={c.lastBlockFound}
                        fee={c.fee}
                        minPayment={c.minPayment}
                    />
                )
            })}
        </div>

    } else {
        return <Fetcher/>
    }
}