import React from 'react'
import NavComponent from './NavComponent'
import { Outlet } from 'react-router'

export const AppLayout = () => {
    return (
        <>
            <NavComponent></NavComponent>
            <Outlet></Outlet>
        </>
    )
}

