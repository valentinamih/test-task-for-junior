import React from "react";
import './Footer.css'
import logo from './../../assets/logoFooter.png'
import {Contacts} from "./Contacts/Contacts";
import {Navigation} from "./Navigation/Navigation";

export const Footer: React.FunctionComponent<PropsType> = props => {
  return <footer className={'Footer'}>
    <img className={'Footer-Logo'} src={logo}/>
    <Navigation />
    <Contacts />
    <span className={'Footer-Information'}>© ООО «Лого», 2008—2022</span>
  </footer>
}

type PropsType = {}