import {connect} from "react-redux";
import Content from "./ContentComponent";
import {fetching, selectCoin} from "../../redux/contentReducer";
import {addCoinThunk} from "../../redux/addCoinThunk";
import {withDataSet} from "../../HOC/withDataSet";





let mapStateToProps = (state) => {
    return {content: state.content}
}

let ContentContainer = connect(mapStateToProps, {addCoinThunk, selectCoin, fetching})(withDataSet(Content));


export default ContentContainer;


