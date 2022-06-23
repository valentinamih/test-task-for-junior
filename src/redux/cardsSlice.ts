import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {cardsApi} from "../api/api";

let initialState: InitialStateType = {
  cards: []
}

export const getCards = createAsyncThunk('cards/getCards',
  async function () {
  let res = await cardsApi.requestCards()
    return res.data.articles
  })

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCards.fulfilled, (state, action) => {
      state.cards = action.payload
    })
  }
})

type InitialStateType = {
  cards: Array<CardType>
}

export type CardType = {
  author: string
  title: string
  description: string
  publishedAt: string
}

export default cardsSlice.reducer
export const {} = cardsSlice.actions