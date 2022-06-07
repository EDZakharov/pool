import React, {useState} from "react";
import style from "./CoinHeader.module.scss"
import {Link, NavLink} from "react-router-dom";
import siteLogo from '../../assets/logo56.png'
import {selectedCoin} from "../../GlobalVars";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const CoinHeader = () => {
    let CoinName = localStorage.getItem('selectedCoin')

    let onClickActiveStatus = ({isActive}) => (isActive ? style.active : 'inactive');
    let addMenuList = [
        {href: '/', icon: <i className="fas fa-home"/>, text: 'Главная'},
        {href: 'https://forum.e4pool.com/', icon: <i className="fa-solid fa-rectangle-list"/>, text: 'Форум'},
        {href: 'https://t.me/e4pool_howto', icon: <i className="fab fa-telegram-plane"/>, text: 'Поддержка'},
        {href: '/e4pizor', icon: <i className="fa-solid fa-basket-shopping"/>, text: 'E4pizor'},
    ]
    let [menuActive, setMenuActive] = useState(false)

    return (
        <div className={style.coin_header}>
            <div className={style.coin_logo_C}>
                <Link to={'/'}><img src={siteLogo} alt='logo' className={style.siteLog_C}/></Link>

            </div>
            <div className={style.currentCoin}>
                <Link to="/"><span >{CoinName.toUpperCase()}</span></Link>
            </div>
            <div className={style.coin_header_Links}>
                {addMenuList ? addMenuList.map(item => {

                    if(item.href === 'https://t.me/e4pool_howto'){
                        return  <a key={item.text} href={item.href}>{item.icon} {item.text}</a>
                    }

                    if (item.href === 'https://forum.e4pool.com/') {
                        return <a key={item.text} href={item.href}>{item.icon} {item.text}</a>
                    } else {
                        return <NavLink key={item.text} to={item.href}
                                        className={onClickActiveStatus}>{item.icon} {item.text}</NavLink>
                    }

                }) : ''}
            </div>
            <div className={style.burger_show} onClick={() => setMenuActive(!menuActive)}>
                <nav>
                    <div className={style.burger}>
                        <span/>
                    </div>
                </nav>
            </div>
            <BurgerMenu items={addMenuList} active={menuActive} setActive={setMenuActive}/>
        </div>
    );
}

export default CoinHeader;
