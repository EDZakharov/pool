import React from "react";
import style from "./HeaderComponent.module.scss"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    let setNavStyleH = () => {if (props.header.home.style === 'active') {return style.navLinkH}};
    let addActiveStatusHome = () => {props.addActiveStatusH()};

    let setNavStyleB = () => {if (props.header.blocks.style === 'active') {return style.navLinkB}};
    let addActiveStatusBlocks = () => {props.addActiveStatusB()};

    let setNavStyleF = () => {if (props.header.forum.style === 'active') {return style.navLinkF}};
    let addActiveStatusForum = () => {props.addActiveStatusF()};

    let setNavStyleC = () => {if (props.header.chat.style === 'active') {return style.navLinkC}};
    let addActiveStatusChat = () => {props.addActiveStatusC()};

    let setNavStyleS = () => {if (props.header.shop.style === 'active') {return style.navLinkS}};
    let addActiveStatusShop = () => {props.addActiveStatusS()};

    return (
        <div className={style.header}>
            <img src='https://e4pool.com/public/img/logo_small.png' alt='logo' className={style.logo}/>
            <span>e4p1k0 - майнинг пулы</span>
            <div className={style.headerLinks}>
                <NavLink to="/" onClick={addActiveStatusHome} className={setNavStyleH()}><i className="fas fa-home"/> Главная</NavLink>
                <NavLink to="/blocks" onClick={addActiveStatusBlocks} className={setNavStyleB()}><i className="fas fa-cubes"/> Найденные блоки</NavLink>
                <NavLink to="/forum" onClick={addActiveStatusForum} className={setNavStyleF()}><i className="fas fa-cubes"/> Форум</NavLink>
                <NavLink to="/chat" onClick={addActiveStatusChat} className={setNavStyleC()}><i className="fas fa-cubes"/> Чат</NavLink>
                <NavLink to="/shop" onClick={addActiveStatusShop} className={setNavStyleS()}><i className="fas fa-cubes"/> Магазин</NavLink></div>
        </div>
    );
}

export default Header;
