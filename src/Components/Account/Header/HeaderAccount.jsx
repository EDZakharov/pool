import React from 'react';
import style from './HeaderAccount.module.scss'
import { imgFilter} from "../../../Filters";
import {NavLink} from "react-router-dom";

const HeaderAccount = () => {
    let selectedCoin = localStorage.getItem('selectedCoin')
    let address = localStorage.getItem('address')

    return (
        <div className={style.headerPayments}>
            <NavLink to={'/'}><img src={imgFilter(selectedCoin)} alt='logo' className={style.siteLogo}/></NavLink>
            <NavLink to="/" ><span className={style.currentCoin}>{address}</span></NavLink>
        </div>
    );
};

export default HeaderAccount;
