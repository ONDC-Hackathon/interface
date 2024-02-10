import client from './index'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getProducts = createAsyncThunk(
  'catalogue/product',
  async ({}, { getState, rejectWithValue }) => {
    console.log('Inside getProducts')
    const { auth } = getState()
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.userToken}`,
        },
      }
      const { data } = await client.get(`catalogue/product/`, config)

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

export const addProduct = createAsyncThunk(
  'catalogue/product/add/',
  async (data, { getState, rejectWithValue }) => {
    const { auth } = getState()
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.userToken}`,
        },
      }
      const res = await client.post(`catalogue/product/add/`, data, config)
      return res
    } catch (error) {
      if (error.response?.data?.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  },
)

export const addProductAttribute = createAsyncThunk(
  'catalogue/product_attribute/add/',
  async ({ product_id, attributes }, { getState, rejectWithValue }) => {
    console.log({ product_id, attributes })
    const { auth } = getState()
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.userToken}`,
        },
      }
      const res = await client.post(
        `catalogue/product_attribute/add/`,
        { product_id, attributes },
        config,
      )
      return res
    } catch (error) {
      if (error.response?.data?.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  },
)

export const addProductImage = createAsyncThunk(
  'catalogue/product_image/add/',
  async ({ product_id, images }, { getState, rejectWithValue }) => {
    console.log({ product_id, images })
    const { auth } = getState()
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${auth.userToken}`,
        },
      }
      const res = await client.post(
        `catalogue/product_image/add/`,
        { product_id, images },
        config,
      )
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
