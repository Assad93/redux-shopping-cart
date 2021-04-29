import { createStore, combineReducers } from 'redux'
import amountReducer from './reducers/amountReducer'

const reducers = combineReducers({
    amount: amountReducer,
})