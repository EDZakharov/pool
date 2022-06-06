import React, {useEffect} from 'react';
import style from './Miners.module.scss'
import PaginatedItems from "../../Pagination";
import Fetcher from "../../Fetcher/Fetcher";
import {Link} from "react-router-dom";

const Miners = ({
                    miners,
                    addInputValue,
                    dellMinersData,
                    showMinersOnce,
                    thisPool,
                    clearCashP,
                    showMiners,
                    fetching,
                    accountAddress,
                    addAccountAddress,
                    coinLogo
                }) => {


    let setAddr = (e) => {
        addAccountAddress(e.target.value)
    }

    let addrFilter = (coinName) => {
        if (accountAddress === null) {
            return `/${coinName}`
        }
        return `/${coinName}/account/${accountAddress}`
    }

    useEffect(() => {
        showMinersOnce(thisPool)
        let start = setInterval(()=>{
            showMiners(thisPool)
            fetching(false)
        },1000)
        return () => {
            clearInterval(start)
            dellMinersData()
            navigator.clipboard.writeText('').catch(e => e)
            addAccountAddress('')
        }
    }, [])

    return (
        <div className={style.totalHashrate} id='anchorBtn'>
            {/*<Total text={`Общий хэшрейт: ${hashFilter(props.coinPage.fullStats.hashrate).hashrate}${hashFilter(props.coinPage.fullStats.hashrate).unit}`}/>*/}
            {miners && miners.length === 0 ?
                <div className={style.inputForm}/> : <div className={style.inputForm}>
                    <img src={coinLogo} alt='logo'/>
                    <input type='text' autoComplete='off' placeholder={`Адрес кошелька`}
                           onChange={setAddr}
                           value={accountAddress !== null ? accountAddress : ''}/>
                    <Link to={addrFilter(thisPool)}>
                        <div className={style.inputBtn}><i className="fa-solid fa-magnifying-glass"/></div>
                    </Link>
                </div>}
            <div className={style.coin_column_grid}>
                <div className={style.wallet}>Кошелек</div>
                <div className={style.hashrate}>Хэшрейт</div>
                <div className={style.shares}>Последняя шара</div>
                <div className={style.status}>Статус</div>
            </div>
            <div className={style.minersWrapper}>
                {miners !== undefined ?
                    <PaginatedItems itemsPerPage={15}
                                    items={miners}
                                    type={'coinPage'}
                                    addInputValue={addInputValue}

                    /> : <Fetcher/>}
            </div>
        </div>
    );
};

export default Miners;