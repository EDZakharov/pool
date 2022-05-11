import {connect} from "react-redux";
import CoinHeader from "./CoinHeader";





let mapStateToProps = (state) => {
    return {account: state.account}
}


let CoinHeaderContainer = connect(mapStateToProps, null)(CoinHeader);


export default CoinHeaderContainer;