import { createSlice } from '@reduxjs/toolkit'
import { getCategories } from '../services/category.service'

const initialState = {
    loading: false,
    categories: {},
    error: null,
    success: null,
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getCategories.fulfilled, (state, { payload }) => {
                state.loading = false
                state.success = payload.message
                state.categories = payload.data
            })
            .addCase(getCategories.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    },
})

export default categorySlice.reducer
