import React from 'react';
import './Navigation.css';

export const Navigation: React.FunctionComponent<PropsType> = props => {
  return <nav className={'Navigation'}>
    <ul className={'Navigation-List'}>
      <li className={'Navigation-List_decision ListItem'}>Готовые решения</li>
      <li className={'Navigation-List_about ListItem'}>О нас</li>
      <li className={'Navigation-List_blog ListItem'}>Блог</li>
      <li className={'Navigation-List_contacts ListItem'}>Контакты</li>
    </ul>
  </nav>;
};

type PropsType = {}