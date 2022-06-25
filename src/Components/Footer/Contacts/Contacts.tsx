import React from "react";
import vk from './../../../assets/vk.png'
import telegram from './../../../assets/telegram.png'
import youtube from './../../../assets/youtube.png'
import twitter from './../../../assets/twitter.png'
import './Contacts.css'

export const Contacts: React.FunctionComponent<PropsType> = props => {
  return <section className={'Contacts'}>
    <img src={telegram} alt={'telegram'}/>
    <img src={vk} alt={'vk'}/>
    <img src={twitter} alt={'twitter'}/>
    <img src={youtube} alt={'youtube'}/>
  </section>
}

type PropsType = {}