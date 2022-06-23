import React from "react";
import logo from './../../assets/logo.png'
import './Header.css'

export const Header: React.FunctionComponent<PropsType> = props => {
  return <header className={'Header'}>
    <img className={'Header-Logo'} src={logo} alt={'logo'}/>
    <aside className={'Header-Contacts'}>
      <span>8 800 000 00 00</span>
      <span>sales@logo.ru</span>
    </aside>
  </header>
}

type PropsType = {}