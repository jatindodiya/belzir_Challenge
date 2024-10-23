import React from 'react'
import {Outlet} from 'react-router-dom'

function LoginLayoutNew() {
  return (
    <div>
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </div>
  )
}

export default LoginLayoutNew