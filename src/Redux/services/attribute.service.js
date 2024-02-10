import client from './index'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getAttributes = createAsyncThunk(
  'catalogue/attribute',
  async (
    { category, sub_category, variant },
    { getState, rejectWithValue },
  ) => {
    console.log('Inside getAttributes')
    const { auth } = getState()
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.userToken}`,
        },
      }
      const query_params =
        '?category=' +
        category +
        '&sub_category=' +
        sub_category +
        (variant ? '&variant=' + variant : '')
      const { data } = await client.get(
        `catalogue/attribute/${query_params}`,
        config,
      )
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
