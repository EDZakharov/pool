import {connect} from "react-redux";
import Content from "./ContentComponent";

import { selectCoin} from "../../redux/contentReducer";
import {dellCoinData, showCoins, showCoinsOnce} from "../../redux/socketMiddleware";



let mapStateToProps = (state) => {
    return {content: state.content}
}

let ContentContainer = connect(mapStateToProps, {selectCoin, showCoins, dellCoinData, showCoinsOnce})(Content);


export default ContentContainer;


