import React from 'react'
import { CssBaseline } from '@material-ui/core'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline/>
      <div>
        <Navbar />
      </div>
    </React.Fragment>
  )
}

export default App
