import {configureStore} from '@reduxjs/toolkit'
import cardsReducer from './cardsSlice'

export const store = configureStore({
  reducer: {
    cardsReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
