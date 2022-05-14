import React from "react";
import style from "./FooterComponent.module.scss"

const Footer = () => {
    return (
        <div className={style.footer}>
            <a href='https://t.me/E4piko'><i className="fab fa-telegram-plane"></i> Поддержка @E4p1k0</a>
            <a href='https://github.com/e4p1k0'><i className="fab fa-github"></i> GitHub E4p1k0</a>
            <a href='https://github.com/EDZakharov'><i className="fab fa-github"></i> GitHub EDZakharov</a>
        </div>
    );
}

export default Footer;
