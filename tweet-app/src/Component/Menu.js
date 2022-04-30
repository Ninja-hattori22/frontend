import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menu=()=>{
    return(
        <div class="p-3 mb-2 bg-warning text-white">
        <ListGroup >
            <ListGroupItem tag="a" href="registration" action>Registration</ListGroupItem>
            <ListGroupItem tag="a" href="/" action>Home</ListGroupItem>
            <ListGroupItem tag="a" href="add-tweet" action>Add Tweet</ListGroupItem>
            <ListGroupItem tag="a" href="view-tweet" action>View Tweet</ListGroupItem>
            <ListGroupItem tag="a" href="about" action>About</ListGroupItem>
            <ListGroupItem tag="a" href="contact" action>Contact Us</ListGroupItem>
        </ListGroup>
        </div>
    )
}

export default Menu;