<<<<<<< HEAD:src/Components/CoinsPage/CoinsPage.jsx
import CoinCard from "../Coincard/Coincard";
import React, {useEffect} from "react";
import Fetcher from "../Fetcher/Fetcher";

export let CoinsPage = (props) => {



    // console.log(props.content.coins)

    if (props.content.coins.length !== 0){
=======
import React from "react";
import Fetcher from "../../Fetcher/Fetcher";
import CoinCard from "./Coincard/Coincard";


export let CoinsPage = (props) => {

    if (props.content.coins.length !== 0) {
>>>>>>> 71e8514da567b6dab1ed89278cf1204ffb95682a:src/Components/Content/CoinsPage/CoinsPage.jsx
        return props.content.coins.map(c => {
            // console.log(c)
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