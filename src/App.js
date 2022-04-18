import React from "react";
import './App.css';
import Footer from "./Components/Footer/FooterComponent";
import {Routes, Route} from "react-router-dom";
import ContentContainer from "./Components/Content/ContentComponentContainer";
import {AppPlaceHolder, AppPlaceHolder2} from "./AppPlacepolders";
import BlocksPageContainer from "./Components/BlocksPage/BlocksPageComponentContainer";
import CoinPageContainer from "./Components/CoinPage/CoinPageContainer";
import Err404 from "./Components/404/404";


function App() {


    // const coinNames = ['/eth','/etc','/etc-solo','/burst','/keva-prop','/evox-solo','/evox-prop','/ergo'];
    let path = localStorage.getItem('selectedCoin');

    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<AppPlaceHolder/>}>
                    <Route index element={<ContentContainer/>}/>
                    {/*<Route path='/blocks' element={<BlocksPageContainer/>}/>*/}
                    <Route path='/forum' element={<BlocksPageContainer/>}/>
                    <Route path='/chat' element={<BlocksPageContainer/>}/>
                    <Route path='/shop' element={<BlocksPageContainer/>}/>
                </Route>

                <Route path={path} element={<AppPlaceHolder2/>}>
                    <Route index element={<CoinPageContainer/>}/>
                </Route>
                <Route path='*' element={<AppPlaceHolder/>}>
                    <Route  path='*' element={<Err404/>}/>
                </Route>



                {/*{coinNames.map((path, key) => {*/}
                {/*    return <Route path={path} key={key} element={<AppPlaceHolder2 />}>*/}
                {/*        <Route index element={<CoinPageContainer/>}/>*/}
                {/*    </Route>*/}
                {/*    }*/}
                {/*)}*/}
            </Routes>
            <Footer/>
        </div>)

}


export default App;
