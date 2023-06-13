import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/root/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'alertifyjs/build/css/alertify.min.css'
import { BrowserRouter } from 'react-router-dom'
import configureStore from './redux/reducers/configureStore'
import {Provider} from 'react-redux'
import {createRoot} from 'react-dom/client'
const rootElement =document.getElementById('root');
const root=createRoot(rootElement);

const store = configureStore()
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>

  </BrowserRouter>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
