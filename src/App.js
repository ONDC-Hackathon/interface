import './App.css'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
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

const ProtectedRoute = () => {
    const { userToken } = useSelector((state) => state.auth)
    return userToken ? <Outlet /> : <Navigate to="/login" />
}

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
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
