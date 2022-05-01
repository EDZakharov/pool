
import React from "react";
import Fetcher from "../../Fetcher/Fetcher";
import CoinCard from "./Coincard/Coincard";


export let CoinsPage = (props) => {

    if (props.content.coins.length !== 0) {
        return props.content.coins.map(c => {
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
                difficulty={' '}/>)
        })
    } else {
        return <Fetcher/>
    }
}