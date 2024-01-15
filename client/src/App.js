import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Signin'
import Profile from './screens/Profile'
import Signup from './screens/Signup'
import Signin from './screens/Signin'
import CreatePost from './screens/createPost'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/create" element={<CreatePost/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
