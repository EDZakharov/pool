import {connect} from "react-redux";
import Content from "./ContentComponent";
import { selectCoin} from "../../redux/contentReducer";
import {dellCoinData, showCoins} from "../../redux/socketMiddleware";
import {fetching} from "../../redux/coinPageReducer";


let mapStateToProps = (state) => {
    return {content: state.content}
}

let ContentContainer = connect(mapStateToProps, {selectCoin, fetching, showCoins, dellCoinData})(Content);


export default ContentContainer;


