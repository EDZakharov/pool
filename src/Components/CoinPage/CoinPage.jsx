import React, {useEffect, useState} from 'react';
import style from './CoinPage.module.scss'
import Fetcher from "../Fetcher/Fetcher";
import {dateFilter, hashFilter, imgFilter} from "../../Filters";
import DropBtn from "../Account/DropBtn";
import DropData from "./DropData/DropData";
import Stats from "./Stats/Stats";
import Miners from "./Miners/Miners";
import Blocks from "./Blocks/Blocks";
import Slider from "../Slider/Slider";
import addPoolImg from '../../assets/addPool.jpg'
import addWallet from '../../assets/addWallet.jpg'
import osPoolConnect from '../../assets/osDog.jpg'

let RaveOsImg = [
    {id: 1, src: addPoolImg},
    {id: 2, src: addWallet},
]
let OsDogImg = [
    {id: 1, src: osPoolConnect},
]

export const CoinPage = (props) => {
    let thisPool = localStorage.getItem('selectedCoin')
    let coinLogo = imgFilter(thisPool)
    let luck = props.coinPage.fullStats? props.coinPage.fullStats.currentEffort * 100 : 0

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
        props.showFullStatsOnce(thisPool)
        let start = setInterval(()=>{
            props.showFullStats()
        },1000)
        return () => {
            clearInterval(start)
            props.clearCashP()
            props.fetching(true)
        }
    }, [])

    let [toggleStats, setToggleStats] = useState(true)
    let [toggleMiners, setToggleMiners] = useState(false)
    let [toggleBlocks, setToggleBlocks] = useState(false)
    let [toggleHow, setToggleHow] = useState(false)

    let dropDownStatsToggle = () => {
        setToggleStats(true)
        setToggleMiners(false)
        setToggleBlocks(false)
        setToggleHow(false)
    }
    let dropDownMinersToggle = () => {
        setToggleStats(false)
        setToggleMiners(true)
        setToggleBlocks(false)
        setToggleHow(false)
    }

    let dropDownBlocksToggle = () => {
        setToggleStats(false)
        setToggleMiners(false)
        setToggleBlocks(true)
        setToggleHow(false)

    }
    let dropDownHowToggle = () => {
        setToggleStats(false)
        setToggleMiners(false)
        setToggleBlocks(false)
        setToggleHow(true)
    }

    return (!props.coinPage.fullStats ? <Fetcher/> : <div className={localStorage.getItem('showRandomBackStyle')}>
        <div className={style.coinData}>
            <div className={style.dropContainer}>
                <div className={style.flexWrapper}>
                    <div className={style.buttonsWrapper}>
                        <div className={style.buttons}>
                            <div onClick={dropDownStatsToggle}><DropBtn status={toggleStats} text={'Статистика'}/></div>
                            <div onClick={dropDownMinersToggle}><DropBtn status={toggleMiners} text={'Майнеры'}/></div>
                            <div onClick={dropDownBlocksToggle}><DropBtn status={toggleBlocks} text={'Блоки'}/></div>
                            <div onClick={dropDownHowToggle}><DropBtn status={toggleHow} text={'Как подключиться'}/>
                            </div>
                        </div>
                    </div>
                    <DropData componentContent={<div className={style.dropDown}>
                        {toggleStats ? <div>
                                <Stats fee={props.coinPage.fullStats.fee}
                                       luck={luck}
                                       hashrate={hashFilter(props.coinPage.fullStats.hashrate).hashrate}
                                       unit={hashFilter(props.coinPage.fullStats.hashrate).unit}
                                       height={props.coinPage.fullStats.height}
                                       lastBlockFound={dateFilter(props.coinPage.fullStats.lastBlockFound)}
                                       minPayment={props.coinPage.fullStats.minPayment}
                                       thisPool={thisPool}
                                       text={props.coinPage.fullStats.name}
                                       symbol={props.coinPage.fullStats.symbol}
                                       miners={props.coinPage.fullStats.miners}
                                       type={props.coinPage.fullStats.type}
                                       clearCashP={props.clearCashP}
                                       charts={props.coinPage.fullStats.charts}
                                       showFullStatsOnce={props.showFullStatsOnce}
                                       dellFullStats={props.dellFullStats}
                                       showFullStats={props.showFullStats}
                                       fetching={props.fetching}
                                />
                        </div> : ''}
                    </div>}/>
                    <DropData componentContent={<div className={style.dropDown}>
                        {toggleMiners ? <Miners miners={props.coinPage.miners}
                                                addInputValue={props.addInputValue}
                                                showMinersOnce={props.ShowMinersOnce}
                                                dellMinersData={props.dellMinersData}
                                                thisPool={thisPool}
                                                clearCashP={props.clearCashP}
                                                fetching={props.fetching}
                                                showMiners={props.showMiners}
                                                accountAddress={props.coinPage.accountAddress}
                                                addAccountAddress={props.addAccountAddress}
                                                coinLogo={coinLogo}
                        /> : ''}
                    </div>}/>
                    <DropData componentContent={<div className={style.dropDown}>
                        {toggleBlocks ? <Blocks blocks={props.coinPage.blocks}
                                                effort={props.coinPage.blocks ? props.coinPage.blocks.effort : ''}
                                                matured={props.coinPage.blocks ? props.coinPage.blocks.matured : ''}
                                                addInputValue={props.addInputValue}
                                                showBlocksOnce={props.ShowBlocksOnce}
                                                dellBlocksData={props.dellBlocksData}
                                                thisPool={thisPool}
                                                symbol={props.coinPage.fullStats.symbol}
                                                clearCashP={props.clearCashP}
                                                fetching={props.fetching}
                                                showBlocks={props.showBlocks}

                        /> : ''}
                    </div>}/>
                    <DropData componentContent={<div className={style.dropDown}>
                        {toggleHow
                            ?
                            <div className={style.how} id='anchorBtn'>
                                {thisPool === 'eth' ? <div>
                                    <h3>Пул ЕТН pplns</h3>
                                    <div>eth.e4pool.com:4444 - Сложность шар 4G</div>
                                    <div>eth.e4pool.com:8888 - Сложность шар 8G</div>
                                    <div>eth.e4pool.com:5555 - Сложность шар 4G + SSL</div>
                                    <div>eth.e4pool.com:9999 - Сложность шар 8G + SSL</div>
                                    <h3>Для подключения к пулу ЕТН используйте следующие параметры:</h3>
                                    <h4>Настройки T-Rex:</h4>
                                    <p><span>t-rex.exe -a ethash -o eth.e4pool.com:4444 -u YOUR_WALLET_ADDRESS -w RIG_ID -p x
                                    pause</span></p>
                                    <p><span>t-rex.exe -a ethash -o stratum+ssl://eth.e4pool.com:5555 -u YOUR_WALLET_ADDRESS -w RIG_ID -p x
                                    pause</span></p>
                                    <h4>Настройки NBminer:</h4>
                                    <p><span>nbminer.exe -a ethash -o eth.e4pool.com:4444 -u YOUR_WALLET_ADDRESS.RIG_ID
                                    pause</span></p>
                                    <p><span>nbminer.exe -a ethash -o stratum+ssl://eth.e4pool.com:5555 -u YOUR_WALLET_ADDRESS.RIG_ID
                                    pause</span></p>
                                    <h4>Настройки lolminer:</h4>
                                    <p><span>lolMiner.exe --algo ETHASH --pool eth.e4pool.com:4444 --user YOUR_WALLET_ADDRESS.RIG_ID
                                    pause</span></p>
                                    <p><span>lolMiner.exe --algo ETHASH --pool stratum+ssl://eth.e4pool.com:5555 --user YOUR_WALLET_ADDRESS.RIG_ID
                                    pause</span></p>

                                    <div className={style.RaveImages}>
                                        <h3>Настройка подключения через RaveOs:</h3>
                                        <Slider items={RaveOsImg}/>
                                        <h3>Настройка подключения через OSdog:</h3>
                                        <Slider items={OsDogImg}/>
                                    </div>

                                </div> : ''}
                                {thisPool === 'eth-solo' ? <div>
                                    <h3>Пул ЕТН solo</h3>
                                    <div>eth.e4pool.com:8484 - Сложность шар 8G</div>
                                    <div>eth.e4pool.com:9595 - Сложность шар 8G + SSL</div>
                                    <h4>Настройки T-Rex:</h4>
                                    Для подключения к пулу ЕТН используйте следующие параметры:
                                    <p><span> t-rex.exe -a ethash -o solo-eth.e4pool.com:8484 -u YOUR_WALLET_ADDRESS -w RIG_ID -p x
                                    pause</span></p>
                                    <h4>Настройки NBminer:</h4>
                                    <p><span> nbminer.exe -a ethash -o solo-eth.e4pool.com:8484 -u YOUR_WALLET_ADDRESS.RIG_ID
                                    pause</span></p>
                                    <p><span> nbminer.exe -a ethash -o stratum+ssl://solo-eth.e4pool.com:9595 -u YOUR_WALLET_ADDRESS.RIG_ID
                                    pause</span></p>
                                    <h4>Настройки lolminer:</h4>
                                    <p><span>lolMiner.exe --algo ETHASH --pool eth.e4pool.com:8484 --user YOUR_WALLET_ADDRESS.RIG_ID
                                    pause</span></p>
                                    <p><span>lolMiner.exe --algo ETHASH --pool stratum+ssl://eth.e4pool.com:9595 --user YOUR_WALLET_ADDRESS.RIG_ID
                                    pause</span></p>
                                </div> : ''}
                                {thisPool === 'etc' ? <div>
                                    <h3>Пул ЕТC pplns</h3>
                                    Для подключения к пулу ЕТC используйте следующие параметры:
                                    <h4>Настройки T-Rex:</h4>
                                    <p><span>t-rex.exe -a etchash -o etc.e4pool.com:9007 -u YOUR_WALLET_ADDRESS -w RIG_ID -p x pause</span>
                                    </p>
                                    <p><span>t-rex.exe -a etchash -o stratum+ssl://etc.e4pool.com:9008 -u YOUR_WALLET_ADDRESS -w RIG_ID -p x pause</span>
                                    </p>
                                    <h4>Настройки Phoenix miner:</h4>
                                    <p><span>phoenixminer.exe -a etchash -o etc.e4pool.com:9007 -u YOUR_WALLET_ADDRESS.RIG_ID pause</span>
                                    </p>
                                    <p><span>phoenixminer.exe -a etchash -o stratum+ssl://etc.e4pool.com:9008 -u YOUR_WALLET_ADDRESS.RIG_ID pause</span>
                                    </p>
                                </div> : ''}
                                {thisPool === 'etc-solo' ? <div>
                                    <h3>Пул ЕТC solo</h3>
                                    Для подключения к пулу ЕТC используйте следующие параметры:
                                    <h4>Настройки T-Rex:</h4>
                                    <p><span>t-rex.exe -a etchash -o solo-etc.e4pool.com:8005 -u YOUR_WALLET_ADDRESS -w RIG_ID -p x pause</span>
                                    </p>
                                    <p><span>t-rex.exe -a etchash -o stratum+ssl://solo-etc.e4pool.com:8006 -u YOUR_WALLET_ADDRESS -w RIG_ID -p x pause</span>
                                    </p>
                                    <h4>Настройки Phoenix miner:</h4>
                                    <p><span>phoenixminer.exe -a etchash -o solo-etc.e4pool.com:8005 -u YOUR_WALLET_ADDRESS.RIG_ID pause</span>
                                    </p>
                                    <p><span>phoenixminer.exe -a etchash -o stratum+ssl://solo-etc.e4pool.com:8006 -u YOUR_WALLET_ADDRESS.RIG_ID pause</span>
                                    </p>
                                </div> : ''}
                                {thisPool === 'evox-prop' || thisPool === 'evox-solo' ? <div>
                                    <h3>Пул evox.e4pool.com</h3>
                                    <div>evox.e4pool.com:4488 - стартовая сложность 50 000</div>
                                    <h3>Для подключения к пулу evox используйте следующие параметры:</h3>
                                    <p>Настройки xmrig (bat)* рекомендуется:</p>
                                    <p>xmrig.exe --donate-level 0 -o evox.e4pool.com:4488 -u Ваш_кошелёк -p
                                        @Имя_Вашего_воркера -t XX -a RandomARQ -k</p>
                                    <p>pause</p>
                                    <p>,где -t - количество выделяемых для майнинга ядер</p>
                                    <h4>Настройки xmrig (через config.json [xmr-node-proxy]):</h4>
                                    <p>pools": [</p>
                                    <p>{`{`}"url": "evox.e4pool.com:4488",</p>
                                    <p>"user": "Ваш_кошелёк",</p>
                                    <p>"pass": "Имя_Вашего_Воркера"</p>
                                    <p>"keepalive": true,</p>
                                    <p>"nicehash": false,</p>
                                    <p>"algo": "rx/arq"{`}]`}</p>
                                    <p>*Более подробно об общей настройке конфига:
                                        https://bytwork.com/soft/xmrig?ysclid=l3lgbgoqmw</p>
                                    <h4>Настройки SRBminer-Multi (bat):</h4>
                                    <p>setx GPU_MAX_HEAP_SIZE 100</p>
                                    <p>setx GPU_MAX_USE_SYNC_OBJECTS 1</p>
                                    <p>setx GPU_SINGLE_ALLOC_PERCENT 100</p>
                                    <p>setx GPU_MAX_ALLOC_PERCENT 100</p>
                                    <p>setx GPU_MAX_SINGLE_ALLOC_PERCENT 100</p>
                                    <p>setx GPU_ENABLE_LARGE_ALLOCATION 100</p>
                                    <p>setx GPU_MAX_WORKGROUP_SIZE 1024</p>
                                    <p>@echo off</p>
                                    <p>cd %~dp0</p>
                                    <p>cls</p>
                                    <p>SRBMiner-MULTI.exe --algorithm randomarq --evox.e4pool.com:4488 --Ваш_кошелёк
                                        --password Имя_Вашего_воркера</p>
                                    <p>pause</p>
                                    <p>*В примере bat файла автоматическое определение количество ядер для работы
                                        майнера, более еподробно про найстройку можно почитать: *более подробно об общей
                                        настройке конфига: https://bytwork.com/soft/xmrig?ysclid=l3lgbgoqmw</p>
                                </div> : ''}
                                {thisPool === 'keva' ? <div>
                                    <h3>Пул keva.e4pool.com</h3>
                                    <div>keva.e4pool.com:8000 - стартовая сложность 8000</div>
                                    <h3>Для подключения к пулу keva используйте следующие параметры:</h3>
                                    <p>Настройки xmrig (bat)* рекомендуется:</p>
                                    <p>xmrig.exe --donate-level 0 -o keva.e4pool.com:9011 -u Ваш_кошелёк -p
                                        Имя_Вашего_воркера -t ХХ -a cn/keva -k</p>
                                    <p>pause</p>
                                    <p>,где -t - количество выделяемых для майнинга ядер</p>
                                    <h4>Настройки xmrig (через config.json [xmr-node-proxy]):</h4>
                                    <p>pools": [</p>
                                    <p>{`{`}"hostname": "keva.e4pool.com",</p>
                                    <p>"port":9011,</p>
                                    <p>"ssl": false,</p>
                                    <p>"allowSelfSignedSSL": false,</p>
                                    <p>"share": 100,</p>
                                    <p>"username": Ваш_кошелёк,</p>
                                    <p>"password": "Имя_Вашего_воркера",</p>
                                    <p>"keepAlive": true,</p>
                                    <p>"algo": "rx/keva",</p>
                                    <p>"blob_type": "cryptonote",</p>
                                    <p>"default": true{`}]`}</p>
                                    <p>*более подробно об общей настройке конфига:
                                        https://bytwork.com/soft/xmrig?ysclid=l3lgbgoqmw</p>
                                    <h4>Настройки SRBminer-Multi (bat):</h4>
                                    <p>setx GPU_MAX_HEAP_SIZE 100</p>
                                    <p>setx GPU_MAX_USE_SYNC_OBJECTS 1</p>
                                    <p>setx GPU_SINGLE_ALLOC_PERCENT 100</p>
                                    <p>setx GPU_MAX_ALLOC_PERCENT 100</p>
                                    <p>setx GPU_MAX_SINGLE_ALLOC_PERCENT 100</p>
                                    <p>setx GPU_ENABLE_LARGE_ALLOCATION 100</p>
                                    <p>setx GPU_MAX_WORKGROUP_SIZE 1024</p>
                                    <p>@echo off</p>
                                    <p>cd %~dp0</p>
                                    <p>cls</p>
                                    <p>SRBMiner-MULTI.exe --algorithm randomkeva --keva.e4pool.com:9011 --Ваш_кошелёк
                                        --password Имя_Вашего_воркера</p>
                                    <p>pause</p>
                                    <p>*В примере bat файла автоматическое определение количество ядер для работы
                                        майнера, более еподробно про найстройку можно почитать: *более подробно об общей
                                        настройке конфига: https://bytwork.com/soft/xmrig?ysclid=l3lgbgoqmw</p>
                                </div> : ''}
                            </div>
                            : ''}
                    </div>}/>
                </div>
            </div>
        </div>
    </div>);
};
