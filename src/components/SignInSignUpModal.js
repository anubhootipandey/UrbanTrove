import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Tabs, Tab, Box } from '@mui/material';

const SignInSignUpModal = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSignIn = () => {
    alert('Sign In');
  };

  const handleSignUp = () => {
    alert('Sign Up');
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab label="Sign In" />
          <Tab label="Sign Up" />
        </Tabs>
      </DialogTitle>
      <DialogContent>
        {activeTab === 0 && (
          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              margin="normal"
              variant="outlined"
              sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#A68DAD' },
              '& .MuiInputLabel-root.Mui-focused': { color: '#A68DAD' }
             }} 
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
              sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#A68DAD' },
              '& .MuiInputLabel-root.Mui-focused': { color: '#A68DAD' }
             }} 
            />
          </Box>
        )}
        {activeTab === 1 && (
          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Name"
              type="text"
              margin="normal"
              variant="outlined"
              sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#A68DAD' },
              '& .MuiInputLabel-root.Mui-focused': { color: '#A68DAD' }
             }} 
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              margin="normal"
              variant="outlined"
              sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#A68DAD' },
              '& .MuiInputLabel-root.Mui-focused': { color: '#A68DAD' }
             }} 
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
              sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#A68DAD' },
              '& .MuiInputLabel-root.Mui-focused': { color: '#A68DAD' }
             }} 
            />
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              margin="normal"
              variant="outlined"
              sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#A68DAD' },
              '& .MuiInputLabel-root.Mui-focused': { color: '#A68DAD' }
             }} 
            />
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        {activeTab === 0 ? (
          <Button onClick={handleSignIn} sx={{ background: '#A68DAD', '&:hover': { background: '#9279A1' } }} variant="contained">
            Sign In
          </Button>
        ) : (
          <Button onClick={handleSignUp} sx={{ background: '#A68DAD', '&:hover': { background: '#9279A1' } }} variant="contained">
            Sign Up
          </Button>
        )}
        <Button onClick={onClose} sx={{ borderColor: '#A68DAD', color : '#D0A2F7' }} variant="outlined">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignInSignUpModal;
