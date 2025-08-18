import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AboutComponent } from "./About/AboutComponent";
import { ContactComponent } from "./Contact/ContactComponent";
import { GalleryComponent } from "./Gallery/GalleryComponent";
import { AppLayout } from "./AppLayout";
import { CounterComponent } from "./Counter/CounterComponent";
import { ProductList } from "./Product/ProductList";
import { useEffectHook } from "./useEffectHook/useEffectHook";


const router = createBrowserRouter([
  {
    path: "/",
    Component:AppLayout,
    children:[
      {index: true, Component:  AboutComponent},
      {path: 'about', Component: AboutComponent},
      {path: 'contact', Component: ContactComponent},
      {path: 'gallery', Component: GalleryComponent},
      {path: 'counter', Component: CounterComponent},
      {path: 'productList', Component: ProductList},
      {path: 'useEffectHook', Component: useEffectHook}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
)
