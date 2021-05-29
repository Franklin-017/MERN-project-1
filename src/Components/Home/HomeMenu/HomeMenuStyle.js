import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  NavbarContainer: {
    marginTop: '20px',
  },
  imageMenu: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#f50057',
    padding: '10px'
  },
  image: {
    width: '75px',
    height: '75px',
    border: '2px solid #fefefe',
    borderRadius: '50%',
    transition: 'all 0.3s',
    '$:hover': {
      transform: 'scale(1.5)',
    }
  },
  textMenu: {
    textAlign: 'center',
    color: '#fefefe',
  },
  link: {
    textDecoration: 'none'
  }
}))

export default useStyles