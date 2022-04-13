import React from "react";
import style from "./SelectedCoinHeader.module.scss"
import ethLogo from '../../../../img/eth.png'
import {Link} from "react-router-dom";
import etcLogo from "../../../../img/etc.png";
import burstLogo from "../../../../img/burst.png";
import kevaLogo from "../../../../img/keva-prop.png";
import evoxLogo from "../../../../img/evox-prop.png";
import ergoLogo from "../../../../img/ergo.png";

const SelectedCoinHeader = (props) => {


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



    return (
        <div className={style.headerEth}>
            <div className={style.eth_center}>
                <img className={style.logoCoin} src={imgFilter()}/>
                <span className={style.headerSpan}>{coinName()}</span>
                <div className={style.headerLinks}>
                    <Link to='/'>Главная</Link>
                    <Link to='/'>Платежи</Link>
                    <Link to='/'>Майнеры</Link>
                    <Link to='/'>Блоки</Link>
                </div>
            </div>
        </div>
    );
}


export default SelectedCoinHeader;
