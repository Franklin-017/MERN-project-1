import { makeStyles } from "@material-ui/core";

const productStyle = makeStyles(() => ({
  paper: {
    padding: '20px',
    borderRadius: '2px',
    '&:hover': {
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    }
  },
  image: {
    width: '100%'
  },
  brandText: {
    fontWeight: 'bold',
    opacity: '0.7'
  },
  productNameTest: {
    fontWeight: '400',
    fontSize: '14px'
  },
  priceDetails: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  productPrice: {
    fontWeight: 'bold',
    marginRight: '10px'
  },
  discountPrice: {
    fontWeight: 'lighter',
    textDecoration: 'line-through',
    color: '#afb9c8',
    fontSize: '14px',
    marginRight: '10px'
  },
  discountPercentage: {
    color: '#52b69a',
    fontWeight: 'bold',
    fontSize: '14px'
  }
}))

export default productStyle