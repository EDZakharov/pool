import React, {useEffect} from 'react';
import style from './AccountData.module.scss'
import Fetcher from "../Fetcher/Fetcher";
import {hashFilter, showDate} from "../../Filters";
import Charts from "../Charts/Charts";


let count = 0

const AccountData = (props) => {

    useEffect(() => {
        let pool = localStorage.getItem('selectedCoin')
        let account = localStorage.getItem('account')
        props.showAccountDataOnce(pool,account)
        let interval = setInterval(() => {
            props.showAccountData(pool)
        }, 500)
        return () => {
            count = 0
            clearInterval(interval)
            props.dellAccountData()
        }
    }, [])


    let countChecker = () => {
        if(props.account.isAccountData === false){
            return count++
        }
    }
    countChecker()

    let divReturner = () => {
        if(count >= 4){
            return <div className={style.payments}>Страница не найдена</div>
        }
        if(count < 4){
            return <Fetcher
        }
    }

    let pageNotFound = divReturner()

    // console.log(props.account.accountData.charts)
    return (props.account.isAccountData ?
        <div className={style.payments}>
            <div className={style.graph}>
                <div className={style.chartsGraph}><Charts account={localStorage.getItem('account')}
                             charts={props.account.accountData.charts}/></div>

            </div>
            <div className={style.menu}>
                <div>Unpaid balance: {props.account.accountData.balance}</div>
                <div>Hashrate: {hashFilter(props.account.accountData.hr)}</div>
                <div>LastBeat: {showDate(props.account.accountData.lastBeat)}</div>



            </div>
        </div> : pageNotFound)
};

export default AccountData;