import React, { Component } from "react";
import "./menu2.css";
export default class Menu2 extends Component {
    
    render(){
        return(
            <body>
                <div className="buttons1">
                <h1> {this.state.breakfastVeg} </h1>
                <button className="monday1 student-menu-button" onClick={()=>{document.getElementById('table').style.display='none'}}>Monday</button>
                <button className="tuesday1 student-menu-button" onClick={this.handleTuesday}>Tuesday</button>
                <button className="wednesday1 student-menu-button " onClick={this.handleWednesday}>Wednesday</button>
                <button className="thursday1 student-menu-button" onClick={this.handleThursday}>Thursday</button>
                <button className="friday1 student-menu-button" onClick={this.handleFriday}>Friday</button>
                <button className="saturday1 student-menu-button" onClick={this.handleSaturday}>Saturday</button>
                <button className="sunday1 student-menu-button" onClick={this.handleSunday}>Sunday</button>
                </div>
                <div>
                    <table className="center1" width="50%" id ='table'>
                        <tr>
                            <th></th>
                            <th>VEG</th>
                            <th>NON-VEG</th>
                        </tr>
                        <tr>
                            <th>BREAKFAST</th>
                           <td>{this.state.breakfastVeg}</td>
                           <td>{this.state.breakfastNonVeg}</td>
                        </tr>
                        <tr>
                            <th>LUNCH</th>
                            <td>{this.state.lunchVeg}</td>
                            <td>{this.state.lunchNonVeg}</td>
                        </tr>
                        <tr>
                            <th>SNACKS</th>
                            <td>{this.state.snacksVeg}</td>
                            <td>{this.state.snacksNonVeg}</td>
                        </tr>
                        <tr>
                            <th>DINNER</th>
                            <td>{this.state.dinnerVeg}</td>
                            <td>{this.state.dinnerNonVeg}</td>
                            
                        </tr>
                    </table>
                </div>
                
            </body>
        )
    }
}