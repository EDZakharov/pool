import React from "react";
import style from "./CoinHeader.module.scss"
import {NavLink} from "react-router-dom";
import {coinNamesFilter, imgFilter} from "../../Filters";

const CoinHeader = () => {
    let onClickActiveStatus = ({ isActive }) => (isActive ? style.active : 'inactive');

    let CoinName = window.location.pathname
    let coinLogo = imgFilter(window.location.pathname)

    return (
        <div className={style.coin_header}>
            <NavLink to={'/'}><img src={imgFilter('logo')} alt='logo' className={style.siteLogo}/></NavLink>
            <NavLink to="/" ><span>e4p1k0 pool</span></NavLink>
            <span className={style.currentCoin}>{coinNamesFilter(CoinName)}</span>
            <NavLink to={'/'}><img src={coinLogo} alt='logo' className={style.coin_logo}/></NavLink>
            <div className={style.coin_header_Links}>
                <NavLink to="/"  className={onClickActiveStatus}><i className="fas fa-home"/> Home</NavLink>
                <NavLink to={`${CoinName}/stats`} className={onClickActiveStatus}><i className="fas fa-cubes"/> Stats</NavLink>
                {/*<NavLink to="/forum" className={onClickActiveStatus}><i className="fa-solid fa-rectangle-list"/> Forum</NavLink>*/}
                {/*<NavLink to="/chat" className={onClickActiveStatus}><i className="fa-solid fa-comments"/> Mining Chat</NavLink>*/}
                {/*<NavLink to="/shop" className={onClickActiveStatus}><i className="fa-solid fa-basket-shopping"/> Shop</NavLink>*/}
            </div>
        </div>
    );
}

export default CoinHeader;
