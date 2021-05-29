import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import useStyles from './HomeMenuStyle'
import { Paper } from '@material-ui/core'

const HomeMenu = () => {
  const classes = useStyles()
  return (
    <Router>
      <div className={ classes.NavbarContainer }>
        <Paper className={ classes.imageMenu }>
          <Link className={ classes.link } to="#">
            <img className={ classes.image } src='https://i1.wp.com/www.technpick.com/wp-content/uploads/2019/07/best-gaming-laptop-under-800-dollars.jpg?fit=1920%2C1080&ssl=1' alt='Laptop' />
            <p className={ classes.textMenu } >Laptop</p>
          </Link>
          <Link className={ classes.link } to="#">
            <img className={ classes.image } src='https://esemanal.mx/revista/wp-content/uploads/2019/06/Aorus-CV27F-de-Gigabyte-Technology-300x228.jpg' alt='Monitor' />
            <p className={ classes.textMenu } >Monitor</p>
          </Link>
          <Link className={ classes.link } to="#">
            <img className={ classes.image } src='https://dt7v1i9vyp3mf.cloudfront.net/styles/news_large/s3/imagelibrary/c/core_wars_01-4PiDwnUapQhsFBF.4_xHwTdl634vpvfw.jpg' alt='Processor' />
            <p className={ classes.textMenu } >Processor</p>
          </Link>
          <Link className={ classes.link } to="#">
            <img className={ classes.image } src='https://cdn.mos.cms.futurecdn.net/DWMCVvK5PTejqYkcpoeTC7.jpg' alt='Motherboard' />
            <p className={ classes.textMenu } >Motherboard</p>
          </Link>
          <Link className={ classes.link } to="#">
            <img className={ classes.image } src='https://cdn.windowsreport.com/wp-content/uploads/2019/11/Best-graphics-cards-for-gamers-1200x1200.jpg' alt='Graphics Card' />
            <p className={ classes.textMenu } >Graphics Card</p>
          </Link>
          <Link className={ classes.link } to="#">
            <img className={ classes.image } src='https://images-na.ssl-images-amazon.com/images/I/71Dxd945J%2BL._SL1500_.jpg' alt='Cooling Fan' />
            <p className={ classes.textMenu } >Cooling Fan</p>
          </Link>
          <Link className={ classes.link } to="#">
            <img className={ classes.image } src='https://image.freepik.com/free-photo/computer-memory-ram-circuit-motherboard-background_150455-1996.jpg' alt='RAM' />
            <p className={ classes.textMenu } >RAM</p>
          </Link>
          <Link className={ classes.link } to="#">
            <img className={ classes.image } src='https://cdn.mos.cms.futurecdn.net/oXCjRZWH6osiNEaaVNjdUX.jpg' alt='SSD & HDD' />
            <p className={ classes.textMenu } >SSD & HDD</p>
          </Link>
        </Paper>
      </div>
    </Router>
  )
}

export default HomeMenu
