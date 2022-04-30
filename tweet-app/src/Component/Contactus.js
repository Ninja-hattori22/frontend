import React,{useEffect} from "react";

const Contactus=()=>{
    useEffect(()=>{
        document.title="Contact";
    },[]);
    return(
    <div class="p-3 mb-2 bg-warning text-white">
    <h1 class="text-center display-2">Contact Us</h1>
    <p class="text-center">From here you will get all the contact details</p>
    </div>
    )
}

export default Contactus;