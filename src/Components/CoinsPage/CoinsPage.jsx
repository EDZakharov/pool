import CoinCard from "../Coincard/Coincard";
import React, {useEffect} from "react";
import Fetcher from "../Fetcher/Fetcher";

export let CoinsPage = (props) => {



    // console.log(props.content.coins)

    if (props.content.coins.length !== 0){
        return props.content.coins.map(c => {
            return (<CoinCard
                isFetching={props.fetching}
                content={props.content}
                selectCoin={props.selectCoin}
                poolType={c.data.type}
                key={c.pool}
                fullName={c.pool}
                hashrate={c.data.hashrate}
                minersTotal={c.data.miners}
                maturedTotal={c.maturedTotal}
                difficulty={' '}/>)
        })
    } else {
        return <Fetcher/>
    }
}