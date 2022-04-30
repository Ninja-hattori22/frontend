import React,{ useEffect } from "react";


const Home = () =>{
    useEffect(()=>{
        document.title="Home";
    },[]);
    return (
        <div class="p-3 mb-2 bg-warning text-white">
            <h1 class="text-center display-2">Welcome To Tweet App</h1>
            <p class="text-center">This is a tweet app where you can post any tweet, update any tweet and delete any tweet</p>
        </div>
    );
}

export default Home;