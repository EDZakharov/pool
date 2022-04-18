import {connect} from "react-redux";
import {CoinPage} from "./CoinPage";
import {addCoinThunk, addMinersThunk} from "../../redux/addCoinThunk";




let mapStateToProps = (state) => {
    return {
        content:state.content
    }
}

let CoinPageContainer = connect(mapStateToProps, {addCoinThunk, addMinersThunk})(CoinPage)

export default CoinPageContainer;