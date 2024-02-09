import React, { useEffect, useState } from 'react'
import { Grid, Box, Typography, TextField, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ProductCard from '../Components/ProductCard'
import DeletePopup from '../Components/DeletePopup'
import { useNavigate } from 'react-router-dom'

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
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [products, setProducts] = useState([])

  const fetchProduct = () => {
    //redux dispatch api call
    const response = [
      {
        id: 1,
        name: 'Boat Watch 210',
        category: 'Electronics',
        price: '1299',
        stock: '234',
        orders: '25',
        publishedOn: '2015-05-01T00:10:32',
      },
      {
        id: 2,
        name: 'Samsung Galaxy S21',
        category: 'Electronics',
        price: '999',
        stock: '500',
        orders: '100',
        publishedOn: '2021-01-29T08:00:00',
      },
      {
        id: 3,
        name: 'Sony PlayStation 5',
        category: 'Electronics',
        price: '499',
        stock: '1000',
        orders: '300',
        publishedOn: '2020-11-12T00:00:00',
      },
      {
        id: 4,
        name: 'Apple MacBook Pro',
        category: 'Electronics',
        price: '1499',
        stock: '200',
        orders: '50',
        publishedOn: '2020-11-10T12:00:00',
      },
      {
        id: 5,
        name: 'Nike Air Zoom Pegasus 38',
        category: 'Fashion',
        price: '120',
        stock: '300',
        orders: '80',
        publishedOn: '2021-03-01T09:00:00',
      },
      {
        id: 6,
        name: 'Amazon Kindle Paperwhite',
        category: 'Electronics',
        price: '149',
        stock: '600',
        orders: '200',
        publishedOn: '2020-10-20T14:00:00',
      },
      {
        id: 7,
        name: 'Bose QuietComfort 35 II',
        category: 'Electronics',
        price: '299',
        stock: '150',
        orders: '70',
        publishedOn: '2018-09-01T10:00:00',
      },
      {
        id: 8,
        name: 'Adidas Ultraboost 21',
        category: 'Fashion',
        price: '180',
        stock: '400',
        orders: '120',
        publishedOn: '2021-02-15T11:30:00',
      },
      {
        id: 9,
        name: 'LG OLED CX Series 4K TV',
        category: 'Electronics',
        price: '1999',
        stock: '100',
        orders: '30',
        publishedOn: '2020-04-01T00:00:00',
      },
      {
        id: 10,
        name: 'Dell XPS 13',
        category: 'Electronics',
        price: '1299',
        stock: '100',
        orders: '40',
        publishedOn: '2020-10-15T08:00:00',
      },
      {
        id: 11,
        name: 'Gucci Ace Sneakers',
        category: 'Fashion',
        price: '590',
        stock: '80',
        orders: '25',
        publishedOn: '2021-04-10T15:30:00',
      },
      {
        id: 12,
        name: 'Fitbit Versa 3',
        category: 'Electronics',
        price: '229',
        stock: '300',
        orders: '90',
        publishedOn: '2020-09-25T16:00:00',
      },
      {
        id: 13,
        name: 'Canon EOS R5',
        category: 'Electronics',
        price: '3899',
        stock: '50',
        orders: '15',
        publishedOn: '2020-07-09T13:45:00',
      },
      {
        id: 14,
        name: 'Rolex Submariner',
        category: 'Fashion',
        price: '9000',
        stock: '10',
        orders: '5',
        publishedOn: '2021-06-20T10:00:00',
      },
      {
        id: 15,
        name: 'Google Pixel 6 Pro',
        category: 'Electronics',
        price: '899',
        stock: '400',
        orders: '150',
        publishedOn: '2021-10-19T09:30:00',
      },
      {
        id: 16,
        name: 'Louis Vuitton Neverfull MM',
        category: 'Fashion',
        price: '1500',
        stock: '30',
        orders: '10',
        publishedOn: '2021-09-05T12:00:00',
      },
      {
        id: 17,
        name: 'Xbox Series X',
        category: 'Electronics',
        price: '499',
        stock: '800',
        orders: '200',
        publishedOn: '2020-11-10T00:00:00',
      },
      {
        id: 18,
        name: "Levi's 501 Original Fit Jeans",
        category: 'Fashion',
        price: '69',
        stock: '200',
        orders: '80',
        publishedOn: '2021-08-15T11:00:00',
      },
      {
        id: 19,
        name: 'HP Spectre x360',
        category: 'Electronics',
        price: '1399',
        stock: '120',
        orders: '35',
        publishedOn: '2021-02-10T10:30:00',
      },
      {
        id: 20,
        name: 'Chanel Classic Flap Bag',
        category: 'Fashion',
        price: '6000',
        stock: '20',
        orders: '8',
        publishedOn: '2021-07-01T14:00:00',
      },
      {
        id: 21,
        name: 'DJI Mavic Air 2',
        category: 'Electronics',
        price: '799',
        stock: '150',
        orders: '50',
        publishedOn: '2020-05-15T08:30:00',
      },
    ]
    setProducts(response)
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  const filteredProducts = searchQuery.trim()
    ? products.filter(
        (product) =>
          product.name
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
            <Grid item xs={12} key={product.name}>
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
