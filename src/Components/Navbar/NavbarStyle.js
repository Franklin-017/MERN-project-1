import { fade, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>({
  logoIcon: {
    color: '#FDFDFD',
  },
  brandName: {
    fontFamily: "'Dancing Script', cursive",
    display: 'inline-block',
    color: '#FDFDFD'
  },
  searchBox: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    background: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      background: fade(theme.palette.common.white, 0.20)
    },
    marginLeft: theme.spacing(12),
    width: '50%'
  },
  inputBase: {
    color: '#FDFDFD',
    marginLeft: theme.spacing(2)
  },
  searchIcon: {
    color: '#FDFDFD'
  },
  navLinks: {
    display: 'flex',
    width: '25%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  links: {
    cursor: 'pointer',
    color: '#FDFDFD',
    textDecoration: 'none',
  }
}))

export default useStyles;