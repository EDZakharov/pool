import {connect} from "react-redux";
import {CoinPage} from "./CoinPage";
import {
    dellBlocksData,
    dellMinersData, showBlocks, ShowBlocksOnce,
    showMiners,
    ShowMinersOnce
} from "../../redux/socketMiddleware";
import {addAccountAddress, addInputValue, clearCashP, fetching} from "../../redux/coinPageReducer";
import {fetchingAccount} from "../../redux/accountReducer";
import {dellFullStats, showFullStats, showFullStatsOnce} from "../../redux/socket2Middleware";


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
        dellBlocksData,clearCashP})(CoinPage)

export default CoinPageContainer;