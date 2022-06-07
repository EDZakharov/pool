import React, {useEffect} from 'react';
import style from './Blocks.module.scss'
import Total from "../../Account/Total";
import Fetcher from "../../Fetcher/Fetcher";
import PaginatedItems from "../../Pagination";
import {showBlocks} from "../../../redux/socketMiddleware";

const Blocks = ({
                    blocks,
                    effort,
                    matured,
                    addInputValue,
                    thisPool,
                    showBlocksOnce,
                    dellBlocksData,
                    showBlocks,
                    fetching,
                    symbol
                }) => {


    useEffect(() => {
        let start = setInterval(() => {
            showBlocks(thisPool)
            fetching(false)
        }, 1000)
        showBlocksOnce(thisPool)
        return () => {
            clearInterval(start)
            dellBlocksData()
        }
    }, [])

    return (
        <div className={style.blocks} id='anchorBtn'>
            <Total text={blocks !== undefined ?
                <div className={style.effort__grid}>
                    <div className={style.effort}>Удача последних 20
                        блоков: {(effort['20'] * 100).toFixed(0)} %
                    </div>
                    <div className={style.effort}>Удача последних 50
                        блоков: {(effort['50'] * 100).toFixed(0)} %
                    </div>
                    <div className={style.effort}>Удача последних 200
                        блоков: {(effort['200'] * 100).toFixed(0)} %
                    </div>
                </div> : ''}
            />
            <div className={style.blocks_column_grid}>
                <div className={style.height}>Высота</div>
                <div className={style.summ}>Сумма</div>
                <div className={style.effort}>Удача</div>
                <div className={style.hash}>Хэш блока</div>
                <div className={style.timestamp}>Дата</div>
            </div>
            <div className={style.blocksWrapper}>
                {blocks !== undefined ?
                    <PaginatedItems itemsPerPage={15} items={matured}
                                    type={'blocks'} addInputValue={addInputValue}
                                    pool={thisPool}/> : <Fetcher/>}

                {(symbol === 'ETH') ?
                    <span className={style.liveViewer}><a
                        href='http://www.ethviewer.live/'>EthLiveViewer</a></span> : ''}
            </div>
        </div>
    );
};

export default Blocks;