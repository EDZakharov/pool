import React, {useEffect, useState} from 'react';
import style from './AccountData.module.scss'
import Fetcher from "../Fetcher/Fetcher";
import {convertTimestamp, getLastBeat, hashFilter} from "../../Filters";
import Charts from "../Charts/Charts";
import Err404 from "../404/404";
import InnerData from "./InnerData";
import HeaderData from "./HeaderData";
import Total from "./Total";
import DropBtn from "./DropBtn";

let count = 0
const AccountData = (props) => {
    let pool = localStorage.getItem('selectedCoin')
    let account = localStorage.getItem('account')

    let [togglePayments, setTogglePayments] = useState(false)
    let [toggleHashrate, setToggleHashrate] = useState(false)
    let [toggleBalance, setToggleBalance] = useState(true)
    let [toggleRewards, setToggleRewards] = useState(false)


    useEffect(() => {

        setTimeout(() => {
            props.fetchingAccount(false)
        }, 1000)
        props.showAccountDataOnce(pool, account)
        let interval = setInterval(() => {
            props.showAccountData(pool)
        }, 1500)
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

    // console.log(props.account.accountData.payments)

    let txChecker = (tx) => {
        if(pool === 'eth'){
            return `https://etherscan.io//tx/${tx}`
        }
        if(pool === 'eth-solo'){
            return `https://etherscan.io//tx/${tx}`
        }
        if(pool === 'etc'){
            return `https://etc.tokenview.com/en/tx/${tx}`
        }
        if(pool === 'etc-solo'){
            return `https://etc.tokenview.com/en/tx/${tx}`
        }
        else {
            return '#'
        }
    }
    let blockHashChecker = (blochHash) => {
        if(pool === 'eth'){
            return `https://etherscan.io/block/${blochHash}`
        }
        if(pool === 'eth-solo'){
            return `https://etherscan.io/block/${blochHash}`
        }
        if(pool === 'etc'){
            return `https://etc.tokenview.com/en/block/${blochHash}`
        }
        if(pool === 'etc-solo'){
            return `https://etc.tokenview.com/en/block/${blochHash}`
        }
        else {
            return '#'
        }
    }

    console.log(props.account.accountData)


    return (props.account.isFetching || !props.account.accountData.hr ? checkToErr() :
        <div className={style.account}>
            <div className={style.graph}>
                <div className={style.chartsGraph}>
                    <Charts text={`Кошелек: ${localStorage.getItem('account')}`}
                            charts={props.account.accountData.charts}/>
                </div>
            </div>
            {props.account.accountData.workers.length !== 0 ?
                <div className={style.accountData}>
                    <div className={style.flexWrapper}>
                        <div className={style.dropDown} onClick={dropDownBalanceToggle}>
                            <DropBtn status={toggleBalance} text={'Баланс'}/>
                            {toggleBalance ? <div className={style.dropdown__content}>
                                <div className={style.dropText}>
                                    <div className={style.dropText__data}>
                                        <Total
                                            text={`Текущий баланс: ${(props.account.accountData.balance / 1000000000).toFixed(3)} ${poolChecker(pool)}`}/>
                                    </div>
                                </div>
                            </div> : ''}
                        </div>
                        <div className={style.dropDown} onClick={dropDownHashrateToggle}>
                            <DropBtn status={toggleHashrate} text={'Воркеры'}/>
                            {toggleHashrate ? <div className={style.dropdown__content}>
                                <div className={style.dropText}>
                                    <div className={style.dropText__data}>
                                        <Total
                                            text={`Воркеров: ${props.account.accountData.workers.length} | Хэшрейт: ${hashFilter(summHashrate()).hashrate} ${hashFilter(summHashrate()).unit}`}/>
                                        <HeaderData
                                            el1={'Имя воркера'}
                                            el2={'Хэшрейт'}
                                            el3={'Последняя шара'}
                                            type={'workers'}
                                        />
                                        {props.account.accountData.workers.map(el => {
                                            // let timestamp = new Date(el.lastBeat * 1000);
                                            // let setEnd = timestamp.getSeconds().toString().slice(-1)


                                            return <InnerData
                                                key={el.name}
                                                el1={el.name}
                                                el2={hashFilter(el.hr).hashrate + ' ' + hashFilter(el.hr).unit}
                                                // el3={`${timestamp.getSeconds()} секун${checkEnd(setEnd)} назад`}
                                                el3={`${getLastBeat(el.lastBeat)}`}
                                                type={'workers'}
                                            />

                                        })}
                                    </div>
                                </div>
                            </div> : ''}
                        </div>

                        <div className={style.dropDown} onClick={dropDownPaymentsToggle}>
                            <DropBtn status={togglePayments} text={'Выплаты'}/>
                            {togglePayments ? <div className={style.dropdown__content}>
                                <div className={style.dropText}>
                                    <div className={style.dropText__data}>
                                        <Total text={`Всего выплачено: ${(summPayments() / 1000000000).toFixed(3)} ${poolChecker(pool)}`}/>
                                        <HeaderData
                                            el1={'Cумма'}
                                            el2={'Номер транзакции'}
                                            el3={'Дата'}
                                            type={'payments'}
                                        />
                                        {props.account.accountData.payments.payments ? props.account.accountData.payments.payments.map(el => {
                                            return <InnerData
                                                key={el.tx}
                                                el1={(el.amount / 1000000000).toFixed(3) + ' ' + poolChecker(pool)}
                                                el2={<a onClick={event => event.stopPropagation()} href={txChecker(el.tx)}>{el.tx}</a>}
                                                el3={convertTimestamp(el.timestamp)}
                                                type={'payments'}
                                            />
                                        }) : ''}
                                    </div>
                                </div>
                            </div> : ''}
                        </div>
                        <div className={style.dropDown} onClick={dropDownRewardsToggle}>
                            <DropBtn status={toggleRewards} text={'Награды'}/>
                            {toggleRewards ? <div className={style.dropdown__content}>
                                <div className={style.dropText}>
                                    <div className={style.dropText__data}>
                                        <Total text={`Всего наград: ${props.account.accountData.rewards.rewards.length}`}/>
                                        <HeaderData
                                            el1={'Cумма'}
                                            el2={'Дата'}
                                            el3={'Хэш'}
                                            el4={'Высота блока'}
                                            type={'rewards'}
                                        />
                                        {props.account.accountData.rewards.rewards ? props.account.accountData.rewards.rewards.map(el => {
                                            return <InnerData


                                                key={el.blockHash}
                                                el1={(el.amount / 1000000000).toFixed(3) + ' ' + poolChecker(pool)}
                                                el2={convertTimestamp(el.timestamp)}
                                                el3={<a onClick={event => event.stopPropagation()} href={blockHashChecker(el.blockHash)}>{el.blockHash}</a>}
                                                el4={el.blockHeight}
                                                type={'rewards'}
                                            />
                                        }) : ''}
                                    </div>
                                </div>
                            </div> : ''}
                        </div>
                    </div>

                </div> : ''}
        </div>)
};

export default AccountData;