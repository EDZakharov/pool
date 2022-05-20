import {connect} from "react-redux";
import {CoinPage} from "./CoinPage";
import {
    dellBlocksData,
    dellFullStats,
    dellMinersData, showBlocks, ShowBlocksOnce,
    showFullStats,
    showFullStatsOnce,
    showMiners,
    ShowMinersOnce
} from "../../redux/socketMiddleware";
import {addAccountAddress, addInputValue, fetching} from "../../redux/coinPageReducer";
import {fetchingAccount} from "../../redux/accountReducer";


let mapStateToProps = (state) => {
    return {
        coinPage: state.coinPage,
        content: state.content,
        account: state.account
    }
}


let CoinPageContainer = connect(mapStateToProps,
    {
        fetching, showMiners,dellMinersData,
        ShowMinersOnce,showFullStatsOnce,showFullStats,
        dellFullStats,addAccountAddress,addInputValue,
        fetchingAccount, ShowBlocksOnce, showBlocks,
        dellBlocksData})(CoinPage)

export default CoinPageContainer;