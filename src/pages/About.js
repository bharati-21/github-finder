import React from 'react';

function About() {
    return (
        <section className='about text-left p-3 max-w-screen-lg mx-auto'>
            <h1 className='text-6xl'>GitHub Finder</h1>
            <p className='mb-6 text-xl'>A React app to search GitHub profiles and see repository details.</p>
            <small className='text-gray-400'>
                <p>Made with Brad Travery at <em>React Front to Back 2022 Udemy Course</em></p>
                <p>Version: 1.0.0</p>
            </small>

        </section>
    )
}

export default About
