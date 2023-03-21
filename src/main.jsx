import { ThemeProvider } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { JournalApp } from './JournalApp'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    {/* </ThemeProvider> */}
  </React.StrictMode>
)
