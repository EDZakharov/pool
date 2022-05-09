import {connect} from "react-redux";
import CoinHeader from "./CoinHeader";
import {addAccountAddress} from "../../redux/accountReducer";
import {dellCoinData} from "../../redux/socketMiddleware";




let mapStateToProps = (state) => {
    return {account: state.account}
}


let CoinHeaderContainer = connect(mapStateToProps, {addAccountAddress,dellCoinData})(CoinHeader);


export default CoinHeaderContainer;