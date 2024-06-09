import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      <TextField fullWidth label="Name" margin="normal" 
      sx={{
        '& .MuiOutlinedInput-root': {
          '&:hover fieldset': {
            borderColor: '#A68DAD',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#A68DAD',
          },
        },
        '& .MuiInputLabel-root.Mui-focused': { color: '#A68DAD' }
      }}
      />
      <TextField fullWidth label="Email" margin="normal"
      sx={{
        '& .MuiOutlinedInput-root': {
          '&:hover fieldset': {
            borderColor: '#A68DAD',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#A68DAD',
          },
        },
        '& .MuiInputLabel-root.Mui-focused': { color: '#A68DAD' }
      }}
       />
      <TextField fullWidth label="Message" margin="normal" multiline rows={4} 
      sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#A68DAD',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#A68DAD',
            },
          },
          '& .MuiInputLabel-root.Mui-focused': { color: '#A68DAD' }
        }} />
      <Button variant="contained" sx={{ background: '#A68DAD', '&:hover': { background: '#9279A1' }, fontSize: '0.875rem' }}>Submit</Button>
    </Box>
  );
};

export default Contact;
