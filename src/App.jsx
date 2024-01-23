
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import AllBeers from './pages/allBeers/AllBeers'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allbeers' element={<AllBeers/>}/>
      </Routes>
    </>
  )
}

export default App
