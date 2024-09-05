import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { addToCart } from '../redux/cartSlice'; 

const ProductList = () => {
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const dispatch = useDispatch();

  if (status === 'loading') {
    return <Typography variant="h6">Loading...</Typography>;
  }

  if (status === 'failed') {
    return <Typography variant="h6">Error loading products</Typography>;
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 3, 
        }}
      >
        {products && products.map((product) => (
          <Card key={product.id} sx={{ maxWidth: 300, flex: '1 0 21%' }}>
            <CardMedia
              component="img"
              height="200" 
              image={product.image}
              alt={product.title}
              sx={{
                width: '100%',       
                height: '200px',     
                objectFit: 'contain', 
                objectPosition: 'center' 
              }}
            />
            <CardContent>
              <Typography 
                gutterBottom 
                variant="h6" 
                component="div"
                sx={{
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2 
                }}
              >
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${product.price}
              </Typography>
              <Button
                component={Link}
                to={`/product/${product.id}`}
                variant="outlined"
                color="primary"
                sx={{ mt: 2 }}
              >
                View Details
              </Button>
              <Button
                onClick={() => handleAddToCart(product)}
                variant="contained"
                color="secondary"
                sx={{ mt: 2 }}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ProductList;
