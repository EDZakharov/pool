import {connect} from "react-redux";
import {CoinPage} from "./CoinPage";
import {dellMinersData, showMiners, ShowMinersOnce} from "../../redux/socketMiddleware";
import {fetching} from "../../redux/coinPageReducer";


let mapStateToProps = (state) => {
    return {
        coinPage:state.coinPage
    }
}

let CoinPageContainer = connect(mapStateToProps, {fetching, ShowMinersOnce,showMiners,dellMinersData})(CoinPage)

export default CoinPageContainer;