import React from 'react'
import { FilterSection } from './FilterSection/FilterSection'
import './MainSection.css'
import { Cards } from './Cards/Cards'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store'
import { getCards } from '../../redux/cardsSlice'

export const MainSection: React.FunctionComponent = () => {
  let dispatch = useDispatch<AppDispatch>()
  dispatch(getCards())
  return <main className={'MainSection'}>
    <FilterSection />
    <Cards />
  </main>
}
