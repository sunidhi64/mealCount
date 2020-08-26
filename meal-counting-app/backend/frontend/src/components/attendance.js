import React, { Component } from "react";
import "./attendance.css";
import axios from "axios";

export default class Attendance extends Component {
    constructor(){
        super();
        this.state={
            breakfastVeg: false,
            breakfastNonVeg: false ,
            noBreakfast: false,
            lunchVeg: false,
            lunchNonVeg: false,
            noLunch: false,
            snacksVeg: false,
            snacksNonVeg: false,
            noSnacks: false,
            dinnerVeg: false,
            dinnerNonVeg: false,
            noDinner: false,
            isMon: false,
            isTue: false,
            isWed: false,
            isThu: false,
            isFri: false,
            isSat: false,
            isSun: false,
        }
        this.handleCheck=this.handleCheck.bind(this)
        this.handleMonday=this.handleMonday.bind(this)
        this.handleTuesday=this.handleTuesday.bind(this)
        this.handleWednesday=this.handleWednesday.bind(this)
        this.handleThursday=this.handleThursday.bind(this)
        this.handleFriday=this.handleFriday.bind(this)
        this.handleSaturday=this.handleSaturday.bind(this)
        this.handleSunday=this.handleSunday.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    

    handleMonday(event){
        console.log("I am clicked");
        this.setState(prevState => ({
                        isMon: !prevState.isMon
                    }));
    } 
    handleTuesday(event){
        console.log("I am clicked");
        this.setState(prevState => ({
                        isTue: !prevState.isTue
                    }));
    }
    handleWednesday(event){
        this.setState(prevState => ({
                        isWed: !prevState.isWed
                    }));
    }
    handleThursday(event){
        this.setState(prevState => ({
                        isThu: !prevState.isThu
                    }));
    }
    handleFriday(event){
        this.setState(prevState => ({
                        isFri: !prevState.isFri
                    }));
    }
    handleSaturday(event){
        this.setState(prevState => ({
                        isSat: !prevState.isSat
                    }));
    }
    handleSunday(event){
        this.setState(prevState => ({
                        isSun: !prevState.isSun
                    }));
    }

    handleCheck(event){
        this.setState({ [event.target.name]: event.target.checked })
    }
    
    handleSubmit(event){
        event.preventDefault();
        if (this.state.isMon){
            const meal ={
                breakfastVegMon: this.state.breakfastVeg,
                breakfastNonVegMon: this.state.breakfastNonVeg,
                noBreakfastMon: this.state.noBreakfast,
                lunchVegMon: this.state.lunchVeg,
                lunchNonVegMon: this.state.lunchNonVeg,
                noLunchMon: this.state.noLunch,
                snacksVegMon: this.state.snacksVeg,
                snacksNonVegMon: this.state.snacksNonVeg,
                noSnacksMon: this.state.noSnacks,
                dinnerVegMon: this.state.dinnerVeg,
                dinnerNonVegMon: this.state.dinnerNonVeg,
                noDinnerMon: this.state.noDinner,
            }

            console.log(meal);
   
            axios.post('http://localhost:5000/messauth/messmenu/mon', meal)
                .then(res => console.log(res.data));

            //window.location = "http://localhost:3000/messauth/messmenu";


            
            }
 
        
        if (this.state.isTue){
            const meal ={
                breakfastVegTue: this.state.breakfastVeg,
                breakfastNonVegTue: this.state.breakfastNonVeg,
                noBreakfastTue: this.state.noBreakfast,
                lunchVegTue: this.state.lunchVeg,
                lunchNonVegTue: this.state.lunchNonVeg,
                noLunchTue: this.state.noLunch,
                snacksVegTue: this.state.snacksVeg,
                snacksNonVegTue: this.state.snacksNonVeg,
                noSnacksue: this.state.noSnacks,
                dinnerVegTue: this.state.dinnerVeg,
                dinnerNonVegTue: this.state.dinnerNonVeg,
                noDinnerTue: this.state.noDinner,
            }
            axios.post("http://localhost:5000/messauth/messmenu/tue", meal)
                .then(res => console.log(res.data));
            window.location = "http://localhost:3000/messauth/messmenu";
            }
        
        if (this.state.isWed){
            const meal ={
                breakfastVegWed: this.state.breakfastVeg,
                breakfastNonVegWed: this.state.breakfastNonVeg,
                noBreakfastWed: this.state.noBreakfast,
                lunchVegWed: this.state.lunchVeg,
                lunchNonVegWed: this.state.lunchNonVeg,
                noLunchWed: this.state.noLunch,
                snacksVegWed: this.state.snacksVeg,
                snacksNonVegWed: this.state.snacksNonVeg,
                noSnacksWed: this.state.noSnacks,
                dinnerVegWed: this.state.dinnerVeg,
                dinnerNonVegWed: this.state.dinnerNonVeg,
                noDinnerWed: this.state.noDinner,
            }
            axios.post("http://localhost:5000/messauth/messmenu/wed", meal)
                .then(res => console.log(res.data));
            window.location = "http://localhost:3000/messauth/messmenu";
            }
 
         
        if (this.state.isThu){
            const meal ={
                breakfastVegThu: this.state.breakfastVeg,
                breakfastNonVegThu: this.state.breakfastNonVeg,
                noBreakfastThu: this.state.noBreakfast,
                lunchVegThu: this.state.lunchVeg,
                lunchNonVegThu: this.state.lunchNonVeg,
                noLunchThu: this.state.noLunch,
                snacksVegThu: this.state.snacksVeg,
                snacksNonVegThu: this.state.snacksNonVeg,
                noSnacksThu: this.state.noSnacks,
                dinnerVegThu: this.state.dinnerVeg,
                dinnerNonVegThu: this.state.dinnerNonVeg,
                noDinnerThu: this.state.noDinner,
            }
            axios.post("http://localhost:5000/messauth/messmenu/thu", meal)
                .then(res => console.log(res.data));
            window.location = "http://localhost:3000/messauth/messmenu";
            }
        
        if (this.state.isFri){
            const meal ={
                breakfastVegFri: this.state.breakfastVeg,
                breakfastNonVegFri: this.state.breakfastNonVeg,
                noBreakfastFri: this.state.noBreakfast,
                lunchVegFri: this.state.lunchVeg,
                lunchNonVegFri: this.state.lunchNonVeg,
                noLunchFri: this.state.noLunch,
                snacksVegFri: this.state.snacksVeg,
                snacksNonVegFri: this.state.snacksNonVeg,
                noSnacksFri: this.state.noSnacks,
                dinnerVegFri: this.state.dinnerVeg,
                dinnerNonVegFri: this.state.dinnerNonVeg,
                noDinnerFri: this.state.noDinner,
            }
            axios.post("http://localhost:5000/messauth/messmenu/fri", meal)
                .then(res => console.log(res.data));
            window.location = "http://localhost:3000/messauth/messmenu";
            }
         if (this.state.isSat){
            const meal ={
                breakfastVegSat: this.state.breakfastVeg,
                breakfastNonVegSat: this.state.breakfastNonVeg,
                noBreakfastSat: this.state.noBreakfast,
                lunchVegSat: this.state.lunchVeg,
                lunchNonVegSat: this.state.lunchNonVeg,
                noLunchSat: this.state.noLunch,
                snacksVegSat: this.state.snacksVeg,
                snacksNonVegSat: this.state.snacksNonVeg,
                noSnacksSat: this.state.noSnacks,
                dinnerVegSat: this.state.dinnerVeg,
                dinnerNonVegSat: this.state.dinnerNonVeg,
                noSnacksSat: this.state.noSnacks,
            }
            axios.post("http://localhost:5000/messauth/messmenu/sat", meal)
                .then(res => console.log(res.data));
            window.location = "http://localhost:3000/messauth/messmenu";
            }
         if (this.state.isSun){
            const meal ={
                breakfastVegSun: this.state.breakfastVeg,
                breakfastNonVegSun: this.state.breakfastNonVeg,
                noBreakfastSun: this.state.noBreakfast,
                lunchVegSun: this.state.lunchVeg,
                lunchNonVegSun: this.state.lunchNonVeg,
                noLunchSun: this.state.noLunch,
                snacksVegSun: this.state.snacksVeg,
                snacksNonVegSun: this.state.snacksNonVeg,
                noDinnerSun: this.state.noDinner,
                dinnerVegSun: this.state.dinnerVeg,
                dinnerNonVegSun: this.state.dinnerNonVeg,
                noDinnerSun: this.state.noDinner,
            }
            axios.post("http://localhost:5000/messauth/messmenu/sun", meal)
                .then(res => console.log(res.data));
            window.location = "http://localhost:3000/messauth/messmenu";
            }
 
    }



    render() {
        return(
            <body>
            <div className="buttons2">
            <button className="monday2 student-attendance-button">Monday</button>
             <button className="tuesday2 student-attendance-button">Tuesday</button>
                 <button className="wednesday2 student-attendance-button">Wednesday</button>
                     <button className="thursday2 student-attendance-button">Thursday</button>
                         <button className="friday2 student-attendance-button">Friday</button>
                             <button className="saturday2 student-attendance-button">Saturday</button>
             <button className="sunday2 student-attendance-button">Sunday</button>
             </div>
            <div>
                 <table className="center2" width="50%">
                     <caption><button type="submit" className="student-attendance-button student-attendance-submit">SUBMIT</button></caption>
                     <tr>
                         <th></th>
                         <th>VEG</th>
                         <th>NON-VEG</th>
                         <th>NO MEAL</th>
                     </tr>
                     <tr>
                         <th>BREAKFAST</th>
                        <td><input 
                                className="student-checkbox" 
                                id="breakfast-veg-checkbox" 
                                type="checkbox" 
                                name="breakfastVeg" 
                                onChange={this.handleChange}    
                                checked={this.state.breakfastVeg}/>
                            <label for="breakfast-veg-checkbox">I prefer veg</label></td>
                        <td><input 
                                className="student-checkbox" 
                                id="breakfast-nonveg-checkbox" 
                                type="checkbox" 
                                name="breakfastNonVeg" 
                                onChange={this.handleChange}    
                                checked={this.state.breakfastNonVeg}/>
                            <label for="breakfast-nonveg-checkbox">I prefer non-veg</label></td>
                        <td><input 
                                className="student-checkbox" 
                                id="breakfast-nomeal-checkbox" 
                                type="checkbox" 
                                name="noBreakfast" 
                                onChange={this.handleChange}    
                                checked={this.state.noBreakfast}/>
                            <label for="breakfast-nomeal-checkbox">No meal</label></td>
                     </tr>
                     <tr>
                         <th>LUNCH</th>
                         <td><input 
                                className="student-checkbox" 
                                id="lunch-veg-checkbox" 
                                type="checkbox"
                                name="lunchVeg" 
                                onChange={this.handleChange}    
                                checked={this.state.lunchVeg}/>
                            <label for="lunch-veg-checkbox">I prefer veg</label></td>
                        <td><input 
                                className="student-checkbox" 
                                id="lunch-nonveg-checkbox" 
                                type="checkbox" 
                                name="lunchNonVeg" 
                                onChange={this.handleChange}    
                                checked={this.state.lunchNonVeg}/><label for="lunch-nonveg-checkbox">I prefer non-veg</label></td>
                        <td><input 
                                className="student-checkbox"  
                                id="lunch-nomeal-checkbox" 
                                type="checkbox" 
                                name="noLunch" 
                                onChange={this.handleChange}    
                                checked={this.state.noLunch}/><label for="lunch-nomeal-checkbox">No meal</label></td>
                     </tr>
                     <tr>
                         <th>SNACKS</th>
                         <td><input 
                                    className="student-checkbox" 
                                    id="snacks-veg-checkbox" 
                                    type="checkbox"
                                    name="snacksVeg" 
                                    onChange={this.handleChange}    
                                    checked={this.state.snacksVeg}/>
                            <label for="snacks-veg-checkbox">I prefer veg</label></td>
                        <td><input 
                                className="student-checkbox" 
                                id="snacks-nonveg-checkbox"     
                                type="checkbox" 
                                name="snacksNonVeg" 
                                onChange={this.handleChange}    
                                checked={this.state.snacksNonVeg}/>
                            <label for="snacks-nonveg-checkbox">I prefer non-veg</label></td>
                        <td><input 
                                className="student-checkbox" 
                                id="snacks-nomeal-checkbox" 
                                type="checkbox" 
                                name="noSnacks" 
                                onChange={this.handleChange}    
                                checked={this.state.noSnacks}/>
                            <label for="snacks-nomeal-checkbox">No meal</label></td>
                         
                     </tr>
                     <tr>
                         <th>DINNER</th>
                         <td><input 
                                className="student-checkbox" 
                                id="dinner-veg-checkbox" 
                                type="checkbox"
                                name="dinnerVeg" 
                                onChange={this.handleChange}    
                                checked={this.state.dinnerVeg}/>
                            <label for="dinner-veg-checkbox">I prefer veg</label></td>
                        <td><input 
                                className="student-checkbox" 
                                id="dinner-nonveg-checkbox" 
                                type="checkbox" 
                                name="dinnerNonVeg" 
                                onChange={this.handleChange}    
                                checked={this.state.dinnerNonVeg}/>
                            <label for="dinner-nonveg-checkbox">I prefer non-veg</label></td>
                        <td><input 
                                className="student-checkbox" 
                                id="dinner-nomeal-checkbox" 
                                type="checkbox" 
                                name="noDinner" 
                                onChange={this.handleChange}    
                                checked={this.state.noDinner}/>
                            <label for="dinner-nomeal-checkbox">No meal</label></td>
                     </tr>
                 </table>
            </div>
        </body>
        )
    }
}
