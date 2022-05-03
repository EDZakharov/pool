import React, {useEffect, useState} from "react";
import style from "./CoinHeader.module.scss"
import {Link, NavLink} from "react-router-dom";
import {coinNamesFilter, imgFilter} from "../../Filters";
import {selectedCoin} from "../../GlobalVars";

const CoinHeader = (props) => {
    let onClickActiveStatus = ({isActive}) => (isActive ? style.active : 'inactive');

    let CoinName = localStorage.getItem('selectedCoin')
    let coinLogo = imgFilter(localStorage.getItem('selectedCoin'))


    let addrFilter = () => {
        let x = props.account.accountAddress
        if (x === null){
            return `/${CoinName}`
        } else {
            return `/${CoinName}/account/${x}`
        }
    }

    useEffect(()=>{
        return () => {
            props.addAccountAddress(null)
        }
    },[])


    let setAddr = (e) => {
        if (e.target.value !== '') {
            props.addAccountAddress(e.target.value)
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
                    <Link to={addrFilter()}>
                        <div className={style.inputBtn}><i className="fa-solid fa-magnifying-glass"> </i></div>
                    </Link>
                </div>
                <NavLink to="/" className={onClickActiveStatus}><i className="fas fa-home"/> Home</NavLink>
            </div>
        </div>
    );
}

export default CoinHeader;
