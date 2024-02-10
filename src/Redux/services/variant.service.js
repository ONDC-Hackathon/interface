import client from './index'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getVariants = createAsyncThunk(
  'catalogue/variant',
  async ({}, { getState, rejectWithValue }) => {
    const { auth } = getState()
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.userToken}`,
        },
      }
      const { data } = await client.get(`catalogue/variant/`, config)

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
