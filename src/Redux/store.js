import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth.slice'

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})
export default store
