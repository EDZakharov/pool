import React, {useEffect, useState} from "react";
import style from "./CoinHeader.module.scss"
import {Link, NavLink} from "react-router-dom";
import {coinNamesFilter, imgFilter} from "../../Filters";
import {selectedCoin} from "../../GlobalVars";

const CoinHeader = () => {
    let onClickActiveStatus = ({isActive}) => (isActive ? style.active : 'inactive');

    let CoinName = localStorage.getItem('selectedCoin')
    let coinLogo = imgFilter(localStorage.getItem('selectedCoin'))
    let x = localStorage.getItem('account')

    let addrFilter = (x = '') => {
        if (x === '') {
            return `/${CoinName}`
        }
        if (x !== '') {
            return `/${x}/stats`
        }

    }
    let setAddr = (e) => {
        if(e.target.value !== ''){
            localStorage.setItem('account', e.target.value)
            console.log(e.target.value)
        }
    }

    return (
        <div className={style.coin_header}>
            <NavLink to={'/'}><img src={imgFilter('logo')} alt='logo' className={style.siteLog_C}/></NavLink>
            <NavLink to="/"><span className={style.currentCoin}>{coinNamesFilter(CoinName)}</span></NavLink>
            <NavLink to={'/'}><img src={coinLogo} alt='logo' className={style.coin_logo_C}/></NavLink>
            <div className={style.coin_header_Links}>
                <div className={style.inputForm}>
                    <input onChange={setAddr} type='text' autoComplete='off' placeholder={`miner address`}/>
                    <Link to={addrFilter(x)} >
                        <div className={style.inputBtn}><i className="fa-solid fa-magnifying-glass"> </i></div>
                    </Link>
                </div>
                <NavLink to="/" className={onClickActiveStatus}><i className="fas fa-home"/> Home</NavLink>
            </div>
        </div>
    );
}

export default CoinHeader;
