import React from 'react'
import Hero from '../components/Hero';
import Listing from '../components/Listing';
import logo from './Content.jpg';

function Home() {
    return (
        <div className="Homepage">
            <Hero />
            <Listing title="Featured Movies" url="movies" />          
            <br />
            <Listing title="Featured Series" url="tvshows" />
            <br />
            <img alt='logo' style={{ width: '90%', margin:'50px' }} src={logo} />
            <br />
        </div>
    )
}

export default Home
