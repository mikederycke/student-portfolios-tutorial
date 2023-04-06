import React from 'react'
import Content from '../components/Content'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div id='main'>
        <div className="d-flex" id="wrapper">
            <Sidebar />
            <div id="page-content-wrapper">
                <Navbar />
                <Outlet />
            </div>
        </div>
    </div>
    
  )
}

export default Home