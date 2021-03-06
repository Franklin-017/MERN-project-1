import { AppBar, IconButton, InputBase, Toolbar, Typography } from "@material-ui/core"
import { AcUnit, Search } from '@material-ui/icons'
import useStyles from "./NavbarStyle"
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Home from '../Home/Home'

const Navbar = () => {
  const classes = useStyles()
  return (
    <div>
      <Router>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Link to='/'>
              <IconButton className={ classes.logoIcon } disableFocusRipple disableRipple disableTouchRipple>
                <AcUnit />
              </IconButton>
              <Typography className={ classes.brandName } variant="h6">White</Typography>
            </Link>
            <div className={ classes.searchBox }>
              <IconButton disabled>
                <Search className={ classes.searchIcon }/>
              </IconButton>
              <InputBase placeholder="Search..." className={ classes.inputBase }/>
            </div>
            <div className={ classes.navLinks }>
              <Link to='/cart' style={{ paddingRight: '100px' }} className={ classes.links }>
                Cart
              </Link>
              <Link to='/login' className={ classes.links }>
                Login
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Navbar
