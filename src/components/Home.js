import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';
import PosterImg from '../assets/shopping.png';
import banner from '../assets/banner.png';

const Home = () => {
  const [electronicsProducts, setElectronicsProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/electronics')
      .then(response => response.json())
      .then(data => setElectronicsProducts(data))
      .catch(error => console.error('Error fetching electronics products:', error));
  }, []);

  const featuredProducts = [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 19.99,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts',
      price: 24.99,
      image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    },
    {
      id: 3,
      title: 'Mens Cotton Jacket',
      price: 29.99,
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    },
  ];

  const clothingBrands = [
    {
      id: 1,
      name: 'Brand 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Brand 2',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Brand 3',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Brand 4',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <Box sx={{ padding: 3 }}>
      <Box 
        sx={{ 
          // background: '#F0ECE3', 
          padding: 2, 
          marginBottom: 3, 
          height: { xs: 'auto', md: '370px' }, 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img src={PosterImg} alt="Welcome Banner" style={{ maxWidth: '100%' }} />
        </Box>
        <Box sx={{ flex: 1, textAlign: 'left' }}>
          <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
            Welcome to our eCommerce store!
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
            Explore our wide range of products and find the perfect item for you.
          </Typography>
          <Button component={Link} to="/products" variant="contained" endIcon={<ArrowForward />} sx={{ marginTop: 2, backgroundColor: '#A68DAD', '&:hover': { backgroundColor: '#9279A1' } }}>
            Explore Now
          </Button>
        </Box>
      </Box>

      {/* Featured Products Section */}
      <Box sx={{ background: '#DFD3C3', padding: 3, marginBottom: 3, marginTop: 14, minHeight: 500, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Featured Products
        </Typography>
        <Grid container spacing={2}>
          {featuredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{ height: 250 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontSize: '1rem' }}>{product.title}</Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ fontSize: '0.875rem', marginBottom: 1 }}>${product.price}</Typography>
                  <Button component={Link} to={`/products/${product.id}`} variant="contained" sx={{ background: '#A68DAD', '&:hover': { background: '#9279A1' }, fontSize: '0.875rem' }}>View Details</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Clothing Brands Logo Section */}
      <Box sx={{ 
        // background: '#C7B198', 
        padding: 3, 
        marginBottom: 3, 
        textAlign: "center" }}>
        <Typography variant="h4" gutterBottom sx={{ marginBottom: 2 }}>
          Clothing Brands
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {clothingBrands.map((brand) => (
            <Grid item key={brand.id}>
              <img src={brand.image} alt={brand.name} style={{ height: 100 }} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Special Banner Section */}
      <Box sx={{ background: '#DFD3C3', padding: 3, marginBottom: 3, display: 'flex', alignItems: 'center' }}>
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img src={banner} alt="Special Collection" style={{ maxWidth: '100%' }} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" gutterBottom sx={{ fontSize: '2rem', fontWeight: 'bold', color: '#A68DAD' }}>
            Discover Our Special Collection
          </Typography>
          <Button component={Link} to="/special-collection" variant="contained" endIcon={<ArrowForward />} sx={{ backgroundColor: '#A68DAD', '&:hover': { backgroundColor: '#9279A1' } }}>
            Explore Now
          </Button>
        </Box>
      </Box>

      {/* Electronics Products Section */}
      <Box sx={{ padding: 3, marginBottom: 3, minHeight: 500, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Popular Electronics
        </Typography>
        <Grid container spacing={2}>
          {electronicsProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card sx={{ background: '#DFD3C3', height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{ height: 250 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontSize: '1rem' }}>{product.title}</Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ fontSize: '0.875rem', marginBottom: 1 }}>${product.price}</Typography>
                  <Button component={Link} to={`/products/${product.id}`} variant="contained" sx={{ background: '#A68DAD', '&:hover': { background: '#9279A1' }, fontSize: '0.875rem' }}>View Details</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Newsletter Section */}
      <Box sx={{ background: '#F0ECE3', padding: 3, marginBottom: 3, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Get Exclusive Offers on Your Email!
        </Typography>
        <Typography variant="body1">
          Stay up-to-date with our latest offers and products.
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <TextField 
            fullWidth 
            label="Your Email" 
            variant="outlined" 
            sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#A68DAD' },
            '& .MuiInputLabel-root.Mui-focused': { color: '#A68DAD' }
           }} 
          />
          <Button variant="contained" sx={{ background: '#A68DAD', '&:hover': { background: '#9279A1' }, marginTop: 2 }}>Shop Now</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
