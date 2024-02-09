import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth.slice'
import categoryReducer from './features/category.slice'
import subCategoryReducer from './features/subCategory.slice'
import variantReducer from './features/variant.slice'


const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    subCategory: subCategoryReducer,
    variant: variantReducer
  },
})
export default store
