import React from "react";
import Select from "react-select";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../redux/store";
import {filterCardsByName} from "../../../../redux/cardsSlice";
import user from './../../../../assets/user.png'

export const SelectAuthor: React.FunctionComponent<PropsType> = props => {
  let authors: Array<string> = useSelector((state: RootState) => state.cardsReducer.authors)
  let dispatch = useDispatch<AppDispatch>()
  let options = authors.map(e => ({ value: e, label: e }));
  const changeAuthor = (selectedOption: OptionsType) => {
    dispatch(filterCardsByName(selectedOption.value))
  }

  const selectStyles = {
    option: (provided: any, state: any ) => ({
      backgroundColor: state.isFocused? '#DBE2EF' : 'white',
      cursor: 'pointer',
      color: state.isSelected ? 'black' : '#888888',
      padding: '5px 10px',
    }),
    container: (provided: any, state: any ) => ({
      ...provided,
      width: '100%',
      backgroundColor: 'white',
      borderRadius: '10px',
    }),
    control: (provided: any, state: any ) => ({
      ...provided,
      height: '100%',
      border: '0',

    }),
    indicatorSeparator: (provided: any, state: any ) => ({
      ...provided,
      display: 'none'
    }),
    dropdownIndicator: (provided: any, state: any ) => ({
      ...provided,
      color: '#0050EF'
    }),
    indicatorsContainer: (provided: any, state: any ) => ({
      ...provided,
      color: 'black'
    }),

  }


  return  <Select options={options}
                  styles={selectStyles}
                  placeholder={'Выбор автора'}
                  onChange={(selectedOption: any) => changeAuthor(selectedOption)}/>
}

type PropsType = {}
type OptionsType = {
  value: string
  label: string
}