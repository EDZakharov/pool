import React, {useEffect} from "react";
import style from "./ContentComponent.module.scss"
<<<<<<< HEAD
import {CoinsPage} from "../CoinsPage/CoinsPage";
=======
import {CoinsPage} from "./CoinsPage/CoinsPage";
>>>>>>> 71e8514da567b6dab1ed89278cf1204ffb95682a

const Content = (props) => {

    useEffect(()=>{
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
