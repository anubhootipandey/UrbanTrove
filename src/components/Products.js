import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Button, TextField, Select, MenuItem, InputLabel, Rating, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const { cart, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        const productsWithRating = response.data.map(product => ({
          ...product,
          rating: generateRandomRating() 
        }));
        setProducts(productsWithRating);
        setFilteredProducts(productsWithRating);
      })
      .catch(error => console.error(error));

    axios.get('https://fakestoreapi.com/products/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error(error));
  }, []);

  const isInCart = (product) => {
    return cart.some(item => item.id === product.id);
  };

  const handleToggleCart = (product) => {
    if (isInCart(product)) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  const handleSearch = (event) => {
    const keyword = event.target.value.toLowerCase();
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(keyword)
    );
    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    if (category === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  const generateRandomRating = () => {
    return Math.floor(Math.random() * 5) + 1;
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ marginBottom: 3, display: 'flex', alignItems: 'center' }}>
        <TextField
          label="Search Products"
          variant="outlined"
          onChange={handleSearch}
          sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#A68DAD' },
            '& .MuiInputLabel-root.Mui-focused': { color: '#A68DAD', marginRight: 2, width: "700px" }
           }} 
        />
        <InputLabel sx={{ marginRight: 2 }}>Category:</InputLabel>
        <Select
          value={selectedCategory}
          onChange={handleCategoryChange}
          variant="outlined"
          style={{ minWidth: 120 }}
        >
          <MenuItem value="">All</MenuItem>
          {categories.map(category => (
            <MenuItem key={category} value={category}>{category}</MenuItem>
          ))}
        </Select>
      </Box>

      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card sx={{ background: '#F0ECE3', height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                sx={{ height: 250 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontSize: '1rem' }}>{product.title}</Typography>
                <Typography variant="body2" color="textSecondary" sx={{ fontSize: '0.875rem', marginBottom: 1 }}>${product.price}</Typography>
                <Stack direction="row" spacing={1} sx={{ marginBottom: 1 }}>
                  <Rating name={`rating-${product.id}`} value={product.rating} readOnly />
                  <Typography variant="body2" color="textSecondary" sx={{ fontSize: '0.75rem', marginLeft: 1 }}>({Math.floor(Math.random() * 100) + 1})</Typography> {/* Random count */}
                </Stack>
                <Button component={Link} to={`/products/${product.id}`} variant="contained" sx={{ backgroundColor: '#A68DAD', '&:hover': { backgroundColor: '#9279A1' }, fontSize: '0.845rem' }}>View Details</Button>
                <Button
                  onClick={() => handleToggleCart(product)}
                  variant="contained"
                  sx={{ background: '#C7B198', '&:hover': { backgroundColor: '#9279A1' }, color: '#F0ECE3', marginLeft: 1, fontSize: '0.845rem' }}
                >
                  {isInCart(product) ? 'Remove from Cart' : 'Add to Cart'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
