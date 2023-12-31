import orderReducer from './orderSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    orders: orderReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch