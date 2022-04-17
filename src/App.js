import React from "react";
import './App.css';
import Footer from "./Components/Footer/FooterComponent";
import {Routes, Route} from "react-router-dom";
import ContentContainer from "./Components/Content/ContentComponentContainer";
import {AppPlaceHolder, AppPlaceHolder2} from "./AppPlacepolders";
import BlocksPageContainer from "./Components/BlocksPage/BlocksPageComponentContainer";
import CoinPageContainer from "./Components/CoinPage/CoinPageContainer";


function App() {


    const coinNames = ['/eth','/etc','/etc-solo','/burst','/keva-prop','/evox-solo','/evox-prop','/ergo'];

    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<AppPlaceHolder/>}>
                    <Route index element={<ContentContainer/>}/>
                    <Route path='/blocks' element={<BlocksPageContainer/>}/>
                    <Route path='/forum' element={<BlocksPageContainer/>}/>
                    <Route path='/chat' element={<BlocksPageContainer/>}/>
                    <Route path='/shop' element={<BlocksPageContainer/>}/>
                </Route>
                {coinNames.map((path, key) => {
                    return <Route path={path} key={key} element={<AppPlaceHolder2 />}>
                        <Route index element={<CoinPageContainer/>}/>
                    </Route>
                    }
                )}
            </Routes>
            <Footer/>
        </div>)

}


export default App;
