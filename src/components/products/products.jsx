import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Product from './product/product';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {

    const classes = useStyles();
    return (
        <Container className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products ? products.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid>
                )) : null}
            </Grid>
        </Container>
    );
}

export default Products;