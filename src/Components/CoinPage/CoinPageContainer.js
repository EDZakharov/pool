import {connect} from "react-redux";
import {CoinPage} from "./CoinPage";
import {addCoinThunk, addMinersThunk} from "../../redux/addCoinThunk";
import {fetching} from "../../redux/contentReducer";




let mapStateToProps = (state) => {
    return {
        content:state.content
    }
}

let CoinPageContainer = connect(mapStateToProps, {addCoinThunk, addMinersThunk, fetching})(CoinPage)

export default CoinPageContainer;