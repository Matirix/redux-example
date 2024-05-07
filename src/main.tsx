import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './state/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // Provide our store to the provider, which will then be available to all components in our app.
  <Provider store={store}>
    <App />
  </Provider>

)
