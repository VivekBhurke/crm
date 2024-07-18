import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Topbar from './NavBars/Topbar'
import Sidebar from './NavBars/Sidebar';
import Dashboard from './LeadCenterScreens/Dashboard/Dashboard'
import LeadCenter from './LeadCenterScreens/LeadCenter/LeadCenter'
import './Layout.css'
import Chat from './Chat/Chat.jsx'; 
import './Chat/Chat.css'

function Layout() {
  return (
    <Router>
      <div className="mainDiv">
        <div className="app-container">
          <Sidebar/>
          <Topbar/>
          <div className="content-container">
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/LeadCenter' element={<LeadCenter/>} />
              <Route path='/Chat' element={<Chat/>}/>
            </Routes>
          </div>
        </div>      
      </div>
    </Router>
  )
}

export default Layout
