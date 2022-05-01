import {connect} from "react-redux";
import Content from "./ContentComponent";
<<<<<<< HEAD
import {fetching, selectCoin} from "../../redux/contentReducer";
import {addCoinThunk} from "../../redux/addCoinThunk";
import {withDataSet} from "../../HOC/withDataSet";
=======
import { selectCoin} from "../../redux/contentReducer";
import {dellCoinData, showCoins} from "../../redux/socketMiddleware";
import {fetching} from "../../redux/coinPageReducer";
>>>>>>> 71e8514da567b6dab1ed89278cf1204ffb95682a


let mapStateToProps = (state) => {
    return {content: state.content}
}

let ContentContainer = connect(mapStateToProps, {selectCoin, fetching, showCoins, dellCoinData})(Content);


export default ContentContainer;


