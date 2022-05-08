import React from 'react';
import './Burger.css'
import {Link} from "react-router-dom";

const BurgerMenu = ({items, active, setActive}) => {
    return (
        <div className={active ? 'menu active' : 'menu'} >
            <div className='menu__content' >
                <div className='blur'>
                    <ul>{items ? items.map(item =>
                        <li key={item.text} className='list__item'>
                            <Link to={item.href} className='list__item__link' onClick={() => setActive(false)}>{item.icon} {item.text}</Link>
                        </li>
                    ) : ''}</ul>
                </div>
            </div>
        </div>

    );
};

export default BurgerMenu;