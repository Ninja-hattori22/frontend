import React from "react";
import { ToastContainer, toast} from "react-toastify"
import { Col, Container, Row } from 'reactstrap';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddTweet from './AddTweet';
import AllTweet from './Alltweets';
import Contactus from './Contactus';
import About from './About';
import Menu from "./Menu";
import SignUp from "./SignUp";

const TweetMain = ()=>{
    return (
        <div>
    <ToastContainer/>
    <Container>
    <Header/>
      <Row>
        <Col md={4}><Router><Menu/></Router></Col>
        <Col md={8}>
          <Router>
          <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/add-tweet" element={<AddTweet/>}/>
          <Route exact path="/view-tweet" element={<AllTweet/>}/>
          <Route exact path="/contact" element={<Contactus/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/registration" element={<SignUp/>}/>
    </Routes>
    </Router>
        </Col>
      </Row>
    </Container>
    </div>
    );
}

export default TweetMain;