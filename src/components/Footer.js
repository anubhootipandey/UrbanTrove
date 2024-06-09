import React from 'react';
import { Box, Button, Typography, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <Box component="footer" align="center" sx={{ background: 'linear-gradient(to right, #F0ECE3, #DFD3C3)', minHeight: 150, padding: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Button sx={{ color: '#A68DAD' }} component={Link} to="/contact">Contact</Button>
            <Button sx={{ color: '#A68DAD' }} component={Link} to="/faq">FAQ</Button>
            <Button sx={{ color: '#A68DAD' }} component={Link} to="/about">About</Button>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button sx={{ color: '#A68DAD' }} component={Link} to="/terms">Terms and Conditions</Button>
            <Button sx={{ color: '#A68DAD' }} component={Link} to="/privacy">Privacy Protection</Button>
            <Button sx={{ color: '#A68DAD' }} component={Link} to="/help">Help Center</Button>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <Typography variant="body1" sx={{ color: '#A68DAD' }}>Follow us:</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 1 }}>
              <FacebookIcon sx={{ fontSize: '2rem', marginRight: 1, color: '#A68DAD' }} />
              <TwitterIcon sx={{ fontSize: '2rem', marginRight: 1, color: '#A68DAD' }} />
              <InstagramIcon sx={{ fontSize: '2rem', marginRight: 1, color: '#A68DAD' }} />
              <WhatsAppIcon sx={{ fontSize: '2rem', marginRight: 1, color: '#A68DAD' }} />
            </Box>
          </Box>
        </Box>

        {/* Horizontal Divider */}
        <Divider sx={{ width: '100%', marginTop: 2, marginBottom: 1, backgroundColor: '#C7B198' }} />

        {/* Bottom section with copyright */}
        <Typography variant="body1" fontWeight="bold" align="center" sx={{ color: '#A68DAD' }}>
          © 2024 eCommerce. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
