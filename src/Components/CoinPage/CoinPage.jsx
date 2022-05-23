import React, {useEffect, useState} from 'react';
import style from './CoinPage.module.scss'
import Fetcher from "../Fetcher/Fetcher";
import {dateFilter, hashFilter, imgFilter, poolChecker} from "../../Filters";
import Charts from "../Charts/Charts";
import {Link} from "react-router-dom";
import PaginatedItems from "../Pagination";
import DropBtn from "../Account/DropBtn";
import DropData from "./DropData/DropData";
import Total from "../Account/Total";


export const CoinPage = (props) => {

    let thisPool = localStorage.getItem('selectedCoin')
    let coinLogo = imgFilter(localStorage.getItem('selectedCoin'))
    let luck = props.coinPage.fullStats.currentEffort * 100;

    let [checked, setChecked] = useState(false);

    useEffect(() => {

        let showRandomBackStyle = () => {
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

        localStorage.setItem('showRandomBackStyle', showRandomBackStyle())

        props.showFullStatsOnce()
        props.ShowMinersOnce(thisPool)
        props.ShowBlocksOnce(thisPool)
        let start = setInterval(() => {
            props.showFullStats()
            props.showBlocks(thisPool)
            props.showMiners(thisPool)
            props.fetching(false)
        }, 1500)

        return () => {
            clearInterval(start)
            props.dellFullStats()
            props.dellMinersData()
            props.dellBlocksData()
            navigator.clipboard.writeText('').catch(e => e)
            props.addAccountAddress('')
        }
    }, [])

    let showMiners = () => {
        setChecked(!checked)
    }

    let setAddr = (e) => {
        props.addAccountAddress(e.target.value)
    }

    let addrFilter = (coinName) => {
        if (props.coinPage.accountAddress === null) {
            return `/${coinName}`
        }
        return `/${coinName}/account/${props.coinPage.accountAddress}`
    }

    let [toggleStats, setToggleStats] = useState(true)
    let [toggleMiners, setToggleMiners] = useState(false)
    let [toggleBlocks, setToggleBlocks] = useState(false)

    let dropDownStatsToggle = () => {
        setToggleStats(true)
        setToggleMiners(false)
        setToggleBlocks(false)

    }
    let dropDownMinersToggle = () => {
        setToggleStats(false)
        setToggleMiners(true)
        setToggleBlocks(false)
    }

    let dropDownBlocksToggle = () => {
        setToggleStats(false)
        setToggleMiners(false)
        setToggleBlocks(true)
    }

    // if(props.coinPage.blocks !== undefined){
    //     if(Object.keys(props.coinPage.blocks).length !== 0){
    //         console.log(props.coinPage.blocks)
    //         console.log(props.coinPage.blocks.effort['20'])
    //     }
    //
    // }

    return (props.coinPage.isFetching ? <Fetcher/> : <div className={localStorage.getItem('showRandomBackStyle')}>
        <div className={style.coinData}>
            {props.coinPage.fullStats.charts && props.coinPage.fullStats.charts.length !== 0 ?
                <div className={style.graph}>
                    <div className={style.chartsGraph}>
                        <Charts charts={props.coinPage.fullStats.charts} text={`Общая мощность ${thisPool} пула`}/>
                    </div>
                </div> : <div className={style.graph}><span>Загрузка..</span></div>}
            {thisPool === 'evox-prop' || thisPool === 'evox-solo' || thisPool === 'keva' ?
                <div className={style.inputForm}/> : <div className={style.inputForm}>
                    <img src={coinLogo} alt='logo'/>
                    <input type='text' autoComplete='off' placeholder={`Адрес кошелька`}
                           onChange={setAddr}
                           value={props.coinPage.accountAddress !== null ? props.coinPage.accountAddress : ''}/>
                    <Link to={addrFilter(thisPool)}>
                        <div className={style.inputBtn}><i className="fa-solid fa-magnifying-glass"/></div>
                    </Link>
                </div>}

            <div className={style.dropContainer}>
                <div className={style.flexWrapper}>
                    <div className={style.buttonsWrapper}>
                        <div className={style.buttons}>
                            <div onClick={dropDownStatsToggle}><DropBtn status={toggleStats} text={'Статистика'}/></div>
                            <div onClick={dropDownMinersToggle}><DropBtn status={toggleMiners} text={'Майнеры'}/></div>
                            <div onClick={dropDownBlocksToggle}><DropBtn status={toggleBlocks} text={'Блоки'}/></div>
                            <div><DropBtn status={false} text={'Как подключиться'}/></div>
                        </div>
                    </div>
                    <DropData componentContent={<div className={style.dropDown}>
                        {toggleStats ? <div className={style.stats}>
                            <div className={style.currentEffort}>Текущая
                                удача: {isNaN(luck) ? 'not found' : `${luck.toFixed(0)} %`}</div>
                            <div className={style.fee}>Комиссия пула: {props.coinPage.fullStats.fee} %</div>
                            <div
                                className={style.hashrate}>Хэшрейт
                                пула: {hashFilter(props.coinPage.fullStats.hashrate).hashrate}{hashFilter(props.coinPage.fullStats.hashrate).unit}</div>
                            <div className={style.height}>Решаем блок: {props.coinPage.fullStats.height}</div>
                            <div className={style.lastBlockFound}>Последний
                                блок: {dateFilter(props.coinPage.fullStats.lastBlockFound)}</div>
                            <div className={style.minPayment}>Минимальный
                                вывод: {props.coinPage.fullStats.minPayment} {poolChecker(thisPool)}</div>
                            <div className={style.miners}>Майнеры: {props.coinPage.fullStats.miners}</div>
                            <div className={style.type}>Тип пула: {props.coinPage.fullStats.type}</div>
                            <div className={style.charts}>
                            </div>
                        </div> : ''}
                    </div>}/>
                    <DropData componentContent={<div className={style.dropDown}>
                        {toggleMiners ? <div className={style.totalHashrate} id='anchorBtn'>
                            {/*<Total text={`Общий хэшрейт: ${hashFilter(props.coinPage.fullStats.hashrate).hashrate}${hashFilter(props.coinPage.fullStats.hashrate).unit}`}/>*/}
                            <div className={style.coin_column_grid}>
                                <div className={style.wallet}>Кошелек</div>
                                <div className={style.hashrate}>Хэшрейт</div>
                                <div className={style.shares}>Последняя шара</div>
                                <div className={style.status}>Статус</div>
                            </div>
                            <div className={style.minersWrapper}>
                                <PaginatedItems itemsPerPage={15} items={props.coinPage.miners}
                                                type={'coinPage'} addInputValue={props.addInputValue}/>
                            </div>
                        </div> : ''}
                    </div>}/>
                    <DropData componentContent={<div className={style.dropDown}>
                        {toggleBlocks ? <div className={style.blocks} id='anchorBtn'>
                            <Total text={props.coinPage.blocks !== undefined ?
                                <div className={style.effort__grid}>
                                    <div className={style.effort}>Удача последних 20 блоков: {(props.coinPage.blocks.effort['20']*100).toFixed(0)} %</div>
                                    <div className={style.effort}>Удача последних 50 блоков: {(props.coinPage.blocks.effort['50']*100).toFixed(0)} %</div>
                                    <div className={style.effort}>Удача последних 200 блоков: {(props.coinPage.blocks.effort['200']*100).toFixed(0)} %</div>
                                </div>:''}
                            />
                            <div className={style.blocks_column_grid}>
                                <div className={style.height}>Высота</div>
                                <div className={style.uncle}>Uncle</div>
                                <div className={style.orphan}>Orphan</div>
                                <div className={style.hash}>Хэш блока</div>
                                <div className={style.timestamp}>Дата</div>
                            </div>
                            <div className={style.blocksWrapper}>
                                <PaginatedItems itemsPerPage={15} items={props.coinPage.blocks.matured}
                                                type={'blocks'} addInputValue={props.addInputValue} pool={thisPool}/>
                                {(thisPool === 'eth' || thisPool === 'eth-solo') ?
                                    <span className={style.liveViewer}><a href='http://www.ethviewer.live/'>EthLiveViewer</a></span>: ''}
                            </div>
                        </div> : ''}
                    </div>}/>
                </div>
            </div>
        </div>
    </div>);
};
