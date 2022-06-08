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
    let path = localStorage.getItem('selectedCoin')

    let addr = localStorage.getItem('account')
    console.log(path)

    useEffect(()=>{
        showRandomBgcStyle()
    },[])

    return (
        <div className='App'>
            {path !== null ? <Routes>
                <Route path='/' element={<AppPlaceHolder/>}>
                    <Route index element={<ContentContainer/>}/>
                    <Route path='e4pizor' element={<E4Pizor/>}/>
                </Route>
                <Route path={path} element={<AppPlaceHolder2/>}>
                    <Route index element={<CoinPageContainer/>}/>
                </Route>
                <Route path={`${path}/account/${addr}`} element={<AppPlaceHolder3/>}>
                    <Route index element={<AccountContainer/>}/>
                </Route>
                <Route path='*' element={<AppPlaceHolder/>}>
                    <Route path='*' element={<Err404/>}/>
                </Route>
            </Routes> : <Routes>
                <Route path='/' element={<AppPlaceHolder/>}>
                    <Route index element={<ContentContainer/>}/>
                    <Route path='e4pizor' element={<E4Pizor/>}/>
                </Route> </Routes>}

                <Footer/>
        </div>)

}


export default App;
