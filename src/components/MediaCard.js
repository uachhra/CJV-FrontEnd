import React from "react";
import {Card, Button} from 'react-bootstrap';
import { 
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";



function MediaCard(props) {
    let { path, url } = useRouteMatch();
  return (
      <Link to={`${props.route ? props.route :''}/${props.id}`}>
    <Card style={{ width: "18rem" }} >
      <Card.Img variant="top" src={props.poster} />
    </Card>
    </Link>
  );
}

export default MediaCard;
