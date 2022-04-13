import React from "react";
import {connect} from "react-redux";
import {addCoinData} from "../../redux/contentReducer";
import Blocks from "./BlocksPageComponent";


let mapStateToProps = (state) => {
    return {content: state.content}
}

let mapDispatchToProps = (dispatch) => {
    return {
        // addCoinDataAC: (coin)=>{dispatch(addCoinData(coin))}
    }
}


let BlocksPageContainer = connect(mapStateToProps, mapDispatchToProps)(Blocks);


export default BlocksPageContainer;