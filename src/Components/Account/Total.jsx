import React from 'react';
import style from './Total.module.scss'

const Total = ({text}) => {
    return (
        <div className={style.total}>
            {text}
        </div>
    );
};

export default Total;