import {connect} from "react-redux";
import {CoinPage} from "./CoinPage";
<<<<<<< HEAD
import {addMinersThunk} from "../../redux/addCoinThunk";
import {withDataMinersSet} from "../../HOC/withDataMinersSet";


=======
import {dellMinersData, showMiners} from "../../redux/socketMiddleware";
import {fetching} from "../../redux/coinPageReducer";
>>>>>>> 71e8514da567b6dab1ed89278cf1204ffb95682a


let mapStateToProps = (state) => {
    return {
        coinPage:state.coinPage
    }
}

<<<<<<< HEAD
let CoinPageContainer = connect(mapStateToProps, {addMinersThunk})(withDataMinersSet(CoinPage))
=======
let CoinPageContainer = connect(mapStateToProps, {fetching, showMiners,dellMinersData})(CoinPage)
>>>>>>> 71e8514da567b6dab1ed89278cf1204ffb95682a

export default CoinPageContainer;