import React, { Component } from "react";
import "./Tellme3.css";
import applogo from "./applogo.jpg";
import students from "./students.png";
import cookicon2  from "./cookicon2.JPG";

export default class Tellme3 extends Component{
    handleStudent(){
        window.location = "/stuLogin";
    }
    handleMessauth(){
        window.location = "/messauth/login";
    }
    render(){
        return(
            <body>
                <div className="applogo">
                    
                    <div className="applogo-pos"><img  src={applogo} width="550px" style={{borderRadius:"50%"}}></img></div>
                </div>
                <div className="right-side">
                    <img src={students} width="200px"className="students"></img>
                    <button className="Student" onClick={this.handleStudent}>Student</button>
                    <img src={cookicon2} width="200px" className="cooks"></img>
                    <button className="Messauth"onClick={this.handleMessauth}>Mess Authority</button>
                </div>
            </body>
        )
    }
}
