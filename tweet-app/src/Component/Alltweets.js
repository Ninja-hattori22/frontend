import React, {useState, useEffect} from "react";
import Tweet from "./Tweet";
import base_url from "../api/bootapi";
import axios from "axios"
import { toast } from "react-toastify";
const AllTweet=()=>{
    const [tweets,settweet] = useState([ ]);
    useEffect(()=>{
        document.title="View Tweet";
    },[]);
    const updateTweet = (id)=>{
        settweet(tweets.filter((t)=> t.id !== id));
    }
    const getAlltweetsfromserver = () =>{
        axios.get(`${base_url}/api/v1.0/tweets/all`).then(
            (response)=>{
                console.log(response.data);
                toast.success("Tweets has been loaded");
                settweet(response.data)
            },
            (error)=>{
                console.log(error);
                toast.error("error");
            }
        )
    };

    useEffect(()=>{
        getAlltweetsfromserver();
    },[]);

    return (
        <div>
            <h1 class="p-3 mb-2 bg-primary text-white text-center">All tweets</h1>
            {
                tweets.length > 0 ? tweets.map((item)=><Tweet key={item.id} tweet={item} update={updateTweet}/>) : "No Tweet"
            }
        </div>
    )
}

export default AllTweet;