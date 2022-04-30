import React, { useEffect } from "react";

const About=()=>{
    useEffect(()=>{
        document.title="About";
    },[]);
    return(
    <div class="p-3 mb-2 bg-warning text-white">
    <h1 class="text-center display-2">About</h1>
    <p class="text-center">From here you will get all the about details</p>
    </div>
    )
}

export default About;