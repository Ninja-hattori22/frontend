import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import {Card, CardBody,CardSubtitle, CardText, Button, Container} from "reactstrap"; 
import base_url from "../api/bootapi";

const Tweet =( {tweet, update} )=>{
    const deleteTweet=(id)=>{
        axios.delete(`${base_url}/api/v1.0/tweets/<username>/delete/${id}`).then(
        (res)=>{
            toast.success("Tweet Deleted");
            update(id);
        },
        (err)=>{
            toast.error("Something went wrong");
        }
        )
    }
     return(
         <Card className="text-center">
             <CardBody>
                <CardSubtitle style={{ fontWeight: 'bold' }}>{tweet.name}</CardSubtitle>
                <CardText>{tweet.comment}</CardText>
                <Container className="text-center">
                   
                    <Button color="danger mx-3" onClick={()=>{
                        deleteTweet(tweet.id)
                    }}>Delete</Button>
                </Container>
             </CardBody>
         </Card>
     )
}

export default Tweet;