import { createSlice } from '@reduxjs/toolkit'
import { loginSeller } from '../services/auth.service'

const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : 'null-usertoken-just-for-testing'

const initialState = {
    loading: false,
    userInfo: {},
    userToken,
    sellerInfo: {},
    error: null,
    success: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userToken')
            state.loading = false
            state.userToken = null
            state.userInfo = {}
            state.sellerInfo = {}
            state.error = null
            state.success = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginSeller.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(loginSeller.fulfilled, (state, { payload }) => {
                state.loading = false
                state.success = payload.message
                state.userToken = payload.token
                state.userInfo = payload.data.user
                state.sellerInfo = payload.data.seller
                localStorage.setItem('userToken', payload.token)
            })
            .addCase(loginSeller.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    },
})

export const { logout } = authSlice.actions
export default authSlice.reducer
