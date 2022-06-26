import {configureStore} from '@reduxjs/toolkit'
import cardsReducer from './cardsSlice'

export const store = configureStore({
  reducer: {
    cardsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
