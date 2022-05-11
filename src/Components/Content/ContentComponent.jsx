import React, {useEffect} from "react";
import style from "./ContentComponent.module.scss"
import {CoinsPage} from "./CoinsPage/CoinsPage";
import Fetcher from "../Fetcher/Fetcher";


const Content = (props) => {

    useEffect(()=>{

        props.showCoinsOnce()
        let start = setInterval(()=>{
            props.showCoins()
        },500)

        return () => {
            clearInterval(start)
            props.dellCoinData()
        }
    },[])

    return (<div className={style.content}>{props.content.coins.length !== 0 ? <div className={localStorage.getItem('showRandomBgcStyle')}>
            <CoinsPage {...props}/>
        </div> : <Fetcher/>}

        </div>
    );
}


export default Content;
