import React from 'react'
import { Outlet } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import Sidebar from './Sidebar'
import Header from './Header'

const ProtectedLayout = () => {
  const theme = useTheme()

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <main
          className="content pt-10 overflow-hidden flex justify-center"
          style={{
            flexGrow: 1,
            backgroundColor: theme.palette.secondary.light,
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default ProtectedLayout
