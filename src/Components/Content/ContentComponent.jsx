import React from "react";
import style from "./ContentComponent.module.scss"
import {CoinsPage} from "../CoinsPage/CoinsPage";

const Content = (props) => {

    return (<div className={style.content}>
            <div className={style.content_center}>
                <CoinsPage {...props}/>
            </div>
        </div>
    );
}


export default Content;
