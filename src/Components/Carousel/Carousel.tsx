import React from "react";
import './Carousel.css';
import dots from './../../assets/dots.png'

export const Carousel: React.FunctionComponent<PropsType> = () => {
  return <section className={'Carousel'}>
    <div className={'Carousel-Image'}>
      <div className={'Carousel-CarouselContent'}>
        <h1 className={'Carousel-CarouselContent_Heading'}>Как бизнесу сохранять <br/>IT-кадры на фоне кризиса</h1>
        <p className={'Carousel-CarouselContent_Description'}>
          Инструменты, которые могут использовать компании для удержания сотрудников
        </p>
        <button className={'Carousel-CarouselContent_Button'} type={"button"}>Подробнее</button>
        <img src={dots} className={'Carousel-CarouselContent_Dots'} alt={'dots'}/>
      </div>
    </div>
  </section>
}

type PropsType = {
}