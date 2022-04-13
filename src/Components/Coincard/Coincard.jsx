import React from "react";
import style from "./Coincard.module.scss"
import {NavLink} from "react-router-dom";
import ethLogo from '../../img/eth.png'
import etcLogo from '../../img/etc.png'
import burstLogo from '../../img/burst.png'
import evoxLogo from '../../img/evox-prop.png'
import ergoLogo from '../../img/ergo.png'
import kevaLogo from '../../img/keva-prop.png'
import {hashFilter} from "../../hashFilter";

const CoinCard = (props) => {

    let adr = props.fullName.toString()

    let coinName = () => {
        switch (props.fullName) {
            case 'eth':
                return 'Etherium'
            case 'etc':
                return 'Etherium Classic'
            case 'etc-solo':
                return 'Etc-solo'
            case 'burst':
                return 'Burst'
            case 'keva-prop':
                return 'keva-prop'
            case 'evox-solo':
                return 'evox-solo'
            case 'evox-prop':
                return 'evox-prop'
            case 'ergo':
                return 'Ergo'
        }
    }

    let imgFilter = () => {
        switch (props.fullName) {
            case 'eth':
                return ethLogo
            case 'etc':
                return etcLogo
            case 'etc-solo':
                return etcLogo
            case 'burst':
                return burstLogo
            case 'keva-prop':
                return kevaLogo
            case 'evox-solo':
                return evoxLogo
            case 'evox-prop':
                return evoxLogo
            case 'ergo':
                return ergoLogo
        }
    }


    const onButtonLinkClick = () => {
        props.addStatusAC(props.fullName)
    }


    return (
        <div className={style.wrapper}>
            <div className={style.coinCard}>
                <div className={style.coinCard_header}>
                    <span>{coinName()}</span>
                    <div className={style.wrapper}>
                        <img src={imgFilter()} alt='logo'
                             className={style.ETH_logo}/>
                    </div>
                </div>
                <div className={style.coinCard_main}>
                    <div><b>Хэшрейт пула:</b> <span className={style.text}>{hashFilter(props)}</span></div>
                    <div><b>Активные майнеры:</b> <span className={style.text}>{props.minersTotal}</span></div>
                    <div><b>Удача:</b> <span className={style.text}>{props.difficulty}</span></div>
                    <div><b>Найденных блоков:</b> <span className={style.text}>{props.maturedTotal}</span></div>
                    <div><b>Тип:</b> <span className={style.text}>{props.poolType}</span></div>
                    {/*<div><b>Найденных блоков:</b> <span className={style.text}>{props.maturedTotal}</span></div>*/}
                </div>
                <div className={style.coinCard_footer}>
                    <div className={style.start_btn} >
                        <NavLink className={style.link} onClick={onButtonLinkClick} to={`/coins/${adr}`}>Start Mining</NavLink>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CoinCard;
