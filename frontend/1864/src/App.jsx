import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Header from './components/header/Header'
import HomePage from './pages/HomePage'
import UserAccess from './pages/UserAccess'
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<HomePage />}/>
        <Route path="/login" element={<UserAccess />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App