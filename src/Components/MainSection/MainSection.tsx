import React from "react";
import {FilterSection} from "./FilterSection/FilterSection";
import './MainSection.css'
import {Cards} from "./Cards/Cards";

export const MainSection: React.FunctionComponent<PropsType> = props => {
  return <main className={'MainSection'}>
    <FilterSection />
    <Cards />
  </main>
}

type PropsType = {}