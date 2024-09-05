import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Container, Button } from '@mui/material';
import { addToCart } from '../redux/cartSlice'; 

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === parseInt(id))
  );
  const dispatch = useDispatch();

  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Container sx={{ padding: 3 }}>
      <Card sx={{ maxWidth: 600, margin: 'auto' }}>
        <CardMedia
          component="img"
          height="300"
          image={product.image}
          alt={product.title}
          style={{ objectFit: 'contain', padding: '20px' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {product.description}
          </Typography>
          <Typography variant="h6" color="text.primary">
            Price: ${product.price}
          </Typography>
          <Button
            onClick={handleAddToCart}
            variant="contained"
            color="secondary"
            sx={{ mt: 3 }}
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetails;
