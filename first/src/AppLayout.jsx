import React, { Suspense } from 'react'
import NavComponent from './NavComponent'
import { Outlet } from 'react-router'
import { Loading } from './Loading'

export const AppLayout = () => {
    return (
        <>
            <NavComponent></NavComponent>
            <Suspense fallback={<Loading></Loading>}>
            <Outlet></Outlet>

            </Suspense>
        </>
    )
}

