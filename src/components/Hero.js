import React from "react";
import { Carousel } from 'react-bootstrap';

const Hero = () => (
  <div>
  <Carousel style={{margin:"0px"}}>
  <Carousel.Item style={{height:'320px'}}>
    <img
      className="d-block " style={{height:"300px", width:"350px", marginLeft:"450px", marginTop:"20px"}}
      src="https://m.media-amazon.com/images/M/MV5BYzQxMjVkZjEtMDQxYy00MGIwLWE1NjYtYzZkZmU1NTFlZGFlXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg"
      alt="First slide"
    />
 
  </Carousel.Item>
  <Carousel.Item style={{height:'320px'}}>
    <img
      className="d-block" style={{height:"300px", width:"350px", marginLeft:"450px", marginTop:"20px"}}
      src="https://m.media-amazon.com/images/M/MV5BZWNiOTc4NGItNGY4YS00ZGNkLThkOWEtMDE2ODcxODEwNjkwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item style={{height:'320px'}}>
    <img
      className="d-block " style={{height:"300px", width:"350px", marginLeft:"450px", marginTop:"20px"}}
      src="https://m.media-amazon.com/images/M/MV5BNTkwOTE1ZDYtODQ3Yy00YTYwLTg0YWQtYmVkNmFjNGZlYmRiXkEyXkFqcGdeQXVyNTc4MjczMTM@._V1_SX300.jpg​​​​​​​"
      alt="Third slide"
    />

  
  </Carousel.Item>
</Carousel>
</div>
);

export default Hero;
