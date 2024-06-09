import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Card, CardContent, Grid, Stack, TextField, MenuItem, Divider } from '@mui/material';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const sizes = ['S', 'M', 'L', 'XL'];

  const handleBuy = (product) => {
    navigate('/transaction', { state: { product } });
  };

  const getTotalCartAmount = () => {
    return cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  return (
    <Box sx={{ padding: { xs: 2, md: 3 } }}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>Shopping Cart</Typography>
      {cart.length === 0 ? (
        <Typography variant="h6">Your cart is empty</Typography>
      ) : (
        <Card sx={{ padding: { xs: 1, md: 2 } }}>
          <CardContent>
            <Grid container spacing={2}>
              {cart.map((product) => (
                <Grid item key={product.id} xs={12}>
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
                      <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                      <Box sx={{ marginLeft: { xs: 0, sm: 2 }, marginTop: { xs: 1, sm: 0 } }}>
                        <Typography variant="h6" sx={{ fontSize: '1rem' }}>{product.title}</Typography>
                        <Typography variant="body1" sx={{ fontSize: '0.875rem' }}>${product.price}</Typography>
                        <TextField
                          select
                          label="Size"
                          value={product.size || ''}
                          onChange={(e) => product.size = e.target.value}
                          sx={{ marginTop: 1, width: '100px' }}
                        >
                          {sizes.map((size) => (
                            <MenuItem key={size} value={size}>{size}</MenuItem>
                          ))}
                        </TextField>
                        <TextField
                          type="number"
                          label="Quantity"
                          value={product.quantity || 1}
                          onChange={(e) => product.quantity = e.target.value}
                          inputProps={{ min: 1 }}
                          sx={{ marginTop: 1, width: '100px' }}
                        />
                      </Box>
                    </Box>
                    <Stack direction="row" spacing={1} sx={{ marginTop: { xs: 2, md: 0 } }}>
                      <Button
                        onClick={() => removeFromCart(product)}
                        variant="contained"
                        sx={{ background: '#A68DAD', '&:hover': { background: '#9279A1' }, }}
                      >
                        Remove
                      </Button>
                      <Button
                        onClick={() => handleBuy(product)}
                        variant="contained"
                        sx={{ background: '#A68DAD', '&:hover': { background: '#9279A1' }, fontSize: '0.875rem' }}
                      >
                        Buy
                      </Button>
                    </Stack>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
        <Box sx={{ maxWidth: 400, padding: 3, background: '#FFFFFF', borderRadius: 0, boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h4" gutterBottom sx={{ marginBottom: 2 }}>
            Cart Totals
          </Typography>
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
              <Typography variant="body1">Subtotal</Typography>
              <Typography variant="body1">${getTotalCartAmount()}</Typography>
            </Box>
            <Divider sx={{ marginBottom: 1 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
              <Typography variant="body1">Shipping</Typography>
              <Typography variant="body1">Free</Typography>
            </Box>
            <Divider sx={{ marginBottom: 1 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h5">Total</Typography>
              <Typography variant="h5">${getTotalCartAmount()}</Typography>
            </Box>
          </Box>
          <Button variant="contained" sx={{ backgroundColor: '#A68DAD', '&:hover': { backgroundColor: '#9279A1' }, marginTop: 2 }}>
            Proceed to Checkout
          </Button>
        </Box>
        <Box sx={{ width: 800, height: 100, padding: 3, background: '#FFFFFF', borderRadius: 0, boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="body1" gutterBottom>
            If you have a promo code, enter it here
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
            <TextField
              type="text"
              placeholder="Promo Code"
              variant="outlined"
              sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#A68DAD' },
              marginRight: 1, flex: 1
           }} 
              InputProps={{ sx: { borderRadius: 0 } }} 
            />
            <Button variant="contained" sx={{ backgroundColor: '#A68DAD', '&:hover': { backgroundColor: '#9279A1' } }}>
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
