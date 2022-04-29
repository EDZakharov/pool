import {connect} from "react-redux";
import {CoinPage} from "./CoinPage";
import {addMinersThunk} from "../../redux/addCoinThunk";
import {withDataMinersSet} from "../../HOC/withDataMinersSet";




let mapStateToProps = (state) => {
    return {
        content:state.content
    }
}

let CoinPageContainer = connect(mapStateToProps, {addMinersThunk})(withDataMinersSet(CoinPage))

export default CoinPageContainer;