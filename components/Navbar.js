import Link from 'next/link'
import React from 'react'
import {FiPlusCircle, FiHome} from "react-icons/fi"

const Navbar = () => {
  return (
    <nav className='flex gap-6 justify-between items-center cursor-pointer'>
        <Link 
        className='flex items-center gap-1 text-lg'
        href={'/'}>
            <FiHome /> <span>Strona główna</span>
        </Link>
        <Link 
        className='flex items-center gap-1 text-lg'
        href={'/create'}>
            <FiPlusCircle /> <span>Utwórz kontakt</span>
        </Link>
    </nav>
  )
}

export default Navbar