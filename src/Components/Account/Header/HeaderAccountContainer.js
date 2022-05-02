import {connect} from "react-redux";
import {fetching} from "../../../redux/contentReducer";
import HeaderAccount from "./HeaderAccount";






let mapStateToProps = (state) => {
    return {content: state.content}
}

let HeaderAccountContainer = connect(mapStateToProps, {fetching})(HeaderAccount);


export default HeaderAccountContainer;


