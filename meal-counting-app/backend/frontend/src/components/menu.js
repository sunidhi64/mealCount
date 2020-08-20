import React, { Component } from "react";
import "./menu.css"
export default class Menu extends Component {
    constructor(){
        super();
        this.state={
            breakfastVeg: [];
            breakfastNonVeg: [];
            lunchVeg: [];
            lunchNonVeg: [];
            snacksVeg: [];
            snacksNonVeg: [];
            dinnerVeg: [];
            dinnerNonVeg: [];
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
        event.preventDefault();
        const user = {
                      username: this.state.username,
                      password: this.state.password
                    }

            console.log(user);

            axios.post('http://localhost:5000/messauth/login', user)
              .then(res => console.log(res.data));

            //window.location = '/messauth/dashboard'+this.props.match.params.id;
          }


        ``

    }
    handleTuesday(event){

    }
    handleWednesday(event){

    }
    handleThursday(event){

    }
    handleFriday(event){

    }
    handleSaturday(event){

    }
    handleSunday(event){

    }
    render() {
        return (
            <body className="student-menu">
            <div>
                <table class="center" width="50%">
                    <tr>
                        <th colSpan="5" style={{fontSize:"20px"}}>Weekly Meal Menu</th>
                    </tr>
                    <tr>
                        <th rowSpan="5" >
                            <ol>    
                            <li><button className="monday">Monday</button></li>
                            <br/>
                            <li><button className="tuesday">Tuesday</button></li>
                            <br/>
                            <li><button className="wednesday">Wednesday</button></li>
                            <br/>   
                            <li><button className="thursday">Thursday</button></li>
                            <br/>
                            <li><button className="friday">Friday</button></li>
                            <br/>
                            <li><button className="saturday">Saturday</button></li>
                            <br/>
                            <li><button className="sunday">Sunday</button></li>
                            </ol>
                        </th>
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
                        <td><ol type="1"><li></li><li></li><li></li><li></li><li></li></ol></td>
                        <td><ol type="1"><li></li><li></li><li></li><li></li><li></li></ol></td>
                        <td><ol type="1"><li></li><li></li><li></li><li></li><li></li></ol></td>
                        <td><ol type="1"><li></li><li></li><li></li><li></li><li></li></ol></td>
    
                    </tr>
                    <tr>
                        <th>NonVeg</th>
                        <th>NonVeg</th>
                        <th>NonVeg</th>
                        <th>NonVeg</th>
                    </tr>
                    <tr>
                        <td><ol type="1"><li></li><li></li><li></li><li></li><li></li></ol></td>
                        <td><ol type="1"><li></li><li></li><li></li><li></li><li></li></ol></td>
                        <td><ol type="1"><li></li><li></li><li></li><li></li><li></li></ol></td>
                        <td><ol type="1"><li></li><li></li><li></li><li></li><li></li></ol></td>
                    </tr>
            </table>

        </div>
    </body>
    )
    }
}
