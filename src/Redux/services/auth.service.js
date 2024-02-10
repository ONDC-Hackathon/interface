import client from './index'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const loginSeller = createAsyncThunk(
  'auth/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await client.post(
        `users/seller/login/`,
        { username, password },
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
  async ({ user, seller }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      await client.post(`users/seller/add/`, { user, seller }, config)
    } catch (error) {
      if (error.response?.data?.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  },
)
