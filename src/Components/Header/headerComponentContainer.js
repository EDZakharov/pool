import React from "react";
import {connect} from "react-redux";
import Header from "./HeaderComponent";
import {selectCoin} from "../../redux/contentReducer";



let mapStateToProps = (state) => {
    return {content: state.content}
}


let HeaderContainer = connect(mapStateToProps, {selectCoin})(Header);


export default HeaderContainer;