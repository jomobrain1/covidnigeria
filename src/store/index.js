import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import {dataSlice} from './dataSlice'
import thunkMiddleware from 'redux-thunk'

const middlewareEnhancer = applyMiddleware(thunkMiddleware)

const store = configureStore({
    reducer: dataSlice.reducer
  }, middlewareEnhancer)

export default store