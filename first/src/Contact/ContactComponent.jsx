import React from 'react'
import { ProductCard } from '../Product/ProductCard'
export const ContactComponent = () => {
  return (
    <>
      <div>ContactComponent</div>
      <div className="container">
        <ProductCard imageSrc='https://images.unsplash.com/photo-1755009012652-4fd36529e63a?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' cardTitle='First Product' cardDesc='kuch bhi' btnName='Click'></ProductCard>

      </div>
    </>
  )
}
