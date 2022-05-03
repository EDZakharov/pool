import {connect} from "react-redux";
import {fetching} from "../../../redux/contentReducer";
import HeaderAccount from "./HeaderAccount";






let mapStateToProps = (state) => {
    return {account: state.account}
}

let HeaderAccountContainer = connect(mapStateToProps, {fetching})(HeaderAccount);


export default HeaderAccountContainer;


