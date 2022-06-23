import React from "react";
import './Card.css'

export const Card: React.FunctionComponent<PropsType> = props => {
  return <article className={'Card'}>
    <span className={'Card-Date'}>{props.publishedAt}</span>
    <span className={'Card-Title'}>{props.title}</span>
    <span className={'Card-Description'}>{props.description}</span>
    <span className={'Card-Author'}>{props.author}</span>
  </article>
}

type PropsType = {
  author: string
  title: string
  description: string
  publishedAt: string
}