import React, { Component } from "react";
import "./messauthmenu.css";
export default class Messauthmenu extends Component {
    render(){
        return(
            <body className="student-menu">
            <div>
            <table class="center" width="50%">
                
                   
        <tr><th colSpan="5" style={{fontSize:"20px"}}>Weekly Meal Menu</th></tr>
        <tr>
            <th rowSpan="5" ><ol><li><button className="monday" onClick={this.handleMonday}>Monday</button></li><br/><li><button className="tuesday" onClick={this.handleTuesday}>Tuesday</button></li><br/><li><button className="wednesday" onClick={this.handleWednesday}>Wednesday</button></li><br/><li><button className="thursday" onClick={this.handleThursday}>Thursday</button></li><br/><li><button className="friday" onClick={this.handleFriday}>Friday</button></li><br/><li><button className="saturday" onClick={this.handleSaturday}>Saturday</button></li><br/><li><button className="sunday" onClick={this.handleSunday}>Sunday</button></li></ol></th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Snacks</th>
            <th>Dinner</th>
        </tr>
        <tr>
            <th>Veg</th>
            <th>Veg</th>
            <th>Veg</th>
            <th>Veg</th>
            
        </tr>
        <tr>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
        
            
        </tr>
        <tr>
            <th>NonVeg</th>
            <th>NonVeg</th>
            <th>NonVeg</th>
            <th>NonVeg</th>
        </tr>
        <tr>
        <td><input type="text"></input></td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
        </tr>
        </table>
        
            </div>
            </body>
        )
    }
}
