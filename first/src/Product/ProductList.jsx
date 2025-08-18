import React, { useState } from 'react'
import { ProductCard } from './ProductCard'

export const ProductList = () => {

    const [isprodList, setProdList] = useState([
        {
            imageSrc: 'https://images.unsplash.com/photo-1755009012652-4fd36529e63a?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            cardTitle: 'First Product',
            cardDesc: 'Kuch Bhi',
            btnName: 'Click First'
        },
        {
            imageSrc: 'https://images.unsplash.com/photo-1754338785265-487bdaf99827?q=80&w=875&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            cardTitle: 'Second Product',
            cardDesc: 'wagera wagera',
            btnName: 'Click Second'
        },
        {
            imageSrc: 'https://images.unsplash.com/photo-1754671448143-8bd0bfb10bce?q=80&w=385&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            cardTitle: 'Third Product',
            cardDesc: 'silence',
            btnName: 'Click Third'
        },
        {
            imageSrc: 'https://images.unsplash.com/photo-1755004609214-c252674df1ca?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            cardTitle: 'Fourth Product',
            cardDesc: 'asee hee',
            btnName: 'Click Fourth'
        }
    ]);



    return (
        <>
            <h1 className='text-center'>Product List</h1>

            <div className="container">
                <div className="row">
                    {
                        isprodList.map(item => (
                        <div>
                            <ProductCard imageSrc={item.imageSrc} cardTitle={item.cardTitle} cardDesc={item.cardDesc} btnName={item.btnName} />
                            <h1>hello</h1>

                        </div>

                        )
                        )

                    }
                </div>




            </div>


        </>


    )
}
