import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Success from './Pages/Success'
import { Provider } from 'react-redux'
import Store from './Store/Store'

const App = () => {
  return (
      <Provider store={Store}>
        <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Home/>} />
          <Route path='/success' element ={<Success/>} />
        </Routes>
      </BrowserRouter>
      </Provider>
  )
}

export default App