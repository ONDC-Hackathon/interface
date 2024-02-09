import React, { useEffect, useState } from 'react'
import { Grid, Box, Typography, TextField, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ProductCard from '../Components/ProductCard'
import DeletePopup from '../Components/DeletePopup'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Redux/services/product.service'

const headerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px',
  backgroundColor: '#fff',
  borderBottom: '1px solid #e0e0e0',
  marginBottom: 6,
}

const columnHeadingStyles = {
  flex: 1,
  fontWeight: 'bold',
  marginRight: '10px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '10px',
}

const footerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px',
  backgroundColor: '#fff',
  borderTop: '1px solid #e0e0e0',
}

const Products = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [products, setProducts] = useState([])

  const fetchProduct = async () => {

    const res = await dispatch(getProducts({}))
    const data = res.payload.data

    setProducts(data)
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  const filteredProducts = searchQuery.trim()
    ? products.filter(
        (product) =>
          product.title
            .toLowerCase()
            .split(' ')
            .some((word) => word.startsWith(searchQuery.toLowerCase())) ||
          product.category.toLowerCase().startsWith(searchQuery.toLowerCase()),
      )
    : products

  const indexOfLastProduct = currentPage * 10
  const indexOfFirstProduct = indexOfLastProduct - 10
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  )

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const [deletePopupOpen, setDeletePopupOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleDeleteClick = (product) => {
    setSelectedProduct(product)
    setDeletePopupOpen(true)
  }

  const handleDeleteConfirm = () => {
    // Delete api call using dispatch
    setProducts(products.filter((p) => p !== selectedProduct))
    setDeletePopupOpen(false)
  }

  const handleEditClick = (product) => {
    // Navigate to Edit Product page logic
  }

  return (
    <Box sx={{ padding: 2, backgroundColor: 'white', width: '90%' }}>
      <Box sx={headerStyles}>
        <TextField
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search your product here..."
          variant="outlined"
          color="primary"
          sx={{ margin: 0 }}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => {
            navigate('/addproduct')
          }}
          sx={{
            borderRadius: 2,
            paddingY: '8px',
            paddingX: '16px',
            color: 'white',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          Add Product
        </Button>
      </Box>

      {currentProducts.length > 0 ? (
        <Grid container spacing={2}>
          <Grid container item>
            <Box sx={{ ...columnHeadingStyles, flex: 3 }}>
              <Typography variant="subtitle2">Product</Typography>
            </Box>
            <Box sx={columnHeadingStyles}>
              <Typography variant="subtitle2">Price</Typography>
            </Box>
            <Box sx={columnHeadingStyles}>
              <Typography variant="subtitle2">Stock</Typography>
            </Box>
            <Box sx={columnHeadingStyles}>
              <Typography variant="subtitle2">Orders</Typography>
            </Box>
            <Box sx={{ ...columnHeadingStyles }}>
              <Typography variant="subtitle2">Published on</Typography>
            </Box>
            <Box sx={{ ...columnHeadingStyles, justifyContent: 'center' }}>
              <Typography variant="subtitle2">Action</Typography>
            </Box>
          </Grid>
          {currentProducts.map((product) => (
            <Grid item xs={12} key={product.id}>
              <ProductCard
                product={product}
                onDelete={() => handleDeleteClick(product)}
                onEdit={() => handleEditClick(product)}
                onClick={() => navigate(`/product/${product.id}`)}
              />
            </Grid>
          ))}
          <DeletePopup
            open={deletePopupOpen}
            onClose={() => setDeletePopupOpen(false)}
            onConfirm={handleDeleteConfirm}
          />
        </Grid>
      ) : (
        <Typography variant="h6" align="center">
          No Product, Add new Product
        </Typography>
      )}

      {filteredProducts.length > 10 && (
        <Box sx={footerStyles}>
          <Button
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
          >
            {'<<'}
          </Button>
          {Array.from({ length: 3 }, (_, index) => {
            let pageNumber = currentPage + (index - 1)
            if (
              pageNumber < 1 ||
              pageNumber > Math.ceil(filteredProducts.length / 10)
            )
              return null
            return (
              <Button
                key={pageNumber}
                // variant={currentPage === pageNumber ? 'contained' : 'outlined'}
                color="primary"
                onClick={() => paginate(pageNumber)}
                sx={{
                  fontWeight: currentPage === pageNumber ? 'bold' : 'regular',
                }}
              >
                {pageNumber}
              </Button>
            )
          })}
          <Button
            disabled={currentPage === Math.ceil(filteredProducts.length / 10)}
            onClick={() => paginate(currentPage + 1)}
          >
            {'>>'}
          </Button>
        </Box>
      )}
    </Box>
  )
}

export default Products
