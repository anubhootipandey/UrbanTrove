import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import { toast } from 'react-toastify';

const TransactionDetail = () => {
  const location = useLocation();
  const { product } = location.state || { product: null };

  if (!product) {
    return <Typography variant="h6">No product details available.</Typography>;
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>Transaction Details</Typography>
      <Card sx={{ padding: 2 }}>
        <CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={product.image} alt={product.title} style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
            <Typography variant="h6" sx={{ marginTop: 2 }}>{product.title}</Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>Price: ${product.price}</Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>Size: {product.size}</Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>Quantity: {product.quantity}</Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>Total: ${product.price * product.quantity}</Typography>
          </Box>
        </CardContent>
      </Card>
      <Button
        variant="contained"
        sx={{ marginTop: 3,  background: '#A68DAD', '&:hover': { background: '#9279A1' }, }}  
        onClick={() => toast.success("Transaction done successfully!")}
      >
        Complete Purchase
      </Button>
    </Box>
  );
};

export default TransactionDetail;
