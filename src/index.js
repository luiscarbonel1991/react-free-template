import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { HashRouter } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';
import ScrollToTop from './ScrollToTop'

  ReactDOM.render(
    <HashRouter>
      <ScrollToTop>
          <App/>
      </ScrollToTop>
    </HashRouter>,
    document.getElementById('root')
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below.
  serviceWorker.unregister();