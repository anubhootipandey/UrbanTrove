import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Badge, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { ShoppingCart, AccountCircle, Menu as MenuIcon } from '@mui/icons-material';
import { useCart } from './CartContext';
import SignInSignUpModal from './SignInSignUpModal';

const Header = () => {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerList = (
    <List>
      <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/products" onClick={toggleDrawer(false)}>
        <ListItemText primary="Products" />
      </ListItem>
      <ListItem button component={Link} to="/contact" onClick={toggleDrawer(false)}>
        <ListItemText primary="Contact" />
      </ListItem>
    </List>
  );

  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(to right, #F0ECE3, #DFD3C3)', color: '#A68DAD' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, display: { sm: 'none' }, color: '#C7B198' }} onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, textDecoration: 'none', color: '#A68DAD' }}
        >
          eCommerce
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button sx={{ color: '#A68DAD' }} component={Link} to="/">Home</Button>
          <Button sx={{ color: '#A68DAD' }} component={Link} to="/products">Products</Button>
          <Button sx={{ color: '#A68DAD' }} component={Link} to="/contact">Contact</Button>
        </Box>
        <IconButton color="inherit" component={Link} to="/cart">
          <Badge badgeContent={cart.length} color="secondary">
            <ShoppingCart sx={{ color: '#A68DAD' }} />
          </Badge>
        </IconButton>
        <IconButton color="inherit" onClick={handleClickOpen}>
          <AccountCircle sx={{ color: '#A68DAD' }} />
        </IconButton>
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
      <SignInSignUpModal open={open} onClose={handleClose} />
    </AppBar>
  );
};

export default Header;
