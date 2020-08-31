import React, { Component } from "react";
import "./Student_list.css";
import axios from "axios";
export default class Student_list extends Component {
    render() {
       
        
        return (
           <body>
               <div className="buttons">
               <button className="monday" onClick={this.handleMonday}>Monday</button>
                <button className="tuesday" onClick={this.handleTuesday}>Tuesday</button>
                    <button className="wednesday" onClick={this.handleWednesday}>Wednesday</button>
                        <button className="thursday" onClick={this.handleThursday}>Thursday</button>
                            <button className="friday" onClick={this.handleFriday}>Friday</button>
                                <button className="saturday" onClick={this.handleSaturday}>Saturday</button>
                <button className="sunday" onClick={this.handleSunday}>Sunday</button>
                </div>
               <div>
                    <table className="center1" width="50%">
                        <tr>
                            <th></th>
                            <th>Veg Count</th>
                            <th>Non- Veg count</th>
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
