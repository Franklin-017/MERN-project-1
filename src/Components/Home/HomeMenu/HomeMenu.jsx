import React from 'react'
import useStyles from './HomeMenuStyle'

const HomeMenu = () => {
  const classes = useStyles()
  return (
    <paper>
      <img className={ classes.image } src='' alt='Grocery' />
      <img className={ classes.image } src='https://assets.newatlas.com/dims4/default/bce14e6/2147483647/strip/true/crop/1600x1066+0+1/resize/728x485!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F4d%2F4a%2F5acac4fd4c6a887fdeca93db5edf%2F00-sony.jpg' alt='Mobile Phone' />
      <img className={ classes.image } src='' alt='Fasion' />
      <img className={ classes.image } src='' alt='Electronics' />
      <img className={ classes.image } src='' alt='Home' />
      <img className={ classes.image } src='' alt='Application' />
      <img className={ classes.image } src='' alt='Application' />
    </paper>
  )
}

export default HomeMenu
