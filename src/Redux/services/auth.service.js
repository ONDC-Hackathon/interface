import client from './index'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const loginSeller = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await client.get(
        `/seller/login/`,
        { username: email, password },
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

export const registerSeller = createAsyncThunk(
  'auth/register',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      await client.post(`/seller/add/`, { email, password }, config)
    } catch (error) {
      if (error.response?.data?.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  },
)
