import React, { Component } from "react";
import "./Tellme3.css";
import applogo from "./applogo.jpg";
import students from "./students.png";
import cookicon  from "./cookicon.png";
import m  from "./m.jpg"
export default class Tellme3 extends Component{
    render(){
        return(
            <body>
                <div className="applogo">
                    
                    <img  src={applogo} width="550px"></img>
                </div>
                <div className="right-side">
                    <img src={students} width="200px"className="students"></img>
                    <button className="Student">Student</button>
                    <img src={cookicon} width="200px" className="cooks"></img>
                    <button className="Messauth">Mess Authority</button>
                </div>
            </body>
        )
    }
}