import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {CardType} from "../../../redux/cardsSlice";
import {Card} from "./Card/Card";
import './Cards.css'

export const Cards: React.FunctionComponent<PropsType> = props => {
  let cards: Array<CardType> = useSelector((state: RootState) => state.cardsReducer.cards)
  return <section className={'Cards'}>
    {cards.map((card) => {
      return <Card key={card.description}
                   author={card.author}
                   title={card.title}
                   description={card.description}
                   publishedAt={card.publishedAt} />
    }
    )}
  </section>
}

type PropsType = {}