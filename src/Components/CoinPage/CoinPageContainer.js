import {connect} from "react-redux";
import {CoinPage} from "./CoinPage";
import {
    dellFullStats,
    dellMinersData,
    showFullStats,
    showFullStatsOnce,
    showMiners,
    ShowMinersOnce
} from "../../redux/socketMiddleware";
import {fetching} from "../../redux/coinPageReducer";
import {addAccountAddress, fetchingAccount} from "../../redux/accountReducer";



let mapStateToProps = (state) => {
    return {
        coinPage: state.coinPage,
        content: state.content,
        account: state.account
    }
}


let CoinPageContainer = connect(mapStateToProps, {fetching, showMiners,dellMinersData,ShowMinersOnce,showFullStatsOnce,showFullStats,dellFullStats,addAccountAddress})(CoinPage)

export default CoinPageContainer;