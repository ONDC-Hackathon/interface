import client from './index'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getProducts = createAsyncThunk(
    'catalogue/product',
    async ({}, { getState, rejectWithValue }) => {
        console.log("Inside getProducts")
        const { auth } = getState();
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.userToken}`
                },
            }
            const { data } = await client.get(`catalogue/product/`, config)
            
            return data
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    },
)

export const addProduct = createAsyncThunk(
    'catalogue/product/add/',
    async ( data, { getState, rejectWithValue }) => {
        const { auth } = getState();
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.userToken}`
                },
            }
            const res = await client.post(`catalogue/product/add/`, data, config)
            return res
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    },
)