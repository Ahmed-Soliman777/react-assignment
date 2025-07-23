import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer.jsx'
import NavComponent from './Nav.jsx'

export default function MainLayout() {
    return (
        <div>
            <NavComponent />
            <Outlet />
            <Footer />
        </div>
    )
}
