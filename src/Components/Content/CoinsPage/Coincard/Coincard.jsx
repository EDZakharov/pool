import React from "react";
import style from "./Coincard.module.scss"
import {NavLink} from "react-router-dom";
import {coinNamesFilter, hashFilter, imgFilter} from "../../../../Filters";


const CoinCard = (props) => {

    let adr = props.fullName.toString()
    let name = coinNamesFilter(props.fullName);
    let hashes = hashFilter(props.hashrate);
    let image = imgFilter(`${props.fullName}`);

    const onButtonLinkClick = () => {
        localStorage.setItem('selectedCoin', adr)
        props.isFetching(true)
        props.selectCoin(adr)
    }



    return (

        <div className={style.coinCard}>
            <div className={style.coinCard_header}>
                <div className={style.wrapper}>
                    <span>{name}</span>
                    <img src={image} alt='logo'
                         className={style.logo}/>
                </div>
            </div>
            <div className={style.coinCard_main}>
                <div><b>Хэшрейт пула:</b> <span className={style.text}>{hashes}</span></div>
                <div><b>Активные майнеры:</b> <span className={style.text}>{props.minersTotal}</span></div>
                <div><b>Удача:</b> <span className={style.text}>{props.difficulty}</span></div>
                <div><b>Найденных блоков:</b> <span className={style.text}>{props.maturedTotal}</span></div>
                <div><b>Тип:</b> <span className={style.text}>{props.poolType}</span></div>
                {/*<div><b>Найденных блоков:</b> <span className={style.text}>{props.maturedTotal}</span></div>*/}
            </div>
            <div className={style.coinCard_footer}>
                <NavLink className={style.link} onClick={onButtonLinkClick} to={`${adr}`}>
                    <div className={style.start_btn}>Show More</div>
                </NavLink>

            </div>
        </div>

    );
}

export default CoinCard;
