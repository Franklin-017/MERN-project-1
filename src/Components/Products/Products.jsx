import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './ProductsStyle'

const Products = () => {
  const classes = useStyles()
  return (
    <div className= { classes.container }>
      <Grid container spacing={2}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Grid>
    </div>
  )
}

export default Products
