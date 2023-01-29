import React from 'react'
import heroImg from '../assets/img/Header.png'

function Hero() {
  return (
    <div className='w-full px-24 flex items-center'>
      <div className="right">
        <div className="title ">super fast Food
          delivery service</div>
        <p className="text">We provide super fast-delivery service. Let’s use our services right now and get discounts of up to 50%</p>
        <div className="btn-group flex">
          <div className="btn  bg-secondary text-white py-2 px-6 rounded shadow-3xl">Explore Food</div>
          <div className="btn  text-primary py-2 px-6 rounded">Download App</div>
        </div>
      </div>
      <div className="left">
        <img src={heroImg} alt="" />
      </div>
    </div>
  )
}

export default Hero