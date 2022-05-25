import React from 'react';
import style from './Slider.module.scss'
import Carousel, {consts} from "react-elastic-carousel";
import styled from 'styled-components'

const Circle = styled.button`
    background: ${({ active }) => (active ? '#e4be36' : '0 0 2px white')};
    display: ${({itemsLength}) => (itemsLength <= 1 ? 'none' : 'inline-block')};
    border-radius: 0;
    margin: 10px 10px;
    cursor: pointer;
`

const Slider = ({items}) => {

    let newItems = items? [...items]:[]
    let itemsLength = newItems.length


    let myArrow = ({ type, onClick, isEdge }) => {

        const pointer = type === consts.PREV ? '':''

        return (
            <div onClick={onClick} disabled={isEdge} className={style.arrows}>
                {pointer}
            </div>
        )
    }

    return (
        <div className={style.slider}>
            <Carousel itemsToShow={1} className={style.carousel} renderArrow={myArrow}
                      renderPagination={({ pages, activePage, onClick }) => {
                          return (
                              <div className={style.active}>
                                  {pages.map(page => {
                                      const isActivePage = activePage === page
                                      return (
                                          <Circle
                                              key={page}
                                              onClick={() => onClick(page)}
                                              active={isActivePage}
                                              itemsLength={itemsLength}
                                          />
                                      )
                                  })}
                              </div>
                          )
                      }}
            >
                {newItems.map(el => <img draggable="false" key={el.id} src={el.src}/>)}
            </Carousel>
        </div>
    );
};

export default Slider;