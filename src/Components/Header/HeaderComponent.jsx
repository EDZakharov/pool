import React, {useState} from "react";
import style from "./HeaderComponent.module.scss"
import {NavLink} from "react-router-dom";
import {imgFilter} from "../../Filters";

const Header = () => {
    let onClickActiveStatus = ({ isActive }) => (isActive ? style.active : 'inactive');

    return (
        <div className={style.header}>
            <NavLink to="/" ><img src={imgFilter('logo')} className={style.logo}/></NavLink>
            <NavLink to="/" ><span>e4p1k0 pool</span></NavLink>
            <div className={style.headerLinks}>
                <NavLink to="/"  className={onClickActiveStatus}><i className="fas fa-home"/> Home</NavLink>
                <NavLink to="/blocks" className={onClickActiveStatus}><i className="fas fa-cubes"/> Found Blocks</NavLink>
                <NavLink to="/forum" className={onClickActiveStatus}><i className="fa-solid fa-rectangle-list"/> Forum</NavLink>
                <NavLink to="/chat" className={onClickActiveStatus}><i className="fa-solid fa-comments"/> Mining Chat</NavLink>
                <NavLink to="/shop" className={onClickActiveStatus}><i className="fa-solid fa-basket-shopping"/> Shop</NavLink></div>
        </div>
    );
}

export default Header;
