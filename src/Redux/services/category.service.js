import client from './index'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getCategories = createAsyncThunk(
  'catalogue/category',
  async ({}, { getState, rejectWithValue }) => {
    console.log('Inside getCategories')
    const { auth } = getState()
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.userToken}`,
        },
      }
      const { data } = await client.get(`catalogue/category/`, config)

      return data
    } catch (error) {
      if (error.response?.data?.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  },
)
