import { configureStore } from '@reduxjs/toolkit'
import FlightSearchSlice from '../Redux/FlightSearchSlice'

export const store = configureStore({
  reducer: FlightSearchSlice,
})