import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store/store.ts'
import { StyleGlobal } from './StylesGlobal.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <StyleGlobal />
    <App />
    </Provider>
  </React.StrictMode>,
)
