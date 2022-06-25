import React from "react";
import Select from 'react-select'
import './FilterSections.css'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../redux/store";
import {filterCardsByName} from "../../../redux/cardsSlice";

export const FilterSection: React.FunctionComponent<PropsType> = props => {
  let authors: Array<string> = useSelector((state: RootState) => state.cardsReducer.authors)
  let dispatch = useDispatch<AppDispatch>()
  let options = authors.map(e => ({ value: e, label: e }));
  const changeAuthor = (selectedOption: OptionsType) => {
    dispatch(filterCardsByName(selectedOption.value))
  }
  return <section className={'FilterSection'}>
    <Select options={options} onChange={(selectedOption: any) => changeAuthor(selectedOption)}/>
  </section>
}

type PropsType = {}
type OptionsType = {
  value: string
  label: string
}