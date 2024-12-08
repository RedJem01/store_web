import React from 'react';
import './navbar.css';
import { Typography, Box,  AppBar, Toolbar, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Box align="left" sx={{ flexGrow: 1}}>
            <Typography variant="h6" component="div">
              Web store
            </Typography>
          </Box>
          <Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="Home"
              sx={{ mr: 1 }}
              component={Link} 
              to="/"
            >
              <HomeIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="Cart"
              sx={{ mr: 1 }}
              component={Link} 
              to="/cart"
            >
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};