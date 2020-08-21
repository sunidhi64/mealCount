import React, { Component } from "react";
import "./menu.css";
import axios from "axios";
export default class Menu extends Component {
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

    componentDidMount() {
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

    handleMonday(event){
        axios.get('http://localhost:5000/mealmenu/')
              .then(response => {
                    if (response.data.length > 0) {
                        this.setState({
                            breakfastVeg: response.data.breafkfastVegMon,
                            breakfastNonVeg: response.data.breafkfastNonVegMon,
                            lunchVeg: response.data.lunchVegMon,
                            lunchNonVeg: response.data.lunchNonVegMon,
                            snacksVeg: response.data.snacksVegMon,
                            snacksNonVeg: response.data.snacksNonVegMon,
                            dinnerVeg: response.data.dinnerVegMon,
                            dinnerNonVeg: response.data.dinnerNonVegMon,
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
                            breakfastVeg: response.data.breafkfastVegTue,
                            breakfastNonVeg: response.breafkfastNonVegTue,
                            lunchVeg: response.data.lunchVegTue,
                            lunchNonVeg: response.data.lunchNonVegTue,
                            snacksVeg: response.data.snacksVegTue,
                            snacksNonVeg: response.data.snacksNonVegTue,
                            dinnerVeg: response.data.dinnerVegMonTue,
                            dinnerNonVeg: response.data.dinnerNonVegTue,
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
                            breakfastVeg: response.data.breafkfastVegWed,
                            breakfastNonVeg: response.data.breafkfastNonVegWed,
                            lunchVeg: response.data.lunchVegWed,
                            lunchNonVeg: response.data.lunchNonVegWed,
                            snacksVeg: response.data.snacksVegWed,
                            snacksNonVeg: response.data.snacksNonVegWed,
                            dinnerVeg: response.data.dinnerVegWed,
                            dinnerNonVeg: response.data.dinnerNonVegWed,
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
                            breakfastVeg: response.data.breafkfastVegThur,
                            breakfastNonVeg: response.data.breafkfastNonVegThur,
                            lunchVeg: response.data.lunchVegThur,
                            lunchNonVeg: response.data.lunchNonVegThur,
                            snacksVeg: response.data.snacksVegThur,
                            snacksNonVeg: response.data.snacksNonVegThur,
                            dinnerVeg: response.data.dinnerVegThur,
                            dinnerNonVeg: response.data.dinnerNonVegThur,
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
                            breakfastVeg: response.data.breafkfastVegFri,
                            breakfastNonVeg: response.data.breafkfastNonVegFri,
                            lunchVeg: response.data.lunchVegFri,
                            lunchNonVeg: response.data.lunchNonVegFri,
                            snacksVeg: response.data.snacksVegFri,
                            snacksNonVeg: response.data.snacksNonVegFri,
                            dinnerVeg: response.data.dinnerVegFri,
                            dinnerNonVeg: response.data.dinnerNonVegFri,
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
                            breakfastVeg: response.data.breafkfastVegSat,
                            breakfastNonVeg: response.data.breafkfastNonVegSat,
                            lunchVeg: response.data.lunchVegSat,
                            lunchNonVeg: response.data.lunchNonVegSat,
                            snacksVeg: response.data.snacksVegSat,
                            snacksNonVeg: response.data.snacksNonVegSat,
                            dinnerVeg: response.data.dinnerVegSat,
                            dinnerNonVeg: response.data.dinnerNonVegSat,
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
                            breakfastVeg: response.data.breafkfastVegSun,
                            breakfastNonVeg: response.data.breafkfastNonVegSun,
                            lunchVeg: response.data.lunchVegSun,
                            lunchNonVeg: response.data.lunchNonVegSun,
                            snacksVeg: response.data.snacksVegSun,
                            snacksNonVeg: response.data.snacksNonVegSun,
                            dinnerVeg: response.data.dinnerVegSun,
                            dinnerNonVeg: response.data.dinnerNonVegSun,
                                                      })
                                      }
                        })
              .catch((error) => {
                          console.log(error);
                        })

          }


    
        

        

    
    

    
    render() {
       
        
        return (
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
    <td>{this.state.breakfastVeg}</td>
    <td>{this.state.lunchVeg}</td>
    <td>{this.state.snacksVeg}</td>
    <td>{this.state.dinnerVeg}</td>
    
</tr>
<tr>
    <th>NonVeg</th>
    <th>NonVeg</th>
    <th>NonVeg</th>
    <th>NonVeg</th>
</tr>
<tr>
<td>{this.state.breakfastNonVeg}</td>
    <td>{this.state.lunchNonVeg}</td>
    <td>{this.state.snacksNonVeg}</td>
    <td>{this.state.dinnerNonVeg}</td>
</tr>
</table>

    </div>
    </body>
    )
    
}
}
