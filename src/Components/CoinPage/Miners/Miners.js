import React, {useEffect} from 'react';
import style from './Miners.module.scss'
import PaginatedItems from "../../Pagination";
import Fetcher from "../../Fetcher/Fetcher";

const Miners = ({miners,addInputValue,dellMinersData,showMinersOnce,thisPool,clearCashP}) => {
    useEffect(()=>{
        showMinersOnce(thisPool)
        return () => {
            dellMinersData()
            clearCashP()
        }
    },[])

    return (
        <div className={style.totalHashrate} id='anchorBtn'>
            {/*<Total text={`Общий хэшрейт: ${hashFilter(props.coinPage.fullStats.hashrate).hashrate}${hashFilter(props.coinPage.fullStats.hashrate).unit}`}/>*/}
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