import React from 'react';
import products from "./products"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Grid2, Button } from '@mui/material';

export const Shop = () => {
  return (
    <div className='shop'>
      <Typography variant="h4" component="div" marginTop="20px">
        Products
      </Typography>
      <div className='products'>
        <Grid2 container spacing={3} paddingLeft={5} paddingRight={5} paddingBottom={10} marginTop="20px">
          {products.map(product => {
            return (
              <Grid2 item xs={4}>
                <Card sx={{ width: 270, height: 400}}>
                <CardMedia
                  sx={{ height: 250 }}
                  image= {require ("./record.jpg")}
                  title="record"
                />
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