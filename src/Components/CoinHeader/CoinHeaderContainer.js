import {connect} from "react-redux";
import CoinHeader from "./CoinHeader";
import {addAccountAddress} from "../../redux/accountReducer";
import {dellCoinData, showFullStats} from "../../redux/socketMiddleware";




let mapStateToProps = (state) => {
    return {account: state.account}
}


let CoinHeaderContainer = connect(mapStateToProps, {addAccountAddress,showFullStats,dellCoinData})(CoinHeader);


export default CoinHeaderContainer;