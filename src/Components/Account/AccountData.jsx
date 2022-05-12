import React, {useEffect, useState} from 'react';
import style from './AccountData.module.scss'
import Fetcher from "../Fetcher/Fetcher";
import {hashFilter, showDate} from "../../Filters";
import Charts from "../Charts/Charts";
import Err404 from "../404/404";

let count = 0
const AccountData = (props) => {
    let pool = localStorage.getItem('selectedCoin')
    let account = localStorage.getItem('account')

    let [togglePayments, setTogglePayments] = useState(false)
    let [toggleHashrate, setToggleHashrate] = useState(false)
    let [toggleBalance, setToggleBalance] = useState(false)
    let [toggleRewards, setToggleRewards] = useState(false)


    useEffect(() => {
        setTimeout(()=>{
            props.fetchingAccount(false)
        },1000)
        props.showAccountDataOnce(pool, account)
        let interval = setInterval(() => {
            props.showAccountData(pool)
        }, 1000)
        return () => {
            count = 0
            clearInterval(interval)
            props.fetchingAccount(true)
            props.dellAccountData()
        }
    }, [])

    let poolChecker = (pool) => {
        if (pool === 'etc' || pool === 'etc-solo'){
            return 'etc'
        }
        if (pool === 'eth'){
            return 'eth'
        }
        if (pool === 'keva'){
            return 'keva'
        }
        if (pool === 'evox-prop' || pool === 'evox-solo'){
            return 'evox'
        }
        return 'Coin'
    }

    let checkToErr = () => {
        if (props.account.accountData.hr === 0){
                return <Err404/>
        }
            return <Fetcher/>
    }

    let summPayments = () => {
        let summ = 0
        if(props.account.accountData.payments){
            props.account.accountData.payments.payments.map(el => {
                summ = summ + el.amount
            })
        }
        return summ
    }

    let dropDownPaymentsToggle = () => {
        setTogglePayments(!togglePayments)
        setToggleBalance(false)
        setToggleHashrate(false)
        setToggleRewards(false)
    }

    let dropDownHashrateToggle = () => {
        setTogglePayments(false)
        setToggleHashrate(!toggleHashrate)
        setToggleBalance(false)
        setToggleRewards(false)
    }

    let dropDownBalanceToggle = () => {
        setTogglePayments(false)
        setToggleHashrate(false)
        setToggleBalance(!toggleBalance)
        setToggleRewards(false)
    }
    let dropDownRewardsToggle = () => {
        setTogglePayments(false)
        setToggleHashrate(false)
        setToggleBalance(false)
        setToggleRewards(!toggleRewards)
    }


    console.log(props.account.accountData)

    return (props.account.isFetching || !props.account.accountData.hr ?  checkToErr() :
        <div className={style.account}>
            <div className={style.graph}>
                <div className={style.chartsGraph}>
                    <Charts text={`Account: ${localStorage.getItem('account')}`}
                            charts={props.account.accountData.charts}/>
                </div>
            </div>
            {props.account.accountData.workers.length !== 0 ?
                <div className={style.accountData}>
                    <div className={style.flexWrapper}>
                        <div className={style.dropDown} onClick={dropDownBalanceToggle}>
                            <div  className={style.dropbtn}>Баланс</div>
                            {toggleBalance ? <div className={style.dropdown__content}>
                                <span>Текущий баланс: {(props.account.accountData.balance/1000000000).toFixed(3)} {poolChecker(pool)}</span>
                            </div> : ''}
                        </div>
                        <div className={style.dropDown} onClick={dropDownHashrateToggle}>
                            <div  className={style.dropbtn}>Воркеры</div>
                            {toggleHashrate ? <div className={style.dropdown__content}>
                                <span>Хэшрейт: {props.account.accountData.workers[0].name} {hashFilter(props.account.accountData.hr).hashrate}{hashFilter(props.account.accountData.hr).unit}</span>
                            </div> : ''}
                        </div>
                        <div className={style.dropDown} onClick={dropDownPaymentsToggle}>
                            <div  className={style.dropbtn}>Выплаты</div>
                            {togglePayments ? <div className={style.dropdown__content}>
                                <span>Всего выплачено: {(summPayments()/1000000000).toFixed(3)} {poolChecker(pool)} </span>
                            </div> : ''}
                        </div>
                        <div className={style.dropDown} onClick={dropDownRewardsToggle}>
                            <div  className={style.dropbtn}>Награды</div>
                            {toggleRewards ? <div className={style.dropdown__content}>
                                <div>Всего наград: {props.account.accountData.rewards.rewardsTotal} lorem1000</div>
                            </div> : ''}
                        </div>
                    </div>

                </div> : ''}
        </div>)
};

export default AccountData;