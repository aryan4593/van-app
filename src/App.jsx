import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Vans,{loader as vansLoader} from './pages/Vans.jsx'
import "./server.js"
import VanDetails , {loader as vanDetailLoader } from './pages/VanDetails.jsx'
import Header from './components/Header.jsx';
import Layout from './components/Layout.jsx';
import Dashboard from './pages/Host/Dashboard.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';
import HostLayout from './pages/Host/Host.jsx';
import HostVans,{loader as hostVansLoader } from './pages/Host/HostVans.jsx';
import HostVanDetails, {loader as hostVanDetailsLoader } from './pages/Host/HostVanDetails.jsx';
import HostVanInfo from './pages/Host/HostVanInfo.jsx';
import HostVanPhotos from './pages/Host/HostVanPhotos.jsx';
import HostVanPricing from './pages/Host/HostVanPricing.jsx';
import NotFound from './pages/NotFound.jsx';
import ErrorComponent from './components/ErrorComponent.jsx';
import Login, {loader as loginLoader, action as loginAction} from './pages/Login.jsx';
import{
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom"

import { requiresAuth } from './utils.js'

const router = createBrowserRouter(createRoutesFromElements(
    

        <Route 
          path='/' 
          element = {<Layout/>}
          errorElement={<ErrorComponent/>}
        >
          <Route index element={<Home/>} />
          <Route path='/About' element={<About/>} />
           <Route
            path="login"
            element={<Login />}
            loader= {loginLoader}
            action= {loginAction}
          />
          <Route 
            path='/Vans' 
            element={<Vans/>} 
            loader={vansLoader} 
          />
          <Route 
            path='/Vans/:id' 
            element={<VanDetails/>}
            loader = {vanDetailLoader}
          />      {/* :id is vans param */}

            <Route 
              path='host' 
              element= {<HostLayout/>}
              loader = {async ()=> await requiresAuth()}
            >

              <Route 
                index 
                element={<Dashboard/>}
                loader = {async ()=> await requiresAuth()}
                />      
              <Route 
                path='income' 
                element={<Income/>}
                loader = {async ()=> await requiresAuth()}

                />      
              <Route 
                path='reviews' 
                element={<Reviews/>}
                loader = {async ()=> await requiresAuth()}

                />     
              <Route 
                path='vans' 
                element={<HostVans/>}
                loader = {hostVansLoader}
                />     
              <Route 
                path='vans/:id' 
                element={<HostVanDetails/>}
                loader = {hostVanDetailsLoader}
                >
                <Route 
                  index 
                  element = {<HostVanInfo/>}
                  loader = {async ()=> await requiresAuth()}
                  
                  />
                <Route 
                  path='pricing' 
                  element ={<HostVanPricing/>}
                  loader = {async ()=> await requiresAuth()}
                  
                  />
                <Route 
                  path='Photos' 
                  element = {<HostVanPhotos/>}
                  loader = {async ()=> await requiresAuth()}
                  
                  />
              </Route>     
            </Route >
          <Route path='*' element ={<NotFound/>}/>
        </Route>
          // {/* if we don't use '/' at begining it will get as relative path  */}

))


export default function App(){
  return(
    <>  
      <RouterProvider router={router}/>
    </>
  )
}