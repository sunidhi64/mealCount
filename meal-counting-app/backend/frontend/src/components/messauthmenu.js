iimport React, { Component } from "react";
iimport "./messauthmenu.css";
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

    componentDidMount() {
        axios.post:('http://localhost:5000/mealmenu/')
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
