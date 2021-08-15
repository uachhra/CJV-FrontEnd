import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect, useState, useQuery } from "react";
import NavBar from "./Layout/NavBar";
import Footer from "./Layout/Footer";
import Home from "./Pages/Home";
import Movies from "./components/Movies";
import Details from "./components/Details";
import Shows from "./components/Shows";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Search from "./Pages/Search";
import Dashboard from "./Pages/Dashboard";
import movieContext from "./components/MovieContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { Dashboard } from "@material-ui/icons";

const App = () => {
  var [id, setID] = useState({
    title:""
  });

  const [useractive, setUser] = useState(
    {
      
      user: "Guest",//use to set menu items
      email:"",
      fname:"",
      lname:""
    }
  );
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    console.log("Inside Useeffect movies");
    fetch("http://localhost:5000/movies")
    .then(res => res.json())
    .then((data) => {
      console.log(data);

      setMovies((previousState) => {

        previousState = data;
        return previousState
      });


    })
    .catch(err => console.log(`Error ${err}`));

}, [])

var [tvshows, setShows] = useState([]);

useEffect(() => {

  fetch("http://localhost:5000/tvshows")
    .then(res => res.json())
    .then((data1) => {


      console.log(data1);
      setShows((previousState) => {

        previousState = data1;
        return previousState
      });


    })
    .catch(err => console.log(`Error ${err}`));

}, [])
  return (
    <Router>
      <div className="container-fluid movie-app">
        <NavBar />
        <Switch>
        <Route path="/movies/:id" exact>
            <Details url="movies" />
          </Route>
          <Route path="/tvshows/:id" exact>
            <Details url="tvshows" />
          </Route>
          <Route path="/movies" exact>
            <Movies />
          </Route>
          <Route path="/tvshows" exact>
            <Shows />
          </Route>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
          <Route path="/Search">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
