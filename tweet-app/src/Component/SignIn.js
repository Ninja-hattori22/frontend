import React, { useState } from "react";
import { Form, Input, FormGroup, Button, Container } from "reactstrap";
import { Alert } from "react-bootstrap";
import Home from "./Home";
const SignIn=()=>{
   
    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);

    const handleLogin=(e)=>{
        e.preventDefault();
        let pass = localStorage
      .getItem("Password")
      .replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    if (!emaillog || !passwordlog) {
        setFlag(true);
        console.log("EMPTY");
      } else if (passwordlog !== pass || emaillog !== mail) {
        setFlag(true);
      } else {
        setHome(!home);
        setFlag(false);
      }
    }
   

    return(
        <div>
        {home ? (
        <Form onSubmit={handleLogin}>
            <FormGroup >
                <h1  class="p-3 mb-2 bg-primary text-white text-center">Login User</h1>
                <lable for="name">User Name:</lable>
                <Input type="text" placeholder="Enter your user name" 
                onChange={(event) => setEmaillog(event.target.value)}/>
            </FormGroup>
            <FormGroup>
                <lable for="pass">Password:</lable>
                <Input type="textarea" placeholder="Enter your Password" 
                onChange={(event) => setPasswordlog(event.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Container className="text-center">
                <Button color="success" type="submit" >Log in</Button>
                </Container>
            </FormGroup>
            {flag && (
            <Alert color="primary" variant="warning">
              Please Enter correct info.
            </Alert>
          )}
        </Form>
        ) : (
            <Home />
          )}
        </div>
        
    )
}

export default SignIn;