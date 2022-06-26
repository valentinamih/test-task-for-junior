import React from "react";
import './Card.css'
import TextTruncate from 'react-text-truncate';

export const Card: React.FunctionComponent<PropsType> = props => {
  let published = new Date(props.publishedAt)
  let date = published.getDate()
  let month = published.getMonth()
  let year = published.getFullYear()
  return <article className={'Card'}>
    <span className={'Card-Date'}>{`${date} ${props.months[month+1]} ${year}`}</span>
    <h3 className={'Card-Title'}>{props.title}</h3>
      <TextTruncate
        containerClassName={'Card-Description'}
        line={3}
        element="span"
        truncateText="…"
        text={props.description}
      />
    <span className={'Card-Author'}>{props.author || 'no author :('}</span>
  </article>
}

type PropsType = {
  author: string
  title: string
  description: string
  publishedAt: Date
  months: Array<string>
}