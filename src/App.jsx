import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Landingpage from './Pages/Landingpage'
import Home from './Pages/Home'
import History from './Pages/History'

function App() {
  

  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<Landingpage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/history' element={<History/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App
