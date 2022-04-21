import React, {useEffect} from 'react';
import style from './HeaderPayments.module.scss'
import {coinNamesFilter, imgFilter} from "../../../Filters";
import {NavLink} from "react-router-dom";
import {selectedCoin} from "../../../GlobalVars";

const HeaderPayments = (props) => {

    useEffect(() => {
        props.addMinersPaymentsData(selectedCoin)
    },[])

    return (
        <div className={style.headerPayments}>
            <NavLink to={'/'}><img src={imgFilter(selectedCoin)} alt='logo' className={style.siteLogo}/></NavLink>
            <NavLink to="/" ><span className={style.currentCoin}>{coinNamesFilter(selectedCoin)}</span></NavLink>
            <div className={style.coin_header_Links}>
                <NavLink to={`/${selectedCoin}/payments`}><div className={style.inputBtn}><i className="fa-solid fa-magnifying-glass"> </i></div></NavLink>
                <input placeholder={`${selectedCoin} adress`}/>
            </div>
        </div>
    );
};

export default HeaderPayments;
