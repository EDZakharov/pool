import React, {useEffect} from "react";
import style from "./CoinHeader.module.scss"
import {Link, NavLink} from "react-router-dom";
import {coinNamesFilter, imgFilter} from "../../Filters";
import {selectedCoin} from "../../GlobalVars";

const CoinHeader = () => {
    let CoinName = localStorage.getItem('selectedCoin')

    return (
        <div className={style.coin_header}>
            <div className={style.coin_logo_C}>
                <Link to={'/'}><img src={imgFilter('logo')} alt='logo' className={style.siteLog_C}/></Link>

            </div>
            <div className={style.currentCoin}>
                <Link to="/"><span >{coinNamesFilter(CoinName)}</span></Link>
            </div>
            <div className={style.coin_header_Links}>
                <NavLink to="/" ><i className="fas fa-home"/> Home</NavLink>
            </div>
        </div>
    );
}

export default CoinHeader;
