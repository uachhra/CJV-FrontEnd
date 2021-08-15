import React,{useState,useEffect} from 'react'
import MediaCard from './MediaCard';
import {Container,Row,Col} from 'react-bootstrap'

function Griding(props) {
    const [list, setList] = useState([]);
    useEffect(() => {
        const url= `http://localhost:5000/${props.url}`;
        const fetchData= async () =>{
            try{
                const response= await fetch(url);
                const json=await response.json();
                setList(json);
            }
            catch(err){
                console.log("Error");
            }
        }
        fetchData();
    }, [])


    return (
        <Container style={{background:"black", color:"white"}}>
            <Row>
            <h2>{props.title}</h2>
        
            {list.map(media => <Col><MediaCard  id={media.id} 
            title={media.title}
            poster={media.poster}
            route={props.route} /></Col>)}
        
            </Row>
        </Container>
    )
}

export default Griding
