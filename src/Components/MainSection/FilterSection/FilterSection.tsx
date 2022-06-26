import React from "react";
import './FilterSections.css'
import {DatePickerComponent} from "./DatePicker/DatePicker";
import {SelectAuthor} from "./SelectAuthor/SelectAuthor";

export const FilterSection: React.FunctionComponent<PropsType> = props => {
  return <section className={'FilterSection'}>
   <SelectAuthor />
    <DatePickerComponent />
  </section>
}

type PropsType = {}
