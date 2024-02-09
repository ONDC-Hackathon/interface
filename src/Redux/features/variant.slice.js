import { createSlice } from '@reduxjs/toolkit'
import { getVariants } from '../services/variant.service'

const initialState = {
    loading: false,
    variants: {},
    error: null,
    success: null,
}

const variantSlice = createSlice({
    name: 'variant',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getVariants.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getVariants.fulfilled, (state, { payload }) => {
                state.loading = false
                state.success = payload.message
                state.variants = payload.data
            })
            .addCase(getVariants.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    },
})

export default variantSlice.reducer
