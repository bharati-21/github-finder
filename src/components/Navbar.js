import React from 'react';
import {Link} from 'react-router-dom';
import {FaGithub} from 'react-icons/fa'

export default function Navbar() {
    return (
        <nav className='navbar bg-slate-900/[0.75] p-3 w-full shadow-lg'>
            <div className='flex-col justify-center align-center gap-5 max-w-screen-lg w-full m-auto sm:flex-row sm:justify-between'>
                <h2 className='font-bold logo text-2xl  flex-none'>
                    <FaGithub className='inline pr-2.5 text-4xl'/> GitHub Finder 
                </h2>
                <ul className='nav-links text-lg flex gap-10'>
                    <li className='rounded hover:bg-slate-300 py-1 hover:text-gray-900 hover:font-semibold px-1.5'>
                        <Link to="/" >Home</Link>
                    </li>
                    <li className='rounded hover:bg-slate-300 py-1 hover:text-gray-900 hover:font-semibold px-1.5'>
                        <Link to="/about" >About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

