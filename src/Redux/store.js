import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth.slice'
import categoryReducer from './features/category.slice'
import subCategoryReducer from './features/subCategory.slice'
import variantReducer from './features/variant.slice'
import productReducer from './features/product.slice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    subCategory: subCategoryReducer,
    variant: variantReducer,
    product: productReducer,
  },
})
export default store
