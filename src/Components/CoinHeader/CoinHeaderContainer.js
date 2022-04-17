import {connect} from "react-redux";
import CoinHeader from "./CoinHeader";




let mapStateToProps = (state) => {
    return {content: state.content}
}


let CoinHeaderContainer = connect(mapStateToProps, null)(CoinHeader);


export default CoinHeaderContainer;