import { configureStore, combineReducers } from "@reduxjs/toolkit";
import calc from "./calcSlice";
import { useDispatch } from 'react-redux'

const rootReducer = combineReducers({
  calc: calc.reducer,
});

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState> // для useSelector на state: RootState
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof rootReducer>;
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
