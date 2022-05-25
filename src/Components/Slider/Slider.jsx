import React, {useState} from 'react';
import style from './Slider.module.scss'


let SliderImages = ({items,currentSlide}) => {

    let newItems = items?[...items]:[]
    let itemsLength = newItems.length

    if(itemsLength === 0){
        return <div/>
    }
    if(currentSlide <= 0) {
        return <div className={style.sliderImage}>
            <img src={newItems[0]}/>
        </div>
    }
    if(currentSlide >= newItems.length) {
        return <div className={style.sliderImage}>
            <img src={newItems[newItems.length-1]}/>
        </div>
    }
    if(currentSlide){
        return <div className={style.sliderImage}>
            <img src={newItems[currentSlide]}/>
        </div>
    }
}



const Slider = ({items}) => {
    let [currentSlide, setCurrentSlide] = useState(0)
    let changeLeft = () => {
        if(currentSlide > 0){
            setCurrentSlide(currentSlide-1)
        }
    }
    let changeRight = () => {
        if(currentSlide < items.length-1){
            setCurrentSlide(currentSlide+1)
        }

    }
    return (
        <div className={style.slider}>
            <SliderImages items={items} currentSlide={currentSlide}/>
            <div className={style.btnLeft} ><i className="fas fa-arrow-alt-circle-left" onClick={changeLeft}/></div>
            <div className={style.btnRight} ><i className="fas fa-arrow-alt-circle-right" onClick={changeRight}/></div>
            <div className={style.currentSlide}><span>{currentSlide+1} из {items.length}</span></div>
        </div>
    );
};

export default Slider;