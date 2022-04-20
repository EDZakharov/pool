import HeaderContainer from "./Components/Header/headerComponentContainer";
import {Outlet} from "react-router";
import React from "react";
import CoinHeaderContainer from "./Components/CoinHeader/CoinHeaderContainer";
import HeaderPaymentsContainer from "./Components/Payments/Header/HeaderPaymentsContainer";


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
            <CoinHeaderContainer/>
            <Outlet/>
        </>
    )
}
export const AppPlaceHolder3 = (props) => {
    return (
        <>
            <HeaderPaymentsContainer/>
            <Outlet/>
        </>
    )
}

