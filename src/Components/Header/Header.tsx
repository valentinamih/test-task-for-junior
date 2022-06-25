import React from "react";
import logo from './../../assets/logo.png'
import './Header.css'

export const Header: React.FunctionComponent<PropsType> = props => {
  return <header className={'Header'}>
    <img className={'Header-Logo'} src={logo} alt={'logo'}/>
    <aside className={'Header-Contacts'}>
      <a href="tel: 88000000000" className={'Header-Contacts_contact Contact'}>8 800 000 00 00</a>
      <a href="mailto: sales@logo.ru" className={'Header-Contacts_contact Contact'}>sales@logo.ru</a>
      <a href="tel: 88000000000" className={'Header-Contacts_image Phone Contact'} />
      <a href="mailto: example@mail.ru" className={'Header-Contacts_image Email Contact'} />
    </aside>
  </header>
}

type PropsType = {}