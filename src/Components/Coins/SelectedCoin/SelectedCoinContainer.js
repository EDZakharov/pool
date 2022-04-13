import React from "react";
import {connect} from "react-redux";
import {addCoins, addCoinStatus} from "../../../redux/ethReducer";
import SelectedCoinContent from "./SelectedCoin";
import {addCoinData} from "../../../redux/contentReducer";


let mapStateToProps = (state) => {
    return {
        state: state
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addCoinsDataAC: (coin)=>{dispatch(addCoins(coin))},
        addCoinDataAC: (coin)=>{dispatch(addCoinData(coin))},
        addStatusAC: (coinName)=>{dispatch(addCoinStatus(coinName))}
    }
}


let SelectedCoinsContainer = connect(mapStateToProps, mapDispatchToProps)(SelectedCoinContent);


export {SelectedCoinsContainer};