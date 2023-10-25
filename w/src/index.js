import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
// import { apiSlice } from './services/apiSlice'
import { store } from './store/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)