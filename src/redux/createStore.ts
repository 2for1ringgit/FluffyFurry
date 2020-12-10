import { createStore, combineReducers } from "redux"
import cartReducer from './cartReducer'
const rootReducer = combineReducers({
    // booking: bookingReducer,
    cart: cartReducer,
  })
  
  export default createStore(rootReducer)