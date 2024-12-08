import React from 'react';
import products from "./products"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Typography, Grid2, Button } from '@mui/material';

export const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Products</h1>
      </div>
      <div className='products'>
        <Grid2 container spacing={3} paddingLeft={10} paddingRight={10} paddingBottom={10}>
          {products.map(product => {
            return (
              <Grid2 item xs={4}>
                <Card>
                  <CardContent>
                    <Typography>
                      {product.name}
                    </Typography>
                    <Typography>
                      {product.description}
                    </Typography>
                    <Typography>
                      {product.price}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <Button size="small">Add to cart</Button>
                  </CardActions>
                </Card>
              </Grid2>
            );
          })}
        </Grid2>
      </div>
    </div>
  );
};