// Main layout of our site

import React from 'react'
import {Outlet} from 'react-router-dom'
import { Header, Footer } from '../component'

function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      
      <Footer />
    </div>
  )
}

export default Layout