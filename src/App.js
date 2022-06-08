import React, {useEffect} from "react";
import './App.css';
import Footer from "./Components/Footer/FooterComponent";
import {Routes, Route} from "react-router-dom";
import ContentContainer from "./Components/Content/ContentComponentContainer";
import {AppPlaceHolder, AppPlaceHolder2, AppPlaceHolder3} from "./AppPlacepolders";
import CoinPageContainer from "./Components/CoinPage/CoinPageContainer";
import Err404 from "./Components/404/404";
import E4Pizor from "./Components/e4pizor/E4pizor";
import {AccountContainer} from "./Components/Account/AccountContainer";
import {showRandomBgcStyle} from "./Filters";




function App() {

    let currentPath = window.location.pathname

    localStorage.setItem('middleWarePath', window.location.pathname.split('account/')[1])

    const pathCheckerAccountPage = (path) => {
        if(path.indexOf('account') > 0) {
            localStorage.setItem('account', window.location.pathname.split('account/')[1])
            localStorage.setItem('pool', window.location.pathname.substring(6,window.location.pathname.indexOf('/account')))
            return `${path.split('pool/')[1]}`
        }
    }


    function pathCheckerCoinPage(path) {
        // console.log( path.split('pool/')[1])
        if(path.indexOf('account') < 0) {
            localStorage.setItem('selectedCoin', window.location.pathname.split('pool/')[1])

            return path.split('pool/')[1]
        }
    }


    // console.log('1')

    useEffect(()=>{
        showRandomBgcStyle()
    },[])

    return (
        <div className='App'>
             <Routes>
                <Route path='/' element={<AppPlaceHolder/>}>
                    <Route index element={<ContentContainer/>}/>
                    <Route path='e4pizor' element={<E4Pizor/>}/>
                </Route>
                <Route path={`pool/${pathCheckerCoinPage(currentPath)}`} element={<AppPlaceHolder2/>}>
                    <Route index element={<CoinPageContainer/>}/>
                </Route>
                <Route path={`pool/${pathCheckerAccountPage(currentPath)}`} element={<AppPlaceHolder3/>}>
                    <Route index element={<AccountContainer/>}/>
                </Route>
                <Route path='*' element={<AppPlaceHolder/>}>
                    <Route path='*' element={<Err404/>}/>
                </Route>
            </Routes>
                <Footer/>
        </div>)

}


export default App;
