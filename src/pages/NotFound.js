import React from 'react'
import {Link} from 'react-router-dom';
import {FaHome} from 'react-icons/fa';

function NotFound() {
    return (
        <section className='not-found max-w-screen-lg mx-auto text-center'>
            <h1 className='text-6xl'>
                Oops!
            </h1>
            <h3 className='text-3xl mb-10 mt-5'>404 - Page Not Found</h3>
            <Link className="shadow-lg hover:bg-teal-700 border-none outline-none uppercase text-lg btn btn-accent btn-active" role="button" to="/" aria-pressed="true">
                <FaHome className="text-4xl inline pr-3"/>
                Go Back Home
            </Link> 
        </section>
    )
}

export default NotFound
