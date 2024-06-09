import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box, Typography, Button, Card, CardContent, CardMedia, Select, MenuItem, FormControl, InputLabel, IconButton, Stack, Rating } from '@mui/material';
import { AddCircle, RemoveCircle } from '@mui/icons-material';
import { useCart } from './CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { cart, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const isInCart = (product) => {
    return cart.some(item => item.id === product.id);
  };

  const handleAddRemoveCart = () => {
    if (isInCart(product)) {
      removeFromCart(product);
    } else {
      addToCart({ ...product, size, quantity });
    }
  };

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <Box sx={{ padding: 3 }}>
      {product && (
        <Card sx={{ display: 'flex', marginBottom: 2 }}>
          <CardMedia
            component="img"
            image={product.image}
            alt={product.title}
            sx={{ width: 300, objectFit: 'cover' }}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h4" gutterBottom>{product.title}</Typography>
            <Typography variant="h6" gutterBottom>${product.price}</Typography>
            <Typography variant="body1" gutterBottom>{product.description}</Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
              <FormControl sx={{ 
                '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#A68DAD',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#A68DAD',
            },
          },
          '& .MuiInputLabel-root.Mui-focused': { color: '#A68DAD' },
                minWidth: 120, 
                marginRight: 2 
                }}>
                <InputLabel id="size-label">Size</InputLabel>
                <Select
                  labelId="size-label"
                  id="size"
                  value={size}
                  onChange={handleSizeChange}
                >
                  <MenuItem value="S">S</MenuItem>
                  <MenuItem value="M">M</MenuItem>
                  <MenuItem value="L">L</MenuItem>
                  <MenuItem value="XL">XL</MenuItem>
                </Select>
              </FormControl>

              <Typography variant="body1" sx={{ marginRight: 2 }}>Quantity:</Typography>
              <IconButton onClick={handleDecrement} size="small">
                <RemoveCircle />
              </IconButton>
              <Typography variant="body1">{quantity}</Typography>
              <IconButton onClick={handleIncrement} size="small">
                <AddCircle />
              </IconButton>
            </Box>

            <Stack direction="row" spacing={1} alignItems="center" sx={{ marginTop: 2 }}>
              <Rating name={`rating-${product.id}`} value={Math.floor(Math.random() * 5) + 1} readOnly />
              <Typography variant="body2" color="textSecondary" sx={{ fontSize: '0.75rem' }}>({Math.floor(Math.random() * 100) + 1})</Typography> {/* Random count */}
            </Stack>

            <Button
              onClick={handleAddRemoveCart}
              variant="contained"
              sx={{ background: '#A68DAD', '&:hover': { background: '#9279A1' }, marginTop: 2 }}
            >
              {isInCart(product) ? 'Remove from Cart' : 'Add to Cart'}
            </Button>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default ProductDetail;
