
import {  Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import { routePath } from './constant/Route'
import Footer from './components/Footer'
import CategoryMovies from './pages/CategoryMovies'

function App() {


  return (
    <>
      <Header />

      <Routes>

      <Route path='/' element={<Home />} />
          <Route path={routePath.categories} element={<CategoryMovies />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
