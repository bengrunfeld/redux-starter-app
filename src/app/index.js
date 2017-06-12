// Libraries
import React from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'

// App Modules
import configureStore from './state/store'
import { App } from './views/layouts'
import { DataTable, Picker } from './views/pages'

let initialState = {
  picker: {data: []}
}

// Store
let store = configureStore(initialState)

const getRoot = () => {
  return (
    <Provider store={store}>
      <App>
        <Picker />
        <DataTable />
      </App>
    </Provider>
  )
}

// Root renderer for the app
render(getRoot(),document.getElementById('main'))
