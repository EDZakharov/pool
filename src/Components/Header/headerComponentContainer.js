import React from "react";
import {connect} from "react-redux";
import Header from "./HeaderComponent";
import {
    addActiveBlocksLinkActionCreator, addActiveChatLinkActionCreator,
    addActiveForumLinkActionCreator,
    addActiveHomeLinkActionCreator, addActiveShopLinkActionCreator
} from "../../redux/headerReducer";


let mapStateToProps = (state) => {
    return {header: state.header}
}

let mapDispatchToProps = (dispatch) => {
    return {
        addActiveStatusH: () => {dispatch(addActiveHomeLinkActionCreator())},
        addActiveStatusB: () => {dispatch(addActiveBlocksLinkActionCreator())},
        addActiveStatusF: () => {dispatch(addActiveForumLinkActionCreator())},
        addActiveStatusC: () => {dispatch(addActiveChatLinkActionCreator())},
        addActiveStatusS: () => {dispatch(addActiveShopLinkActionCreator())},
    }
}


let HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);


export default HeaderContainer;