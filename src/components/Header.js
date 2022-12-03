import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { CartContext } from '../contexts/CartContextProvider'


import logo from '../icons/png-logo-web.png'

const Header = () => {
  const location = useLocation()

  const {state} = useContext(CartContext)

  return (
    <div 
    className={`${location.pathname === "/" && "bg-gradient-to-r from-cyan-500 to-blue-500" } w-screen flex justify-between items-center px-6 sticky top-0 ${location.pathname === "/cart" ? "bg-slate-100 backdrop-blur" : "bg-[#f8fafc7c] backdrop-blur"} `}>
      <div>
        <img className='w-12 rounded-full ' src={logo} alt="logo"/>
      </div>
      <div className='hidden xs:block text-xl'>
        <ul className='flex flex-row space-x-6'>
          <li className='hover:tracking-widest transition-all font-light'><Link to='/cart'>

            <span 
            className={`px-[4px] relative bottom-3 ${location.pathname === "/" ? "bg-white text-black border-black border-[1px]" : "bg-blue-700 text-white"} rounded-full text-sm`}
            >{state.itemsCount}
            </span>
            CART</Link>

          </li>

          <li className='hover:tracking-widest transition-all font-light'><Link to='/contact'>CONTACT</Link></li>
          <li className='hover:tracking-widest transition-all font-light'><Link to='/store'>SHOP</Link></li>
          <li className='hover:tracking-widest transition-all font-light'><Link to='/'>HOME</Link></li>

        </ul>
      </div>
    
    </div>
  )
}

export default Header