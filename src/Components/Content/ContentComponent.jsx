import React, {useEffect} from "react";
import style from "./ContentComponent.module.scss"
import {CoinsPage} from "./CoinsPage/CoinsPage";

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

    return (<div className={style.content}>
            <div className={style.content_center}>
                <CoinsPage {...props}/>
            </div>
        </div>
    );
}


export default Content;
