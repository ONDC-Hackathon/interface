import { createSlice } from '@reduxjs/toolkit'
import { getSubCategories } from '../services/subCategory.service'

const initialState = {
    loading: false,
    subCategories: {},
    error: null,
    success: null,
}

const subCategorySlice = createSlice({
    name: 'subCategory',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getSubCategories.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getSubCategories.fulfilled, (state, { payload }) => {
                state.loading = false
                state.success = payload.message
                state.subCategories = payload.data
            })
            .addCase(getSubCategories.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    },
})

export default subCategorySlice.reducer
