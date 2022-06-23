import React from "react";

export const Navigation: React.FunctionComponent<PropsType> = props => {
  return <nav className={'Navigation'}>
    <ul className={'Navigation-List'}>
      <li>Готовые решения</li>
      <li>О нас</li>
      <li>Блог</li>
      <li>Контакты</li>
    </ul>
  </nav>
}

type PropsType = {}