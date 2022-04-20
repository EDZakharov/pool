import React, {useEffect} from 'react';
import style from './Payments.module.scss'
import Fetcher from "../Fetcher/Fetcher";

const Payments = (props) => {
    return ((props.content.isFetching? <Fetcher/> : <div className={style.payments}>
                1423423
        </div>))
};

export default Payments;