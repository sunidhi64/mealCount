import React, { Component } from "react";
import "./messauthmenu.css";
export default class Messauthmenu extends Component {
	constructor(){
        super();
        this.state={
            breakfastVeg: [],
            breakfastNonVeg: [],
            lunchVeg: [],
            lunchNonVeg: [],
            snacksVeg: [],
            snacksNonVeg: [],
            dinnerVeg: [],
            dinnerNonVeg: [],
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleMonday(event){
        event.prevent.default();
    }


    


    render(){
        return(
            
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
                 <table className="center" width="50%">
                     <caption><button type="submit" className="submit"></button></caption>
                     <tr>
                         <th></th>
                         <th>VEG</th>
                         <th>NON-VEG</th>
                     </tr>
                     <tr>
                         <th>BREAKFAST</th>
                        <td><input type="text"></input></td>
                        <td><input type="text"></input></td>
                     </tr>
                     <tr>
                         <th>LUNCH</th>
                         <td><input type="text"></input></td>
                         <td><input type="text"></input></td>
                     </tr>
                     <tr>
                         <th>SNACKS</th>
                         <td><input type="text"></input></td>
                         <td><input type="text"></input></td>
                     </tr>
                     <tr>
                         <th>DINNER</th>
                         <td><input type="text"></input></td>
                         <td><input type="text"></input></td>
                         
                     </tr>
                 </table>
            </div>
        </body>
        )
    }
}
