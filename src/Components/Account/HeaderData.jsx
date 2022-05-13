import React from 'react';
import style from './HeaderData.module.scss'

const HeaderData = ({el1,el2,el3,type}) => {

    if(type === 'payments'){
        return (
            <div className={style.headerData__grid__payments}>
                <div className={style.headerData__el1}>{el1}</div>
                <div className={style.headerData__el2}>{el2}</div>
                <div className={style.headerData__el3}>{el3}</div>
            </div>
        );
    }if(type === 'workers'){
        return (
            <div className={style.headerData__grid__workers}>
                <div className={style.headerData__el1}>{el1}</div>
                <div className={style.headerData__el2}>
                    <div className={style.el2_gr}>

                    </div>
                    <div className={style.el2_gr}>
                        {el2}
                    </div>
                    <div className={style.el2_gr}>

                    </div>
                </div>
                <div className={style.headerData__el3}>
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
    return (
        <div className={style.headerData__grid}>
            <div className={style.headerData__el1}>{el1}</div>
            <div className={style.headerData__el2}>{el2}</div>
            <div className={style.headerData__el3}>{el3}</div>
        </div>
    );

};

export default HeaderData;