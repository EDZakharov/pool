import {connect} from "react-redux";
import Blocks from "./BlocksPageComponent";


let mapStateToProps = (state) => {
    return {content: state.content}
}


let BlocksPageContainer = connect(mapStateToProps, null)(Blocks);


export default BlocksPageContainer;

