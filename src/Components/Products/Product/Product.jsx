import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import productStyle from './ProductStyle'

const Product = () => {
  const classes = productStyle()
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper className={ classes.paper } elevation={0} square>
        <img className={ classes.image } src="https://rukminim1.flixcart.com/image/580/696/jdj4k280/cap/a/n/x/free-half-net-cap-red-oddeven-original-imaf2fdrrwh3bjj5.jpeg?q=50" alt='RedHat' />
        <Typography className={ classes.brandText } color='textSecondary'>ODDEVEN</Typography>
        <Typography className={ classes.productNameTest } color='textPrimary'>Baseball Hat</Typography>
        <div className={ classes.priceDetails }>
          <Typography className={ classes.productPrice }>$10</Typography>
          <Typography className={ classes.discountPrice }>$1</Typography>
          <Typography className={ classes.discountPercentage }>10% off</Typography>
        </div>
      </Paper>
    </Grid>
  )
}

export default Product
