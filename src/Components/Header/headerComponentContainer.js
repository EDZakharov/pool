import React from "react";
import {connect} from "react-redux";
import Header from "./HeaderComponent";



let mapStateToProps = (state) => {
    return {header: state.header}
}


let HeaderContainer = connect(mapStateToProps, null)(Header);


export default HeaderContainer;