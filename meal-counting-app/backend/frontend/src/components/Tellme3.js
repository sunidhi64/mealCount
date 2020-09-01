import React, { Component } from "react";
import "./Tellme3.css";
import applogo from "./applogo.jpg";
import students from "./students.png";
import cookicon  from "./cookicon.png";
import m  from "./m.jpg"
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
                    <img src={cookicon} width="200px" className="cooks"></img>
                    <button className="Messauth"onClick={this.handleMessauth}>Mess Authority</button>
                </div>
            </body>
        )
    }
}
