import './App.scss'
import Home from './routes/Home'
import Contact from './routes/Contact'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}

export default App
