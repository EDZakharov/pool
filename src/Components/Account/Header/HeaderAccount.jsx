import React from 'react';
import style from './HeaderAccount.module.scss'
import { imgFilter} from "../../../Filters";
import {NavLink} from "react-router-dom";

const HeaderAccount = (props) => {
    let selectedCoin = localStorage.getItem('selectedCoin')
    let account = localStorage.getItem('account')

    return (
        <div className={style.headerPayments}>
            <NavLink to={'/'}><img src={imgFilter(selectedCoin)} alt='logo' className={style.siteLogo}/></NavLink>
            <NavLink to="/" ><span className={style.currentCoin}>{account}</span></NavLink>
        </div>
    );
};

export default HeaderAccount;
