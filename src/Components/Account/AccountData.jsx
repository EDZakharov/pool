import React, {useEffect} from 'react';
import style from './AccountData.module.scss'
import Fetcher from "../Fetcher/Fetcher";

const AccountData = (props) => {

    useEffect(() => {
        let pool = localStorage.getItem('selectedCoin')
        let account = localStorage.getItem('account')
        props.showAccountDataOnce(pool,account)
        let interval = setInterval(() => {
            props.showAccountData(pool)
        }, 500)
        return () => {
            clearInterval(interval)
            props.dellAccountData()
        }
    }, [])




    return (props.account.isFetching ?
            <Fetcher/>
            :
            <div className={style.payments}>
                1423423
            </div>
    )
};

export default AccountData;