import React,{useState,useEffect} from 'react'
import MediaCard from './MediaCard';

function Listing(props) {
    const [list, setList] = useState([]);
    useEffect(() => {
        const url= `http://localhost:5000/${props.url}/featured`;
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
        <div style={{margin:'20px'}}>
            <h4>{props.title}</h4>
        <div style={{display:"flex",margin:'5px'}}>
            {list.map(media => <MediaCard id={media.id} route={props.url} title={media.title} poster={media.poster} />)}
        </div>
        </div>
    )
}

export default Listing
