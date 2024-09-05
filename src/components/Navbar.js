import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, IconButton, Badge, Typography, Drawer, List, ListItem, ListItemText, Divider, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.length;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            E-Commerce App
          </Typography>
          <IconButton onClick={handleDrawerOpen} color="inherit">
            <Badge badgeContent={itemCount} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
        <Box sx={{ width: 300, padding: 2 }}>
          <Typography variant="h6" gutterBottom>
            Cart
          </Typography>
          <List>
            {cartItems.length === 0 ? (
              <Typography variant="body1">Your cart is empty.</Typography>
            ) : (
              cartItems.map((item) => (
                <React.Fragment key={item.id}>
                  <ListItem>
                    <ListItemText
                      primary={item.title}
                      secondary={`$${item.price.toFixed(2)}`}
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))
            )}
          </List>
          {cartItems.length > 0 && (
            <Typography variant="h6" sx={{ marginTop: 2 }}>
              Total Amount: ${calculateTotal()}
            </Typography>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
