import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { cardsApi } from '../api/api'

let initialState: InitialStateType = {
  cards: [], authors: [], filteredCards: [], dateFrom: null, dateTo: null,
}

export const getCards = createAsyncThunk('cards/getCards', async function() {
  let res = await cardsApi.requestCards()
  return res.data.articles
})
export const filterCardsByName = createAsyncThunk('cards/filterCardsByName', async function(name: string, ThunkAPI: any) {
  let cards: Array<CardType> = ThunkAPI.getState().cardsReducer.cards
  return cards.filter(card => (name === 'unknown') ? card.author === null : card.author === name)
})

export const cardsSlice = createSlice({
  name: 'cards', initialState: initialState, reducers: {
    setDayFrom: (state: InitialStateType, action) => {
      state.dateFrom = action.payload
    }, setDayTo: (state: InitialStateType, action) => {
      state.dateTo = action.payload
    }, filterCardsByDate: (state: InitialStateType, action) => {
      state.filteredCards = state.cards.filter((card) => {
        return (state.dateFrom && state.dateTo) ? new Date(card.publishedAt) >= state.dateFrom && new Date(card.publishedAt) <= state.dateTo : state.filteredCards
      })
    },
  }, extraReducers: builder => {
    builder.addCase(getCards.fulfilled, (state, action) => {
      state.cards = action.payload
      state.filteredCards = action.payload
      let authors = new Set()
      state.cards.forEach(card => {
        card.author ? authors.add(card.author) : authors.add('unknown')
      })
      state.authors = Array.from(authors)
    })
    builder.addCase(filterCardsByName.fulfilled, (state, action) => {
      state.filteredCards = action.payload
    })
  },
})

type InitialStateType = {
  cards: Array<CardType>
  authors: any
  filteredCards: Array<CardType>
  dateFrom: Date | null
  dateTo: Date | null
}

export type CardType = {
  author: string
  title: string
  description: string
  publishedAt: Date
}

export default cardsSlice.reducer
export const { setDayFrom, setDayTo, filterCardsByDate } = cardsSlice.actions