
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import  React, {lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Loading } from './Loading'
import { AppLayout } from "./AppLayout.jsx";
// import AboutComponent from "./About/AboutComponent";
// import { AboutComponent } from "./About/AboutComponent";
// import { ContactComponent } from "./Contact/ContactComponent";
// import { GalleryComponent } from "./Gallery/GalleryComponent";
// import { AppLayout } from "./AppLayout";
// import { CounterComponent } from "./Counter/CounterComponent";
// import { ProductList } from "./Product/ProductList";
// import { useEffectHook } from "./useEffectHook/useEffectHook";
// import { UseRefHook } from "./UseRefHook/UseRefHook";



export default function App() {

  return (
    <>
    <h1>Main Component</h1>
    </>
  )



}
// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component:AppLayout,
//     children:[
//       {index: true, Component:  AboutComponent},
//       {path: 'about', Component: AboutComponent},
//       {path: 'contact', Component: ContactComponent},
//       {path: 'gallery', Component: GalleryComponent},
//       {path: 'counter', Component: CounterComponent},
//       {path: 'productList', Component: ProductList},
//       {path: 'useEffectHook', Component: useEffectHook},
//       {path: 'useRefHook', Component: UseRefHook}
//     ]
//   },
// ]);



// const AppLayout = lazy(()=>import('./AppLayout'))
// const AppRoute = lazy(()=> import('./AppLayout.jsx'));
const contactRoute = lazy(()=> import('./Contact/ContactComponent.jsx'));
const galleryRoute = lazy(()=> import('./Gallery/GalleryComponent.jsx'));
const useEffectRoute = lazy(()=>import('./useEffectHook/useEffectHook.jsx'))


const Apps = lazy(()=> import('./main'))
const AboutComponent = lazy(()=> import('./About/AboutComponent'));


const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: Apps
      },
      {
        path: '/about',
        Component: AboutComponent
      },
      {
        path: '/contact',
        Component: contactRoute
      },
      {
        path: '/gallery',
        Component: galleryRoute
      },
      {
        path: '/useEffectHook',
        Component: useEffectRoute
      },
    ]
  }
])





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
