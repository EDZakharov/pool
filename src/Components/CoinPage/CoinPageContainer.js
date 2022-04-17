import {connect} from "react-redux";
import {CoinPage} from "./CoinPage";
import {addCoinThunk, addMinersThunk} from "../../redux/addCoinThunk";
import {withDataMinersSet} from "../../HOC/withDataSet";
// import {rerender} from "../../redux/contentReducer";


let mapStateToProps = (state) => {
    return {
        content:state.content
    }
}

let CoinPageContainer = connect(mapStateToProps, {addCoinThunk, addMinersThunk})(withDataMinersSet(CoinPage))

export default CoinPageContainer;