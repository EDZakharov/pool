import React from "react";
import style from "./Coincard.module.scss"
import {NavLink} from "react-router-dom";
import {coinNamesFilter, dateFilter, hashFilter, imgFilter} from "../../../../Filters";


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

    console.log(props.content.coins)
    return (

        <div className={style.coinCard}>
            <div className={style.coinCard_header}>
                <div className={style.wrapper}>
                    <span className={style.poolName}>{name}<span className={style.poolType}>{props.poolType}</span></span>

                    <img src={image} alt='logo'
                         className={style.logo}/>
                </div>
            </div>
            <div className={style.coinCard_main}>
                <div>Хэшрейт пула: <span className={style.text}>{!hashes? '' : hashes.hashrate} {!hashes? '' : hashes.unit}</span></div>
                <div>Майнеры: <span className={style.text}>{props.minersTotal}</span></div>
                <div>Комиссия пула: <span className={style.text}>{props.fee} %</span></div>
                <div>Последний блок: <span className={style.text}>{dateFilter(props.lastBlockFound)}</span></div>
            </div>
            <div className={style.coinCard_footer}>
                <NavLink className={style.link} onClick={onButtonLinkClick} to={`${adr}`}>
                    <div className={style.start_btn}>Перейти на пул</div>
                </NavLink>

            </div>
        </div>

    );
}

export default CoinCard;
