import React from "react";
import './Card.css'
import TextTruncate from 'react-text-truncate';

export const Card: React.FunctionComponent<PropsType> = props => {
  return <article className={'Card'}>
    <span className={'Card-Date'}>{props.publishedAt}</span>
    <h3 className={'Card-Title'}>{props.title}</h3>
      <TextTruncate
        containerClassName={'Card-Description'}
        line={3}
        element="span"
        truncateText="…"
        text={props.description}
      />
    <span className={'Card-Author'}>{props.author}</span>
  </article>
}

type PropsType = {
  author: string
  title: string
  description: string
  publishedAt: string
}