import CloseButton from 'react-bootstrap/CloseButton'
import Form from 'react-bootstrap/Form'
import React,{useState,useEffect} from 'react'
import MediaCard from '../components/MediaCard';
import {Container,Row,Col} from 'react-bootstrap'

import {
    useHistory,
  } from "react-router-dom";
import { Button } from 'bootstrap';
  

function Search(props) {
    let history = useHistory();
    const [movie, setMovie] = useState({});
    const [searchText, setSearchText]=useState('');
    const [buttonTextSearch, setButtonText]=useState('');
    
    useEffect(()=>{
        if(buttonTextSearch)
        {
        
        fetch("http://localhost:5000/movies/name/"+searchText)
          .then(res => res.json())
          .then(
            (result) => {
                setMovie(result);
            }
          );
        }
      },[buttonTextSearch]);

    function onSearchTextChange(e){
        setSearchText(e.target.value);
      }
      function onButtonText(){
        setButtonText(searchText);
      }

    return ( 
    <div className="SearchPage">
    <div className="SearchBar">
        
        <div className="Inside" >
         <div className="Searchbox">
         <Form.Control size="lg" type="text" placeholder="Search for Movie or TV shows" value={searchText} onChange={onSearchTextChange}/>
         <button onClick={onButtonText}>Search</button>
    </div>   
    <CloseButton style={{fontSize:"50px",color:'black'}} onClick={history.goBack} />
    </div>
    </div>  
    <div className="SearchResult">
    <Container >
            <Row>
            <h2>{props.title}</h2>
           <MediaCard  id={movie.id} 
            title={movie.title}
            poster={movie.poster}
            route={movie.type ==="series"? "shows" :"movies"} />)   
            </Row>
        </Container>
        </div>
    </div>);
};

export default Search;
