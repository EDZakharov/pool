import React from "react";
import style from './Pagination.module.scss'
import {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import InnerData from "./Account/InnerData";
import {
    blockHashChecker,
    convertTimestamp,
    dateFilter, getTruncatedName,
    hashFilter,
    poolChecker,
    txChecker
} from "../Filters";
import {CoinPageData} from "./CoinPage/CoinPageData/CoinPageData";


function effortFilter(effort) {
    if(effort < 100){
        return <span className={style.easy}>{effort} %</span>
    }
    if(effort <= 150){
        return <span className={style.hard}>{effort} %</span>
    }
    if(effort > 150){
        return <span className={style.insane}>{effort} %</span>
    }

}


function Items({currentItems, type, addInputValue, pool}) {
    return (
        <div className={style.items}>
            {currentItems && currentItems.map((el) => {
                if (type === 'payments') {
                    return <InnerData
                        key={el.tx}
                        el1={(el.amount / 1000000000).toFixed(3) + ' ' + poolChecker(pool)}
                        el2={<a onClick={event => event.stopPropagation()} href={txChecker(el.tx, pool)}>{getTruncatedName(el.tx, 'tx')}</a>}
                        el3={convertTimestamp(el.timestamp)}
                        type={'payments'}
                    />
                }
                if (type === 'rewards') {
                    return <InnerData
                        key={el.blockHash}
                        el1={(el.amount / 1000000000).toFixed(3) + ' ' + poolChecker(pool)}
                        el2={convertTimestamp(el.timestamp)}
                        el3={<a onClick={event => event.stopPropagation()}
                                href={blockHashChecker(el.blockHash, pool)}>{getTruncatedName(el.blockHash, 'tx')}</a>}
                        el4={el.blockHeight}
                        type={'rewards'}
                    />
                }
                if (type === 'workers') {
                    return <InnerData
                        key={el.name}
                        el1={el.name}
                        el2={hashFilter(el.hr).hashrate + ' ' + hashFilter(el.hr).unit}
                        // el3={`${timestamp.getSeconds()} секун${checkEnd(setEnd)} назад`}
                        el3={`${dateFilter(el.lastBeat)}`}
                        type={'workers'}
                    />
                }
                if (type === 'blocks') {
                    return <InnerData
                        key={el.hash}
                        el1={el.height}
                        el2={el.rewardMev
                            ? <span className={style.reward}>{(el.reward / 1000000000000000000).toFixed(3)} {poolChecker(pool)}
                                <span className={style.mev}> +{(el.rewardMev / 1000000000000000000).toFixed(3)} MEV</span>
                            </span>
                            : poolChecker(pool) !== 'evox' && poolChecker(pool) !== 'keva'
                                ? (el.reward / 1000000000000000000).toFixed(3) + ' ' +poolChecker(pool)
                                : el.reward + ' ' +poolChecker(pool)}
                        el3={effortFilter((el.effort * 100).toFixed(0))}
                        el4={!el.orphan ?
                            <a href={blockHashChecker(el.hash, pool)}>{getTruncatedName(el.hash, 'tx')}</a> :
                            <span className={style.orphan}>Orphan</span>}
                        el5={convertTimestamp(el.timestamp)}
                        type={'blocks'}
                    />
                }
            if (type === 'coinPage') {
            return <div key={el.address}>
            <CoinPageData miner={el.address}
            hashrate={hashFilter(el.hr)}
            lastShare={el.lastBeat}
            offline={el.offline}
            addInputValue={addInputValue}
            />
            </div>
        }
            })}
        </div>
    );
}


let PaginatedItems = ({itemsPerPage, items, type, addInputValue, pool}) => {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    let newItems = [...items]

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(newItems.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(newItems.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % newItems.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} type={type} addInputValue={addInputValue} pool={pool}/>
            <ReactPaginate
                nextLabel={<i className="fa-solid fa-caret-right"/>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel={<i className="fa-solid fa-caret-left"/>}
                pageClassName="page-item"
                pageLinkClassName={style.pageLink}
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName={style.pagination}
                activeClassName={style.active}
                renderOnZeroPageCount={null}
            />
        </>
    );
}

export default PaginatedItems
