import React from "react";
import {connect} from "react-redux";
import Content from "./ContentComponent";
import {addCoinData} from "../../redux/contentReducer";
import {addCoins, addCoinStatus} from "../../redux/ethReducer";




let mapStateToProps = (state) => {
    return {content: state.content}
}

let mapDispatchToProps = (dispatch) => {
    return {
        addCoinDataAC: (coin)=>{dispatch(addCoinData(coin))},
        addCoinsDataAC: (coin)=>{dispatch(addCoins(coin))},
        addStatusAC: (coinName)=>{dispatch(addCoinStatus(coinName))}
    }
}


let ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);


export default ContentContainer;