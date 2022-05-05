import {connect} from "react-redux";
import {CoinPage} from "./CoinPage";
import {dellMinersData, showFullStats, showMiners, ShowMinersOnce} from "../../redux/socketMiddleware";
import {fetching} from "../../redux/coinPageReducer";



let mapStateToProps = (state) => {
    return {
        coinPage:state.coinPage,
        content:state.content
    }
}


let CoinPageContainer = connect(mapStateToProps, {fetching, showMiners,dellMinersData,ShowMinersOnce,showFullStats})(CoinPage)

export default CoinPageContainer;