
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import AllBeers from './components/allBeers/AllBeers'
import BeerDetails from './components/beerDetails/BeerDetails'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allbeers' element={<AllBeers/>}/>
        <Route path='/allbeers/:beerdetails' element={<BeerDetails/>}/>
      </Routes>
    </>
  )
}

export default App
