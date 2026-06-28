import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import About from '../pages/About/About'
import Projects from '../pages/Projects/Projects'
import Contact from '../pages/Contact/Contact'
import Home from '../pages/Home/Home'
import Layout from '../layouts/Layout'
import Product from '../pages/ProductSearch/Product'
import Error404 from '../pages/Error404/Error404'
import ProtectedRoutes from './ProtectedRoutes'
import Dashboard from '../pages/Dashboard/Dashboard'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
             {
        path: '/about',
        element: <About/>
    },
    {
        path: '/projects',
        element: <Projects/>
    },
    {
        path: '/contact',
        element: <Contact/>
    },
    {
        path: '/product/:id',
        element: <Product/>
    },
    {
        path: '*',
        element: <Error404></Error404>
    },
    {
        path: '/dashboard',
        element: (<ProtectedRoutes>
            <Dashboard></Dashboard>
        </ProtectedRoutes>)
    }
        ]
    }
])

export default router
