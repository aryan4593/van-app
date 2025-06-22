import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

export default function App(){
  return(
    <>  
    <BrowserRouter>
      <header>
        <nav>
          <Link to="./">#VANLIFE</Link>
          <Link to="./About">About</Link>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}