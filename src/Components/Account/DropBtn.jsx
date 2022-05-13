import React from 'react';
import style from './DropBtn.module.scss'

const DropBtn = ({status, text}) => {


    return (
        <div className={style.dropbtn}>{status ?
            <div className={style.active}>{text}</div> :
            <div className={style.disable}>{text}</div>}
        </div>
    );
};

export default DropBtn;