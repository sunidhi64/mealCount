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
    }
    
    handleMonday(event){
        axios.get('http://localhost:5000/mealmenu/')
              .then(response => {
                    if (response.data.length > 0) {
                        this.setState({
                            breakfastVeg: response.data.map(meal => meal.breafkfastVegMon),
                            breakfastNonVeg: response.data.map(meal => meal.breafkfastNonVegMon),
                            lunchVeg: response.data.map(meal => meal.lunchVegMon),
                            lunchNonVeg: response.data.map(meal => meal.lunchNonVegMon),
                            snacksVeg: response.data.map(meal => meal.snacksVegMon),
                            snacksNonVeg: response.data.map(meal => meal.snacksNonVegMon),
                            dinnerVeg: response.data.map(meal => meal.dinnerVegMon),
                            dinnerNonVeg: response.data.map(meal => meal.dinnerNonVegMon),
                                                      })
                                      }
                        })
              .catch((error) => {
                          console.log(error);
                        })

          
    }
          handleTuesday(event){
              axios.get('http://localhost:5000/mealmenu/')
              .then(response => {
                    if (response.data.length > 0) {
                        this.setState({
                            breakfastVeg: response.data.map(meal => meal.breafkfastVegTue),
                            breakfastNonVeg: response.data.map(meal => meal.breafkfastNonVegTue),
                            lunchVeg: response.data.map(meal => meal.lunchVegTue),
                            lunchNonVeg: response.data.map(meal => meal.lunchNonVegTue),
                            snacksVeg: response.data.map(meal => meal.snacksVegTue),
                            snacksNonVeg: response.data.map(meal => meal.snacksNonVegTue),
                            dinnerVeg: response.data.map(meal => meal.dinnerVegMonTue),
                            dinnerNonVeg: response.data.map(meal => meal.dinnerNonVegTue),
                                                      })
                                      }
                        })
              .catch((error) => {
                          console.log(error);
                        })

          



        }
        handleWednesday(event){
            axios.get('http://localhost:5000/mealmenu/')
              .then(response => {
                    if (response.data.length > 0) {
                        this.setState({
                            breakfastVeg: response.data.map(meal => meal.breafkfastVegWed),
                            breakfastNonVeg: response.data.map(meal => meal.breafkfastNonVegWed),
                            lunchVeg: response.data.map(meal => meal.lunchVegWed),
                            lunchNonVeg: response.data.map(meal => meal.lunchNonVegWed),
                            snacksVeg: response.data.map(meal => meal.snacksVegWed),
                            snacksNonVeg: response.data.map(meal => meal.snacksNonVegWed),
                            dinnerVeg: response.data.map(meal => meal.dinnerVegWed),
                            dinnerNonVeg: response.data.map(meal => meal.dinnerNonVegWed),
                                                      })
                                      }
                        })
              .catch((error) => {
                          console.log(error);
                        })

          }


    
        
        handleThursday(event){
            axios.get('http://localhost:5000/mealmenu/')
              .then(response => {
                    if (response.data.length > 0) {
                        this.setState({
                            breakfastVeg: response.data.map(meal => meal.breafkfastVegThur),
                            breakfastNonVeg: response.data.map(meal => meal.breafkfastNonVegThur),
                            lunchVeg: response.data.map(meal => meal.lunchVegThur),
                            lunchNonVeg: response.data.map(meal => meal.lunchNonVegThur),
                            snacksVeg: response.data.map(meal => meal.snacksVegThur),
                            snacksNonVeg: response.data.map(meal => meal.snacksNonVegThur),
                            dinnerVeg: response.data.map(meal => meal.dinnerVegThur),
                            dinnerNonVeg: response.data.map(meal => meal.dinnerNonVegThur),
                                                      })
                                      }
                        })
              .catch((error) => {
                          console.log(error);
                        })

          


    
        }
        handleFriday(event){
            axios.get('http://localhost:5000/mealmenu/')
              .then(response => {
                    if (response.data.length > 0) {
                        this.setState({
                            breakfastVeg: response.data.map(meal => meal.breafkfastVegFri),
                            breakfastNonVeg: response.data.map(meal => meal.breafkfastNonVegFri),
                            lunchVeg: response.data.map(meal => meal.lunchVegFri),
                            lunchNonVeg: response.data.map(meal => meal.lunchNonVegFri),
                            snacksVeg: response.data.map(meal => meal.snacksVegFri),
                            snacksNonVeg: response.data.map(meal => meal.snacksNonVegFri),
                            dinnerVeg: response.data.map(meal => meal.dinnerVegFri),
                            dinnerNonVeg: response.data.map(meal => meal.dinnerNonVegFri),
                                                      })
                                      }
                        })
              .catch((error) => {
                          console.log(error);
                        })

          }


    
        
        handleSaturday(event){
            axios.get('http://localhost:5000/mealmenu/')
              .then(response => {
                    if (response.data.length > 0) {
                        this.setState({
                            breakfastVeg: response.data.map(meal => meal.breafkfastVegSat),
                            breakfastNonVeg: response.data.map(meal => meal.breafkfastNonVegSat),
                            lunchVeg: response.data.map(meal => meal.lunchVegSat),
                            lunchNonVeg: response.data.map(meal => meal.lunchNonVegSat),
                            snacksVeg: response.data.map(meal => meal.snacksVegSat),
                            snacksNonVeg: response.data.map(meal => meal.snacksNonVegSat),
                            dinnerVeg: response.data.map(meal => meal.dinnerVegSat),
                            dinnerNonVeg: response.data.map(meal => meal.dinnerNonVegSat),
                                                      })
                                      }
                        })
              .catch((error) => {
                          console.log(error);
                        })

          }
        handleSunday(event){
            axios.get('http://localhost:5000/mealmenu/')
              .then(response => {
                    if (response.data.length > 0) {
                        this.setState({
                            breakfastVeg: response.data.map(meal => meal.breafkfastVegSun),
                            breakfastNonVeg: response.data.map(meal => meal.breafkfastNonVegSun),
                            lunchVeg: response.data.map(meal => meal.lunchVegSun),
                            lunchNonVeg: response.data.map(meal => meal.lunchNonVegSun),
                            snacksVeg: response.data.map(meal => meal.snacksVegSun),
                            snacksNonVeg: response.data.map(meal => meal.snacksNonVegSun),
                            dinnerVeg: response.data.map(meal => meal.dinnerVegSun),
                            dinnerNonVeg: response.data.map(meal => meal.dinnerNonVegSun),
                                                      })
                                      }
                        })
              .catch((error) => {
                          console.log(error);
                        })

          }



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
