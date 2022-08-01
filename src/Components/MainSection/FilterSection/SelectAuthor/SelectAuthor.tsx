import React from 'react'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../../redux/store'
import { filterCardsByName } from '../../../../redux/cardsSlice'
import user from './../../../../assets/user.png'
import './SelectAuthor.css'

const Placeholder = (props: any) => {
  return <div className={'Placeholder'}>
    <img src={user} alt={'user icon'} />
    Выбор автора
  </div>
}

export const SelectAuthor: React.FunctionComponent = () => {
  let authors: Array<string> = useSelector((state: RootState) => state.cardsReducer.authors)
  let dispatch = useDispatch<AppDispatch>()
  let options = authors.map(e => ({ value: e, label: e }))
  const changeAuthor = (selectedOption: OptionsType) => {
    dispatch(filterCardsByName(selectedOption.value))
  }
  const selectStyles = {
    option: (provided: any, state: any) => ({
      backgroundColor: state.isFocused ? '#DBE2EF' : 'white',
      cursor: 'pointer',
      color: state.isSelected ? 'black' : '#888888',
      padding: '5px 10px',
    }), container: (provided: any, state: any) => ({
      ...provided, display: 'block', width: '100%', backgroundColor: 'white', borderRadius: '10px',
    }), singleValue: (provided: any, state: any) => ({
      ...provided, color: '#888888',
    }), control: (provided: any, state: any) => ({
      ...provided, height: '100%', border: '0',
    }), input: (provided: any, state: any) => ({
      ...provided, display: 'none',
    }), indicatorSeparator: (provided: any, state: any) => ({
      ...provided, display: 'none',
    }), menuList: (provided: any, state: any) => ({
      ...provided, '::-webkit-scrollbar': {
        width: '4px', height: '0px',
      }, '::-webkit-scrollbar-track': {
        background: '#f1f1f1',
      }, '::-webkit-scrollbar-thumb': {
        background: '#888888',
      }, '::-webkit-scrollbar-thumb:hover': {
        background: '#555',
      },
    }), dropdownIndicator: (provided: any, state: any) => ({
      ...provided, color: '#0050EF',
    }), indicatorsContainer: (provided: any, state: any) => ({
      ...provided, color: 'black',
    }),
  }

  return <Select options={options}
                 styles={selectStyles}
                 components={{ Placeholder }}
                 onChange={(selectedOption: any) => changeAuthor(selectedOption)} />
}

type OptionsType = {
  value: string
  label: string
}