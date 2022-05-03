import {connect} from "react-redux";
import CoinHeader from "./CoinHeader";
import {addAccountAddress} from "../../redux/accountReducer";




let mapStateToProps = (state) => {
    return {account: state.account}
}


let CoinHeaderContainer = connect(mapStateToProps, {addAccountAddress})(CoinHeader);


export default CoinHeaderContainer;