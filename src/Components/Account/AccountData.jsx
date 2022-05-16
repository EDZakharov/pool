import React, {useEffect, useState} from 'react';
import style from './AccountData.module.scss'
import Fetcher from "../Fetcher/Fetcher";
import {convertTimestamp, getLastBeat, hashFilter, poolChecker} from "../../Filters";
import Charts from "../Charts/Charts";
import Err404 from "../404/404";
import InnerData from "./InnerData";
import HeaderData from "./HeaderData";
import Total from "./Total";
import DropBtn from "./DropBtn";
import PaginatedItems from "../Pagination";

const AccountData = (props) => {
    let pool = localStorage.getItem('selectedCoin')
    let account = localStorage.getItem('account')

    let [togglePayments, setTogglePayments] = useState(false)
    let [toggleHashrate, setToggleHashrate] = useState(false)
    let [toggleBalance, setToggleBalance] = useState(true)
    let [toggleRewards, setToggleRewards] = useState(false)

    useEffect(() => {
        props.showAccountDataOnce(pool, account)
        let interval = setInterval(() => {
            props.showAccountData()
        }, 1000)
        return () => {
            clearInterval(interval)
            props.clearCash()
            props.dellAccountData()

        }
    }, [])


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
        setTogglePayments(true)
        setToggleBalance(false)
        setToggleHashrate(false)
        setToggleRewards(false)
    }

    let dropDownHashrateToggle = () => {
        setTogglePayments(false)
        setToggleHashrate(true)
        setToggleBalance(false)
        setToggleRewards(false)
    }

    let dropDownBalanceToggle = () => {
        setTogglePayments(false)
        setToggleHashrate(false)
        setToggleBalance(true)
        setToggleRewards(false)
    }
    let dropDownRewardsToggle = () => {
        setTogglePayments(false)
        setToggleHashrate(false)
        setToggleBalance(false)
        setToggleRewards(true)
    }


    return (!props.account.accountData ? <Fetcher/> :
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
                                        <PaginatedItems itemsPerPage={7} items={props.account.accountData.workers} type={'workers'}/>
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
                                        <PaginatedItems itemsPerPage={7} items={props.account.accountData.payments.payments} type={'payments'}/>
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
                                        <PaginatedItems itemsPerPage={7} items={props.account.accountData.rewards.rewards} type={'rewards'}/>

                                    </div>
                                </div>
                            </div> : ''}
                        </div>
                    </div>

                </div> : ''}
        </div>)
};

export default AccountData;

