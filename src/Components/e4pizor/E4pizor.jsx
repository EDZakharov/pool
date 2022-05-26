import React, {useState} from 'react';
import style from './E4pizor.module.scss'
import background from '../../img/фон.jpg'
import red from '../../img/Red.png'
import black from '../../img/Black.png'
import blue from '../../img/Blue.png'
import darkGreen from '../../img/DarkGreen.png'
import green from '../../img/Green.png'
import styled from 'styled-components'

const E4Pizor = () => {

    let [currentColor, setCurrentColor] = useState(black)

    const deviceColors = [
        {id: 1, src: black},
        {id: 2, src: darkGreen},
        {id: 3, src: red},
        {id: 4, src: blue},
        {id: 5, src: green},
    ]

    const selectDeviceColor = () => {
        setCurrentColor(darkGreen)
    }

    let Circle = styled.div`
    background-color: ${({color}) => {
        if (color === black) {
            return 'black'
        }
        if (color === darkGreen) {
            return '#2b2b2b'
        }
        if (color === red) {
            return 'red'
        }
        if (color === blue) {
            return 'blue'
        }
        if (color === green) {
            return 'green'
        }
    }};
    width: 30px;
    height: 30px;
    pointer-events: all;
    cursor: pointer;
    border-radius: 50%;
    border: none;
    box-shadow: 0 0 10px black;
    margin-left:10px;
    `


    return (
        <div className={style.e4pizor}>
            <div className={style.background}><img src={background}/></div>
            <div className={style.content}>
                <div className={style.e4pizor__device}><img src={currentColor}/></div>
                <button className={style.colorButtons}>
                    {deviceColors.map(color => <div className={style.selectColorBtn} key={color.id} onClick={() => {
                            setCurrentColor(color.src)
                        }}><Circle color={color.src}/></div>
                    )}
                </button>
            </div>
            <a href='https://suite.trezor.io/'/>
            <div className={style.player}>
                <iframe id="ytplayer" type="text/html" width="700" height="400"
                        src="http://www.youtube.com/embed/oUUWa_pTVo8"
                        frameBorder="0"/>
            </div>
            <div className={style.btn}><a href='https://t.me/E4pizor'>Buy E4pizor</a></div>
            {/*<img src={e4pizor} alt='e4pizor'/>*/}
        </div>
    );
};

export default E4Pizor;