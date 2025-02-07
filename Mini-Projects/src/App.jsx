import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/BgChanger'
import Blog from './pages/Blog'
import Contect from './pages/Contect'
import About from './pages/About'
import BgChanger from './pages/BgChanger'
import PassGenrator from './pages/PassGenrator'

function App() {
  const [count, setCount] = useState(0)

  return (
  <Routes>
    <Route path='/' element={<Home /> }/>
    <Route path='/bgchanger' element={<BgChanger /> }/>
    <Route path='/passgen' element={<PassGenrator/>}/>
    <Route path='/contact' element={< Contect/> }/>
    <Route path='/about' element={< About/> }/>
    <Route path='/blog' element={<Blog /> }/>


  </Routes>
  )
} 

export default App
