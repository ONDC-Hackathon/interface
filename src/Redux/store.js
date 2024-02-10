import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth.slice'
import categoryReducer from './features/category.slice'
import subCategoryReducer from './features/subCategory.slice'
import variantReducer from './features/variant.slice'
import productReducer from './features/product.slice'
import alertReducer from './features/alert.slice'

const store = configureStore({
  reducer: {
    alert: alertReducer,
    auth: authReducer,
    category: categoryReducer,
    subCategory: subCategoryReducer,
    variant: variantReducer,
    product: productReducer,
  },
})
export default store
