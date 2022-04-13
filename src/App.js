import React from "react";
import './App.css';
import Footer from "./Components/Footer/FooterComponent";
import {Routes, Route} from "react-router-dom";
import ContentContainer from "./Components/Content/ContentComponentContainer";
import {AppPlaceHolder, AppPlaceHolder2} from "./AppPlacepolders";
import {SelectedCoinsContainer} from "./Components/Coins/SelectedCoin/SelectedCoinContainer";



function App(props) {
    let path = `/coins/${props.path}`


    return (
        <div className='App'>
        <Routes>
            <Route path='/' element={<AppPlaceHolder/>}>
                <Route index element={<ContentContainer/>}/>
            </Route>
            <Route path={path} element={<AppPlaceHolder2 fullName={props.path}/>}>
                <Route index element={<SelectedCoinsContainer/>}/>
            </Route>
        </Routes>
        <Footer/>
    </div>)

}




export default App;
