import {connect} from "react-redux";
import CoinHeader from "./CoinHeader";
import {selectCoin} from "../../redux/contentReducer";




let mapStateToProps = (state) => {
    return {content: state.content}
}


let CoinHeaderContainer = connect(mapStateToProps, null)(CoinHeader);


export default CoinHeaderContainer;