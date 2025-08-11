import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import NavbarOwner from '../../components/owner/NavbarOwner'
import Sidebar from '../../components/owner/Sidebar'
import { useAppcontext } from '../../context/Appcontext'

const Layout = () => {
    const { isOwner, navigate } = useAppcontext()
    
    useEffect(() => {
        if (!isOwner) {
            navigate('/')
        }
    }, [isOwner, navigate])
    
    return (
        <div className='flex flex-col'>
            <NavbarOwner />
            <div className='flex'>
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
