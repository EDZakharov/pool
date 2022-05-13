import React, {useEffect, useState} from 'react';
import style from './AccountData.module.scss'
import Fetcher from "../Fetcher/Fetcher";
import {checkEnd, hashFilter, showDate} from "../../Filters";
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

        setTimeout(() => {
            props.fetchingAccount(false)
        }, 1000)
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
        if (pool === 'etc' || pool === 'etc-solo') {
            return 'etc'
        }
        if (pool === 'eth') {
            return 'eth'
        }
        if (pool === 'keva') {
            return 'keva'
        }
        if (pool === 'evox-prop' || pool === 'evox-solo') {
            return 'evox'
        }
        return 'Coin'
    }

    let checkToErr = () => {
        if (props.account.accountData.hr === 0) {
            return <Err404/>
        }
        return <Fetcher/>
    }

    let summPayments = () => {
        let summ = 0
        if (props.account.accountData.payments) {
            props.account.accountData.payments.payments.map(el => {
                summ = summ + el.amount
            })
        }
        return summ
    }

    let summHashrate = () => {
        let summ = 0
        if (props.account.accountData.workers) {
            props.account.accountData.workers.map(el => {
                summ = summ + el.hr
            })
        }
        return summ
    }
    console.log(props.account.accountData.workers)

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



    return (props.account.isFetching || !props.account.accountData.hr ? checkToErr() :
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
                            <div className={style.dropbtn}>Баланс</div>
                            {toggleBalance ? <div className={style.dropdown__content}>
                                <div className={style.dropText}>
                                    <div>Текущий
                                        баланс: {(props.account.accountData.balance / 1000000000).toFixed(3)} {poolChecker(pool)}
                                    </div>
                                </div>
                            </div> : ''}
                        </div>
                        <div className={style.dropDown} onClick={dropDownHashrateToggle}>
                            <div className={style.dropbtn}>Воркеры</div>
                            {toggleHashrate ? <div className={style.dropdown__content}>
                                <div className={style.dropText}>
                                    <div className={style.dropText__data}>
                                        <div className={style.totalHashrate}>Общий хэшрейт: {hashFilter(summHashrate()).hashrate} {hashFilter(summHashrate()).unit}</div>
                                        <div className={style.hashrate__grid}>
                                            <div className={style.hashrate__grid__worker}>
                                                Имя воркера
                                            </div>
                                            <div className={style.hashrate__grid__currentHashrate}>
                                                Хэшрейт
                                            </div>
                                            <div className={style.hashrate__grid__lastShare}>
                                                Последняя шара
                                            </div>
                                        </div>
                                        {props.account.accountData.workers.map(el => {
                                            let timestamp = new Date(el.lastBeat * 1000);
                                            let hours = timestamp.getHours()
                                            let minutes = '0' + timestamp.getMinutes()
                                            let seconds = '0' + timestamp.getSeconds()
                                            // let setEnd = timestamp.getSeconds().toString().slice(-1)
                                            return <div className={style.workers__data__grid} key={el.name}>
                                                <div className={style.workers__name}>{el.name}</div>
                                                <div className={style.workers__hashrate}>{hashFilter(el.hr).hashrate} {hashFilter(el.hr).unit}</div>
                                                <div className={style.workers__lastShare}>{`${hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)}`}</div>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            </div> : ''}
                        </div>
                        <div className={style.dropDown} onClick={dropDownPaymentsToggle}>
                            <div className={style.dropbtn}>Выплаты</div>
                            {togglePayments ? <div className={style.dropdown__content}>
                                <div className={style.dropText}>
                                    <div>Всего
                                        выплачено: {(summPayments() / 1000000000).toFixed(3)} {poolChecker(pool)}
                                    </div>
                                </div>
                            </div> : ''}
                        </div>
                        <div className={style.dropDown} onClick={dropDownRewardsToggle}>
                            <div className={style.dropbtn}>Награды</div>
                            {toggleRewards ? <div className={style.dropdown__content}>
                                <div className={style.dropText}>
                                    <div>Всего наград: {props.account.accountData.rewards.rewardsTotal} lorem1000</div>
                                </div>
                            </div> : ''}
                        </div>
                    </div>

                </div> : ''}
        </div>)
};

export default AccountData;