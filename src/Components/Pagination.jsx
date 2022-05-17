import React from "react";
import style from './Pagination.module.scss'
import {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import InnerData from "./Account/InnerData";
import {blockHashChecker, convertTimestamp, getLastBeat, hashFilter, poolChecker} from "../Filters";
import {CoinPageData} from "./CoinPage/CoinPageData/CoinPageData";


let pool = localStorage.getItem('selectedCoin')

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




function Items({ currentItems, type, addInputValue}) {
    return (
        <div className={style.items}>
            {currentItems && currentItems.map((el) => {

                if(type === 'payments'){
                    return <InnerData
                        key={el.tx}
                        el1={(el.amount / 1000000000).toFixed(3) + ' ' + poolChecker(pool)}
                        el2={<a onClick={event => event.stopPropagation()} href={txChecker(el.tx)}>{el.tx}</a>}
                        el3={convertTimestamp(el.timestamp)}
                        type={'payments'}
                    />
                }
                if(type === 'rewards'){
                    return <InnerData
                        key={el.blockHash}
                        el1={(el.amount / 1000000000).toFixed(3) + ' ' + poolChecker(pool)}
                        el2={convertTimestamp(el.timestamp)}
                        el3={<a onClick={event => event.stopPropagation()} href={blockHashChecker(el.blockHash, pool)}>{el.blockHash}</a>}
                        el4={el.blockHeight}
                        type={'rewards'}
                    />
                }
                if(type === 'workers'){
                    return <InnerData
                        key={el.name}
                        el1={el.name}
                        el2={hashFilter(el.hr).hashrate + ' ' + hashFilter(el.hr).unit}
                        // el3={`${timestamp.getSeconds()} секун${checkEnd(setEnd)} назад`}
                        el3={`${getLastBeat(el.lastBeat)}`}
                        type={'workers'}
                    />
                }
                if(type === 'rewards'){
                    return <InnerData
                        key={el.blockHash}
                        el1={(el.amount / 1000000000).toFixed(3) + ' ' + poolChecker(pool)}
                        el2={convertTimestamp(el.timestamp)}
                        el3={<a onClick={event => event.stopPropagation()} href={blockHashChecker(el.blockHash)}>{el.blockHash}</a>}
                        el4={el.blockHeight}
                        type={'rewards'}
                    />
                }
                if(type === 'coinPage'){
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


let PaginatedItems = ({ itemsPerPage, items, type , addInputValue}) => {
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
            <Items currentItems={currentItems} type={type} addInputValue={addInputValue}/>
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
