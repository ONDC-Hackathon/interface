import { createSlice } from '@reduxjs/toolkit'
import { addProduct, getProducts, getProduct } from '../services/product.service'

const initialState = {
  loading: false,
  product: {},
  products: [],
  error: null,
  success: null,
  details: []
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload,
      )
    },
  },
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
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.loading = false
        state.success = payload.message
        state.products = payload.data
      })
      .addCase(getProducts.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
      })
    builder
      .addCase(getProduct.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getProduct.fulfilled, (state, { payload }) => {
        state.loading = false
        state.success = payload.message
        state.product = payload.data.data["basics"]
        state.details = payload.data.data["details"]
      })
      .addCase(getProduct.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
      })
  },
})

export const { deleteProduct } = productSlice.actions
export default productSlice.reducer
