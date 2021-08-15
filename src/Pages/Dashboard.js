import React,{Component} from 'react'


import { useContext } from 'react';
import movieContext from "../components/MovieContext";



function Dashboard(){
  
    const { useractive, setUser } = useContext(movieContext);
    
    return (
        <div className="container">
        <div class="card">
                    <h1>Welcome, {useractive.fname} {useractive.lname} </h1>
                    <p class="title">{useractive.email}</p>
                    
                    
                </div>
                
         
        </div>
    
    )
    
}

export default Dashboard;