import React, { memo, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import routes from './router'
import store from './store'

import MYAppFooter from './components/app-footer'
import MYAppHeader from './components/app-header'
import MYAppPlayerBar from './pages/player/app-player-bar'
const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <MYAppHeader/>
          <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
          </Suspense>
        <MYAppFooter/>
        <MYAppPlayerBar/>
      </HashRouter>
    </Provider>
 
  )
})

export default App