import React,{useState} from "react";
import { Form, Input, FormGroup, Button, Container } from "reactstrap";
import SignIn from "./SignIn";
import { Alert } from "react-bootstrap";

const SignUp=()=>{
    const[name,setname]= useState("");
    const[email,setemail]= useState("");
    const[gender,setgender]= useState("");
    const[dob,setdob]= useState("");
    const[password,setpassword]= useState("");
    const[flag,setflag]= useState(false);
    const[login,setlogin]= useState(true);
    const handelform=(e)=>{
                e.preventDefault();
                if (!name || !email || !gender || !dob || !password) {
                    setflag(true);
                  } else {
                    setflag(false);
                    localStorage.setItem("Email", JSON.stringify(email));
                    localStorage.setItem(
                      "Password",
                      JSON.stringify(password)
                    );
                    console.log("Saved in Local Storage");
              
                    setlogin(!login);
                  }
    }
    const handleClick=()=>{
        setlogin(!login);
    }
    return(
        
        <div>
            {login ? (
            <Form onSubmit={handelform}>
                <FormGroup>
                    <h1  class="p-3 mb-2 bg-primary text-white text-center">Register User</h1>
                    <lable for="name">Name:</lable>
                    <Input type="text" placeholder="Enter your name" 
                    onChange={(e)=>setname(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <lable for="email">Email:</lable>
                    <Input type="text" placeholder="Enter your Email" 
                    onChange={(e)=>setemail(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <lable for="gender">Gender:</lable>
                    <Input type="textarea" placeholder="Enter your Gender" 
                    onChange={(e)=>setgender(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <lable for="dob">DOB:</lable>
                    <Input type="textarea" placeholder="Enter your Date of birth" 
                    onChange={(e)=>setdob(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <lable for="pass">Password:</lable>
                    <Input type="textarea" placeholder="Enter your Password" 
                    onChange={(e)=>setpassword(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Container className="text-center">
                    <Button color="success" type="submit">Register</Button>
                    </Container>
                </FormGroup>
                <p onClick={handleClick} className="text-center text-primary forgot-password text-right">
                Already registered{" "}log in? 
              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
            </Form>
            ) : (
                <SignIn />
              )}
            </div>
    )
}

export default SignUp;