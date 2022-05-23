import React from 'react';
import style from './InnerData.module.scss'

const InnerData = ({el1,el2,el3,el4,el5,type}) => {

    if(type === 'payments'){
        return (
            <div className={style.inner__data__grid__payments}>
                <div className={style.inner__elem1}><span>{el1}</span></div>
                <div className={style.inner__elem2}><span>{el2}</span></div>
                <div className={style.inner__elem3}><span>{el3}</span></div>
            </div>
        );
    }
    if(type === 'workers'){
        return (
            <div className={style.inner__data__grid__workers}>
                <div className={style.inner__elem1}><div>{el1}</div></div>
                <div className={style.inner__elem2}>
                        <div className={style.el2_gr}>

                        </div>
                        <div className={style.el2_gr}>
                            {el2}
                        </div>
                        <div className={style.el2_gr}>

                        </div>

                </div>
                <div className={style.inner__elem3}>
                    <div className={style.el3_gr}>

                    </div>
                    <div className={style.el3_gr}>
                        {el3}
                    </div>
                    <div className={style.el3_gr}>

                    </div>
                </div>
            </div>
        );
    }
    if(type === 'rewards'){
        return (
            <div className={style.inner__data__grid__rewards}>
                <div className={style.inner__elem1}>{el1}</div>
                <div className={style.inner__elem2}>{el2}</div>
                <div className={style.inner__elem3}>{el3}</div>
                <div className={style.inner__elem4}>{el4}</div>
            </div>
        );
    }
    if(type === 'blocks'){

        return (
            <div className={style.inner__data__grid__blocks}>
                <div className={style.inner__elem1}>{el1}</div>
                <div className={style.inner__elem2}>{el2}</div>
                <div className={style.inner__elem3}>{el3}</div>
                <div className={style.inner__elem4}>{el4}</div>
                <div className={style.inner__elem5}>{el5}</div>
            </div>
        );
    }
    return (
        <div className={style.inner__data__grid}>
            <div className={style.inner__elem1}><span>{el1}</span></div>
            <div className={style.inner__elem2}><span>{el2}</span></div>
            <div className={style.inner__elem3}><span>{el3}</span></div>
        </div>
    );
};

export default InnerData;