import './App.css'
import React, { useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import Products from './Pages/Products'
import Product from './Pages/Product'
import Profile from './Pages/Profile'
import AddProduct from './Pages/AddProduct'
import NotFound from './Pages/NotFound'
import ProtectedLayout from './Components/ProtectedLayout'
import { ThemeProvider } from '@mui/material/styles'
import theme from './Components/theme'
import { getCategories } from './Redux/services/category.service'
import { getSubCategories } from './Redux/services/subCategory.service'
import { getVariants } from './Redux/services/variant.service'
import Alert from '@mui/material/Alert'
import { clearAlert } from './Redux/features/alert.slice';
import client from './Redux/services/index';
import { setuserdata } from './Redux/features/auth.slice';


const ProtectedRoute = () => {
  const dispatch = useDispatch()
  const { userToken } = useSelector((state) => state.auth)
  if (!userToken) return <Navigate to="/login" />
  else {
    client.get('users/seller/', {
      headers: {
        Authorization: `Bearer ${userToken}`,
      }
    })
      .then((res) => {
        console.log(res.data.data);
        dispatch(setuserdata({ ...res.data.data }))
      })
      .catch((err) => {
        console.log(err)
        return <Navigate to="/login" />
      })
    return <Outlet />
  }
}

function App() {
  const dispatch = useDispatch()
  const alert = useSelector((state) => state.alert)

  useEffect(() => {
    dispatch(getCategories({}))
    dispatch(getSubCategories({}))
    dispatch(getVariants({}))
  }, [dispatch])

  useEffect(() => {
    if (alert.type && alert.message) {
      const timer = setTimeout(() => {
        dispatch(clearAlert())
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [alert, dispatch])

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {alert.type && (
          <Alert
            severity={alert.type}
            sx={{
              position: 'fixed',
              bottom: '50px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10000,
              maxWidth: '90%',
            }}
          >
            {alert.message}
          </Alert>
        )}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProtectedRoute />}>
              <Route element={<ProtectedLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="products" element={<Products />} />
                <Route path="product/:id" element={<Product />} />
                <Route path="profile" element={<Profile />} />
                <Route path="addproduct" element={<AddProduct />} />
              </Route>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App
