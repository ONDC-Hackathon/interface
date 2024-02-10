import client from './index'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getSubCategories = createAsyncThunk(
  'catalogue/subCategory',
  async ({}, { getState, rejectWithValue }) => {
    console.log('Inside getSubCategories')
    const { auth } = getState()
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.userToken}`,
        },
      }
      const { data } = await client.get(`catalogue/sub_category/`, config)

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
