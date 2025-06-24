import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Vans from './pages/Vans.jsx'
import "./server.js"
import VanDetails from './pages/VanDetails.jsx'
import Header from './components/Header.jsx';
import Layout from './components/Layout.jsx';
import Dashboard from './pages/Host/Dashboard.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';
import HostLayout from './pages/Host/Host.jsx';
import HostVans from './pages/Host/HostVans.jsx';
import HostVanDetails from './pages/Host/HostVanDetails.jsx';
import HostVanInfo from './pages/Host/HostVanInfo.jsx';
import HostVanPhotos from './pages/Host/HostVanPhotos.jsx';
import HostVanPricing from './pages/Host/HostVanPricing.jsx';

export default function App(){
  return(
    <>  
    <BrowserRouter>
    
      {/* <Header/> */}
    
      <Routes>

        <Route path='/' element = {<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Vans' element={<Vans/>} />
          <Route path='/Vans/:id' element={<VanDetails/>} />      {/* :id is vans param */}

          <Route path='host' element= {<HostLayout/>}>
            {/* <Route path='' element={<Dashboard/>} />       */}
            <Route index element={<Dashboard/>} />      
            <Route path='income' element={<Income/>} />      
            <Route path='reviews' element={<Reviews/>} />     
            <Route path='vans' element={<HostVans/>} />     

            <Route path='vans/:id' element={<HostVanDetails/>} >
              <Route index element = {<HostVanInfo/>}/>
              <Route path='pricing' element ={<HostVanPricing/>}/>
              <Route path='Photos' element = {<HostVanPhotos/>}/>
            </Route>     
          </Route >
          </Route>
          {/* if we don't use '/' at begining it will get as relative path  */}

      </Routes>
    </BrowserRouter>
    </>
  )
}