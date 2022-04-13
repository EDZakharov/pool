import HeaderContainer from "./Components/Header/headerComponentContainer";
import {Outlet} from "react-router";
import React from "react";
import SelectedCoinHeader from "./Components/Coins/SelectedCoin/Header/SelectedCoinHeader";

export const AppPlaceHolder = () => {
    return (
        <>
            <HeaderContainer/>
            <Outlet/>
        </>)
}
export const AppPlaceHolder2 = (props) => {
    return (
        <>
            <SelectedCoinHeader fullName={props.fullName}/>
            <Outlet/>
        </>
    )
}

