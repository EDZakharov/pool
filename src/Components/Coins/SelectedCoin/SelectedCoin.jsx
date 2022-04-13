import React from "react";
import style from "./SelectedCoin.module.scss"
import {hashFilter} from "../../../hashFilter"
import io from "socket.io-client";

const socket = io('https://ws.e4pool.com');

const SelectedCoinContent = (props) => {




    if (props.state.eth.coins.length === 0) {
        socket.emit('startStats')
        socket.on("update", (res) => {
                props.addCoinDataAC(res)
                props.addCoinsDataAC(res)
                console.log(res)
            }
        )
    }

    let index = props.state.eth.coins.findIndex(el => el.pool === props.state.eth.selectedCoin);
    let objData = props.state.eth.coins[index]


    return (
        <div className={style.coin}>
            <div className={style.coin_center}>
                <div>
                    Майнеров онлайн: {objData ? hashFilter(objData.data) : ''}
                </div>
                <div>
                    Хешрейт пула: {objData ? hashFilter(objData.data) : ''}
                </div>
            </div>
        </div>
    );
}


export default SelectedCoinContent;
