import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Typography, AppBar} from '@mui/material'
import {makeStyles} from '@mui/material/styles'
import VideoPlayer from './components/VideoPlayer.jsx'
import Notifications from './components/Notifications'
import Options from './components/Options'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <AppBar position="static" color="inherit">
          <Typography variant="h2" align="center"></Typography>
        </AppBar>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>

    </div>
    </>
  )
}

export default App
