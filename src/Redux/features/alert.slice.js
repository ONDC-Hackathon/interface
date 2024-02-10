import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  type: null, // ['success', 'error', 'warning', info]
  message: null,
}

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.message = action.payload.message
      state.type = action.payload.type
      console.log(action.payload)
    },
    clearAlert: (state) => {
      state.message = null
      state.type = null
    },
  },
})

export const { setAlert, clearAlert } = alertSlice.actions
export default alertSlice.reducer
