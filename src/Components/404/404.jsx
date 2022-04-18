import React from 'react';
import style from './404.module.scss'

const Err404 = () => {
    return (
        <div className={style._404}>
            <div>404</div>
            <span>Page not found</span>
        </div>
    );
};

export default Err404;