import { createSlice } from '@reduxjs/toolkit'
import { addProduct } from '../services/product.service'

const initialState = {
  loading: false,
  product: {},
  error: null,
  success: null,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(addProduct.fulfilled, (state, { payload }) => {
        state.loading = false
        state.success = payload.message
        state.product = payload.data.data
      })
      .addCase(addProduct.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
      })
  },
})

export default productSlice.reducer
