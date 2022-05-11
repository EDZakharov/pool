import React, {useState} from "react";
import style from "./HeaderComponent.module.scss"
import {NavLink, Link} from "react-router-dom";
import {imgFilter} from "../../Filters";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {

    let onClickActiveStatus = ({isActive}) => (isActive ? style.active : 'inactive');


    let [menuActive, setMenuActive] = useState(false)

    let menuList = [
        {href: '/', icon: <i className="fas fa-home"/>, text: 'Главная'},
        {href: 'https://forum.e4pool.com/', icon: <i className="fa-solid fa-rectangle-list"/>, text: 'Форум'},
        {href: 'https://t.me/e4pool_howto', icon: <i className="fab fa-telegram-plane"/>, text: 'Поддержка'},
        {href: '/e4pizor', icon: <i className="fa-solid fa-basket-shopping"/>, text: 'E4pizor'},
    ]


    return (
        <div className={style.header}>
            <div className={style.logo__wrapper}>
                <Link to="/"><img src={imgFilter('logo')} className={style.logo} alt='#'/></Link>
                <Link to="/"><span>e4p1k0 mining pools</span></Link>
            </div>
            <div className={style.headerLinks}>
                {menuList ? menuList.map(item => {

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
            <BurgerMenu items={menuList} active={menuActive} setActive={setMenuActive}/>
        </div>
    );
}

export default Header;
