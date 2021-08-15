import {Link} from 'react-router-dom'
import React, { Component } from 'react';
import { Search } from 'react-bootstrap-icons';

const NavBar = () => {
    return (
        <div class="topnav">
            <Link to="/" class="active" >BookMyTickets</Link>
            <Link to='/movies' >Movies</Link>
            <Link to='/tvshows' >TV Show</Link>
            
            
            <Link to='/Search' style={{float:"right"}}><Search /></Link>
            <Link to='/register' style={{float:"right"}}>Register</Link>
            <Link to='/login' style={{float:"right"}}>Login</Link>        

            
            


        </div>
        
    );


}

export default NavBar;