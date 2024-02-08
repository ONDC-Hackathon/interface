import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

const ProtectedLayout = () => (
    <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
            <Header />
            <main className="content overflow-auto pt-16">
                <Outlet />
            </main>
        </div>
    </div>
)

export default ProtectedLayout
