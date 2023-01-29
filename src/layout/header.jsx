import React from 'react'
import Efood from '../assets/img/svg/EFood.svg'
import search from '../assets/img/svg/Search.svg'
import basket from '../assets/img/svg/Buy.svg'

function Header() {
  return (
    <>
      <header className='bg-white w-full overflow-hidden'>
        <div className="navbar sm:px-24 px-6 py-5 flex justify-between items-center">
          <div className="logo">
            <img src={Efood} alt="" />
          </div>
          <ul className="nav flex items-center gap-8 font-rubik">
            <li><a href="#">Home</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Top cities</a></li>
            <li><a href="#">Contract</a></li>
            <li><img src={search} alt="" /></li>
            <li><img src={basket} alt="" /></li>
            <li><div className="btn bg-secondary text-white py-2 px-6 rounded shadow-3xl">Sign Up</div></li>
          </ul>
        </div>
      </header>
    </>
  )
}
export default Header