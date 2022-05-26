import React, {useState} from 'react';
import style from './E4pizor.module.scss'
import red from '../../img/Red.png'
import black from '../../img/Black.png'
import blue from '../../img/Blue.png'
import darkGreen from '../../img/DarkGreen.png'
import green from '../../img/Green.png'
import styled from 'styled-components'


let Circle = styled.div`
    background-color: ${({color}) => {
    if (color === black) {
        return 'black'
    }
    if (color === darkGreen) {
        return '#182a13'
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
    width: 20px;
    height: 20px;
    pointer-events: all;
    cursor: pointer;
    border-radius: 50%;
    border: none;
    margin-left:10px;
    transition: .3s all;
    box-shadow: 0 0 5px black;
     &:hover{
    box-shadow: 0 0 10px white;
    }
    `

let StyledSpan = styled.span`
    background-color: ${({color}) => {
    if (color === black) {
        return 'black'
    }
    if (color === darkGreen) {
        return '#182a13'
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
    padding: 20px;
    font-size: 25px;
    border-radius: 7px;
    font-weight: 600;
    transition: .3s all;
    &:hover{
    box-shadow: 0 0 10px white;
    }
    `
let StyledLine = styled.span`
    color: ${({color}) => {
    if (color === black) {
        return 'black'
    }
    if (color === darkGreen) {
        return '#182a13'
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
transition: .3s all;
 
    `


const E4Pizor = () => {

    let [currentColor, setCurrentColor] = useState(black)

    const deviceColors = [
        {id: 1, src: black},
        {id: 2, src: darkGreen},
        {id: 3, src: red},
        {id: 4, src: blue},
        {id: 5, src: green},
    ]




    return (
        <div className={style.e4pizor}>
            <div className={style.header__description}><h2>E4PIZOR</h2><span>от единственного
                честного пула</span></div>
            <div className={style.content}>
                <div className={style.imageSelection}>
                    <div className={style.e4pizor__device}><img className={style.device__img} src={currentColor}/></div>
                    <div className={style.colorButtons}>
                        {deviceColors.map(color => <div className={style.selectColorBtn} key={color.id} onClick={() => {
                            setTimeout(()=>{setCurrentColor(color.src)},200)

                            }}><Circle color={color.src}/></div>
                        )}
                    </div>
                </div>
                <div className={style.player}>
                    <iframe id="ytplayer" type="text/html" width="700" height="100%"
                            src="http://www.youtube.com/embed/oUUWa_pTVo8"
                            frameBorder="0"/>
                    <div className={style.btn}><a href='https://t.me/e4pizor_sale_bot'><StyledSpan color={currentColor}>Оформить</StyledSpan></a></div>
                </div>
                <div className={style.description}>
                    <h2><span className={style.dec}><StyledLine color={currentColor}>|</StyledLine></span>E4PIZOR - это</h2>
                    <p> Аппаратный кошелёк - специальное устройство, позволяющее безопасно управлять активами в
                        блокчейнах BTC, ETH и других, за счёт необходимости
                        физически подтверждать транзакции (проверять глазками и кнопки нажимать), а также безопасным
                        хранением приватных ключей в энергонезависимой
                        памяти устройства.
                    </p>
                    <p> Первый в мире аппаратный кошелек по-прежнему пользуется популярностью у пользователей. Простой
                        дизайн выдержал испытание временем и предоставляет все необходимое для
                        защиты ваших монет.
                    </p>
                </div>
            </div>
            <a className={style.questions} href='https://t.me/E4pizor'><span>Остались вопросы <i className="fa-solid fa-question"></i></span></a>

        </div>
    );
};

export default E4Pizor;