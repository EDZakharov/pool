import {connect} from "react-redux";
import {CoinPage} from "./CoinPage";
<<<<<<< HEAD
import {dellMinersData, showMiners, ShowMinersOnce} from "../../redux/socketMiddleware";
=======

import {dellMinersData, showMiners} from "../../redux/socketMiddleware";
>>>>>>> 29c0ea50a38d1f371f0c4e161c2c8339286bb20e
import {fetching} from "../../redux/coinPageReducer";



let mapStateToProps = (state) => {
    return {
        coinPage:state.coinPage
    }
}

<<<<<<< HEAD
let CoinPageContainer = connect(mapStateToProps, {fetching, ShowMinersOnce,showMiners,dellMinersData})(CoinPage)
=======

let CoinPageContainer = connect(mapStateToProps, {fetching, showMiners,dellMinersData})(CoinPage)
>>>>>>> 29c0ea50a38d1f371f0c4e161c2c8339286bb20e

export default CoinPageContainer;