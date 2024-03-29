import React, {useEffect, useState} from 'react';
import style from './AccountData.module.scss'
import Fetcher from "../Fetcher/Fetcher";
import {dateFilter, hashFilter} from "../../Filters";
import Charts from "../Charts/Charts";
import InnerData from "./InnerData";
import HeaderData from "./HeaderData";
import Total from "./Total";
import DropBtn from "./DropBtn";
import PaginatedItems from "../Pagination";


const AccountData = (props) => {

    let pool = localStorage.getItem('pool')
    let account = localStorage.getItem('account')

    let [togglePayments, setTogglePayments] = useState(false)
    let [toggleHashrate, setToggleHashrate] = useState(true)
    let [toggleRewards, setToggleRewards] = useState(false)



    useEffect(() => {
        // console.log('1')
        let showRandomAccBGCStyle = () => {
            let x = Math.ceil(Math.random() * 10)
            if (x <= 3) {
                return style.coin
            }
            if (x <= 7) {
                return style.coin2
            }
            if (x <= 10) {
                return style.coin3
            }
        }

        localStorage.setItem('showRandomAccBGCStyle', showRandomAccBGCStyle())

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
        setToggleHashrate(false)
        setToggleRewards(false)
    }

    let dropDownHashrateToggle = () => {
        setTogglePayments(false)
        setToggleHashrate(true)
        setToggleRewards(false)
    }

    let dropDownRewardsToggle = () => {
        setTogglePayments(false)
        setToggleHashrate(false)
        setToggleRewards(true)
    }

    return (!props.account.accountData ? <Fetcher/> :
        <div className={`${style.account} ${localStorage.getItem('showRandomAccBGCStyle')}`}>
            {/*<div className={localStorage.getItem('showRandomAccBGCStyle')}/>*/}
            {props.account.accountData.workers.length !== 0 ?
                <div className={style.accountData}>
                    <div className={style.flexWrapper}>
                        <div className={style.dropDown} onClick={dropDownHashrateToggle}>
                            <DropBtn status={toggleHashrate} text={'Воркеры'}/>
                            {toggleHashrate ? <div className={style.dropdown__content}>
                                <div className={style.dropText}>
                                    <div className={style.dropText__data}>
                                        <div className={style.graph}>
                                            <div className={style.chartsGraph}>
                                                <Charts text={`Кошелек: ${localStorage.getItem('account')}`}
                                                        charts={props.account.accountData.charts}/>
                                            </div>
                                        </div>
                                        <Total text={<div className={style.pads}>
                                            <div className={style.notify}>
                                                <a href='https://t.me/e4_eth_status_bot'>
                                                    <i className="fa-brands fa-telegram">
                                                        <span> Notify Bot</span>
                                                    </i>
                                                </a>
                                            </div>
                                            <div>{`Воркеров онлайн: ${props.account.accountData.workers.length}`}</div>
                                            <div>{`Хэшрейт: ${hashFilter(summHashrate()).hashrate} ${hashFilter(summHashrate()).unit}`}</div>
                                            <div>{`Текущий баланс: ${props.account.accountData.prettyBalance}`}</div>
                                        </div>}/>
                                        <HeaderData
                                            el1={'Имя воркера'}
                                            el2={'Хэшрейт'}
                                            el3={'Последняя шара'}
                                            type={'workers'}
                                        />
                                        {props.account.accountData.workers.length <= 7 ? props.account.accountData.workers.map(el => {
                                            return <InnerData
                                                key={el.name}
                                                el1={el.name}
                                                el2={hashFilter(el.hr).hashrate + ' ' + hashFilter(el.hr).unit}
                                                el3={`${dateFilter(el.lastBeat)}`}
                                                type={'workers'}
                                            />
                                        }):<PaginatedItems itemsPerPage={15} items={props.account.accountData.workers} type={'workers'} pool={pool}/>}

                                    </div>
                                </div>
                            </div> : ''}
                        </div>
                        <div className={style.dropDown} onClick={dropDownPaymentsToggle}>
                            <DropBtn status={togglePayments} text={'Выплаты'}/>
                            {togglePayments ? <div className={style.dropdown__content}>
                                <div className={style.dropText}>
                                    <div className={style.dropText__data}>
                                        <Total text={<div><div>{`Всего выплачено: ${(summPayments() / 1000000000).toFixed(3)} ${pool.toUpperCase()}`}</div></div>}/>
                                        <HeaderData
                                            el1={'Cумма'}
                                            el2={'Номер транзакции'}
                                            el3={'Дата'}
                                            type={'payments'}
                                        />
                                        <PaginatedItems itemsPerPage={15} items={props.account.accountData.payments.payments} type={'payments'} pool={pool}/>
                                    </div>
                                </div>
                            </div> : ''}
                        </div>
                        <div className={style.dropDown} onClick={dropDownRewardsToggle}>

                            <DropBtn status={toggleRewards} text={'Награды'}/>

                            {toggleRewards ? <div className={style.dropdown__content}>
                                <div className={style.dropText}>
                                    <div className={style.dropText__data}>
                                        <Total text={<div><div>{`Всего наград: ${props.account.accountData.rewards.rewards.length}`}</div></div>}/>
                                        <HeaderData
                                            el1={'Cумма'}
                                            el2={'Дата'}
                                            el3={'Хэш'}
                                            el4={'Высота блока'}
                                            type={'rewards'}
                                        />
                                        <PaginatedItems itemsPerPage={15} items={props.account.accountData.rewards.rewards} type={'rewards'} pool={pool}/>
                                    </div>
                                </div>
                            </div> : ''}
                        </div>
                    </div>

                </div> : ''}
        </div>)
};

export default AccountData;

