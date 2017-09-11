import React from 'react'
import ReactDom from 'react-dom'
import Header from './component/header'
import {Provider} from 'react-redux'
import storeCreate from './lib/store-create'

let AppContainer = () => (
  <Provider store = {storeCreate()}>
    <Header />
  </Provider>
)

ReactDom.render (<AppContainer/>,
document.getElementById('root'))
