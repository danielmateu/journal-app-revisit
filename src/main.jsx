// import { ThemeProvider } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from '../store/store'
import { JournalApp } from './JournalApp'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
      {/* </ThemeProvider> */}
    </Provider>
  </React.StrictMode>
)
