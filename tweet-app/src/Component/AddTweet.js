import React,{ useEffect, useState } from "react";
import { Form, Input, FormGroup, Button, Container } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
const AddTweet=()=>{
    useEffect(()=>{
        document.title="Post Tweet";
    },[]);
    const [tweet,setTweet]= useState({ });

    const handelForm = (e)=>{
        console.log(tweet);
        postDataToServer(tweet);
        e.preventDefault();
    };
    const postDataToServer = (data)=>{
        axios.post(`${base_url}/api/v1.0/tweets/add`,data).then(
            (res)=>{
                console.log(res);
                toast.success("Tweet Posted");
            },
            (err)=>{
                console.log(err);
                toast.error("Please try again");
            }
        );
    }
        return (
            <div>
            <Form onSubmit={handelForm}>
                <FormGroup>
                    <h1  class="p-3 mb-2 bg-primary text-white text-center">Post Tweet</h1>
                    <lable for="id">ID:</lable>
                    <Input type="text" placeholder="Enter your ID" name="id" id="id"
                    onChange={(e)=>{ setTweet({...tweet,id:e.target.value})}} />
                </FormGroup>
                <FormGroup>
                    <lable for="userName">Name:</lable>
                    <Input type="text" placeholder="Enter your name" name="userName" id="userName"
                    onChange={(e)=>{ setTweet({...tweet, name:e.target.value})}} />
                </FormGroup>
                <FormGroup>
                    <lable for="msg">Tweet:</lable>
                    <Input type="textarea" placeholder="Enter your tweet" name="msg" id="msg" style={{height:100}}
                    onChange={(e)=>{ setTweet({...tweet, comment:e.target.value})}} />
                </FormGroup>
                <FormGroup>
                    <Container className="text-center">
                    <Button type="submit" color="success">Add</Button>
                    <Button type="reset" color="warning mx-3">Clear</Button>
                    </Container>
                </FormGroup>
            </Form>
            </div>
        )
}

export default AddTweet;