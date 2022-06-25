import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {cardsApi} from "../api/api";

let initialState: InitialStateType = {
  cards: [],
  authors: [],
  filteredCards: []
}

export const getCards = createAsyncThunk('cards/getCards',
  async function () {
  let res = await cardsApi.requestCards()
    return res.data.articles
  })
export const filterCardsByName = createAsyncThunk('cards/filterCardsByName',
  async function (name: string, ThunkAPI: any) {
  debugger
  let cards: Array<CardType> = ThunkAPI.getState().cardsReducer.cards
    return cards.filter(card => card.author === name)
  })

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCards.fulfilled, (state, action) => {
      state.cards = action.payload
      let res: Array<string> = []
      state.cards.forEach((card) => {res.push(card.author)})
      state.authors = res
    })
    builder.addCase(filterCardsByName.fulfilled, (state, action) => {
      state.filteredCards = action.payload
    })
  }
})

type InitialStateType = {
  cards: Array<CardType>
  authors: Array<string>
  filteredCards: Array<CardType>
}

export type CardType = {
  author: string
  title: string
  description: string
  publishedAt: string
}

export default cardsSlice.reducer
export const {} = cardsSlice.actions