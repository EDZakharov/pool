import React from 'react';
import style from './E4pizor.module.scss'
import e4pizor from '../../img/fon.jpg'

const E4Pizor = () => {

    return (
        <div className={style.e4pizor}>
            <img src={e4pizor} alt='e4pizor'/>
            <a href='https://suite.trezor.io/'/>
            <div className={style.player} >
                <iframe id="ytplayer" type="text/html" width="700" height="400"
                        src="http://www.youtube.com/embed/oUUWa_pTVo8"
                        frameBorder="0"/>
            </div>
            <div className={style.btn}><a href='https://t.me/E4pizor'>Buy E4pizor</a></div>

        </div>
    );
};

export default E4Pizor;