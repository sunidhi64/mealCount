import React, {Component} from "react"
import "./Tellme.css"
import {Redirect} from 'react-router-dom';
import { Route, Link, browserHistory } from 'react-router-dom';

import Messauth2 from "./messauth2.js"
import StuLogin from "./stuLogin.js"
class Tellme extends Component {
    render(){

        return(
            <body className="Tellme-body">
           <header className="v-header container">
            <div className="fullscreen-video-wrap">
                <video autoPlay loop muted className="Tellme-video">
                <source src={"https://media.istockphoto.com/videos/teenage-students-being-served-meal-in-school-canteen-video-id942400270"} type="video/mp4" /> 
                </video> 
            </div>
            <div className="header-overlay"></div>
            <div className="header-content">
            <pre className="Tellme-pre">  Meal Counting App</pre>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="WhoRu">
            <h2>Let's Get Started !</h2><br/>
            <div className="StuLogin">
                <Link to="/stuLogin" className="Tellme-a">
                    Student?
                </Link>

            </div><br/>
            <div className="MessLogin">
                <Link to="/messauth2" className="Tellme-a">
                    Mess Authority?
                </Link>
            </div>
            </div>
            </div>
            </header>
            </body>
)
}
}
export default Tellme
