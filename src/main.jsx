import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import App from './App'
import './index.css'  // This line imports the Tailwind CSS
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Theme>
            <App />
          </Theme>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)