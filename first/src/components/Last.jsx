import React from 'react'
import "./last.css"
import firstImage from '../assets/1.jpg'
import { Button } from 'react-bootstrap'


const Last = () => {

    // let btn = document.querySelector('.btn')
    // let para = document.querySelector('.para')
    // btn.addEventListener('click',()=>{
    //     para.style.color = 'blue'
    // })

  return (
    <>
    <button className='btn'>click</button>
    <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, architecto.</p>
    <img src="/assets/image.avif" alt="" />
    <img width={400} src={firstImage} alt="" srcset="" />
    <Button variant="danger" style={{color: 'orange',background:'#333',border:'2px solid pink'}}>Click</Button>
    </>
  )
  
}

export default Last