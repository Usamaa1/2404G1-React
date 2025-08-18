import React from 'react'
import { Nav } from './Nav'
import { Outlet } from 'react-router'

export const Layout = () => {
  return (
    <>
    <Nav></Nav>
    <Outlet></Outlet>
    <footer>This is footer</footer>
    </>
  )
}
