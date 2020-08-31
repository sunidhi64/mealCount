import React, { Component } from "react";
import "./messauthmenu.css";
import axios from "axios";
export default class MessauthMenu extends Component {
	constructor(){
        super();
        this.state={
            breakfastVeg: "",
            breakfastNonVeg: "" ,
            lunchVeg: "",
            lunchNonVeg: "" ,
            snacksVeg: "",
            snacksNonVeg: "",
            dinnerVeg: "",
            dinnerNonVeg: "",
            isMon: false,
            isTue: false,
            isWed: false,
            isThu: false,
            isFri: false,
            isSat: false,
            isSun: false,
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleMonday=this.handleMonday.bind(this)
        this.handleTuesday=this.handleTuesday.bind(this)
        this.handleWednesday=this.handleWednesday.bind(this)
        this.handleThursday=this.handleThursday.bind(this)
        this.handleFriday=this.handleFriday.bind(this)
        this.handleSaturday=this.handleSaturday.bind(this)
        this.handleSunday=this.handleSunday.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
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

    handleSubmit(event){
        event.preventDefault();
        if (this.state.isMon){
            const meal ={
                breakfastVegMon: this.state.breakfastVeg,
                breakfastNonVegMon: this.state.breakfastNonVeg,
                lunchVegMon: this.state.lunchVeg,
                lunchNonVegMon: this.state.lunchNonVeg,
                snacksVegMon: this.state.snacksVeg,
                snacksNonVegMon: this.state.snacksNonVeg,
                dinnerVegMon: this.state.dinnerVeg,
                dinnerNonVegMon: this.state.dinnerNonVeg,
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
                lunchVegTue: this.state.lunchVeg,
                lunchNonVegTue: this.state.lunchNonVeg,
                snacksVegTue: this.state.snacksVeg,
                snacksNonVegTue: this.state.snacksNonVeg,
                dinnerVegTue: this.state.dinnerVeg,
                dinnerNonVegTue: this.state.dinnerNonVeg,
            }
            axios.post("http://localhost:5000/messauth/messmenu/tue", meal)
                .then(res => console.log(res.data));
            //window.location = "http://localhost:3000/messauth/messmenu";
            }
 
         
        if (this.state.isWed){
            const meal ={
                breakfastVegWed: this.state.breakfastVeg,
                breakfastNonVegWed: this.state.breakfastNonVeg,
                lunchVegWed: this.state.lunchVeg,
                lunchNonVegWed: this.state.lunchNonVeg,
                snacksVegWed: this.state.snacksVeg,
                snacksNonVegWed: this.state.snacksNonVeg,
                dinnerVegWed: this.state.dinnerVeg,
                dinnerNonVegWed: this.state.dinnerNonVeg,
            }
            axios.post("http://localhost:5000/messauth/messmenu/wed", meal)
                .then(res => console.log(res.data));
            window.location = "http://localhost:3000/messauth/messmenu";
            }
 
         
        if (this.state.isThu){
            const meal ={
                breakfastVegThu: this.state.breakfastVeg,
                breakfastNonVegThu: this.state.breakfastNonVeg,
                lunchVegThu: this.state.lunchVeg,
                lunchNonVegThu: this.state.lunchNonVeg,
                snacksVegThu: this.state.snacksVeg,
                snacksNonVegThu: this.state.snacksNonVeg,
                dinnerVegThu: this.state.dinnerVeg,
                dinnerNonVegThu: this.state.dinnerNonVeg,
            }
            axios.post("http://localhost:5000/messauth/messmenu/thu", meal)
                .then(res => console.log(res.data));
            window.location = "http://localhost:3000/messauth/messmenu";
            }
 
         
        if (this.state.isFri){
            const meal ={
                breakfastVegFri: this.state.breakfastVeg,
                breakfastNonVegFri: this.state.breakfastNonVeg,
                lunchVegFri: this.state.lunchVeg,
                lunchNonVegFri: this.state.lunchNonVeg,
                snacksVegFri: this.state.snacksVeg,
                snacksNonVegFri: this.state.snacksNonVeg,
                dinnerVegFri: this.state.dinnerVeg,
                dinnerNonVegFri: this.state.dinnerNonVeg,
            }
            axios.post("http://localhost:5000/messauth/messmenu/fri", meal)
                .then(res => console.log(res.data));
            window.location = "http://localhost:3000/messauth/messmenu";
            }
         if (this.state.isSat){
            const meal ={
                breakfastVegSat: this.state.breakfastVeg,
                breakfastNonVegSat: this.state.breakfastNonVeg,
                lunchVegSat: this.state.lunchVeg,
                lunchNonVegSat: this.state.lunchNonVeg,
                snacksVegSat: this.state.snacksVeg,
                snacksNonVegSat: this.state.snacksNonVeg,
                dinnerVegSat: this.state.dinnerVeg,
                dinnerNonVegSat: this.state.dinnerNonVeg,
            }
            axios.post("http://localhost:5000/messauth/messmenu/sat", meal)
                .then(res => console.log(res.data));
            window.location = "http://localhost:3000/messauth/messmenu";
            }
         if (this.state.isSun){
            const meal ={
                breakfastVegSun: this.state.breakfastVeg,
                breakfastNonVegSun: this.state.breakfastNonVeg,
                lunchVegSun: this.state.lunchVeg,
                lunchNonVegSun: this.state.lunchNonVeg,
                snacksVegSun: this.state.snacksVeg,
                snacksNonVegSun: this.state.snacksNonVeg,
                dinnerVegSun: this.state.dinnerVeg,
                dinnerNonVegSun: this.state.dinnerNonVeg,
            }
            axios.post("http://localhost:5000/messauth/messmenu/sun", meal)
                .then(res => console.log(res.data));
            window.location = "http://localhost:3000/messauth/messmenu";
            }
 
    }
    render(){
        return(
            <body>
                <div className="menu-logout-position"><button className="menu-logout">Logout</button></div>
                <div className="navigation">
                    <button className="stu-attendance-nav">Meal Count</button>
                    <div className="stu-reg-position"><button className="stu-reg">Student Register</button></div>
                    <div className="menu-heading"><h1 style={{color:"#fff"}}>MEAL MENU</h1></div>
                    <div className="menu-logout-position"><button className="menu-logout">Logout</button></div>
                </div>
            <div className="buttons">
            <button className="monday mess-menu-button" onClick={this.handleMonday}>Monday</button>
             <button className="tuesday mess-menu-button" onClick={this.handleTuesday}>Tuesday</button>
                 <button className="wednesday mess-menu-button" onClick={this.handleWednesday}>Wednesday</button>
                     <button className="thursday mess-menu-button " onClick={this.handleThursday}>Thursday</button>
                         <button className="friday mess-menu-button" onClick={this.handleFriday}>Friday</button>
                             <button className="saturday mess-menu-button " onClick={this.handleSaturday}>Saturday</button>
             <button className="sunday mess-menu-button" onClick={this.handleSunday}>Sunday</button>
             </div>
            <div>
                <form onSubmit={this.handleSubmit}>
                 <table className="center" width="50%">

                     <caption><button type="submit" className="mess-menu-submit mess-menu-button">SUBMIT</button></caption>
                     <tr>
                         <th></th>
                         <th>VEG</th>
                         <th>NON-VEG</th>
                     </tr>
                     <tr>
                         <th>BREAKFAST</th>
                        <td><input className="mess-menu-input" type="text" placeholder="Enter your meal" name="breakfastVeg" onChange={this.handleChange}/></td>
                        <td><input className="mess-menu-input" type="text" placeholder="Enter your meal" name="breakfastNonVeg" onChange={this.handleChange}/></td>
                     </tr>
                     <tr>
                         <th>LUNCH</th>
                         <td><input className="mess-menu-input" type="text" placeholder="Enter your meal" name="lunchVeg" onChange={this.handleChange}/></td>
                         <td><input className="mess-menu-input" type="text" placeholder="Enter your meal" name="lunchNonVeg" onChange={this.handleChange}/></td>
                     </tr>
                     <tr>
                         <th>SNACKS</th>
                         <td><input className="mess-menu-input" type="text" placeholder="Enter your meal" name="snacksVeg" onChange={this.handleChange}/></td>
                         <td><input className="mess-menu-input" type="text" placeholder="Enter your meal" name="snacksNonVeg" onChange={this.handleChange}/></td>
                     </tr>
                     <tr>
                         <th>DINNER</th>
                         <td><input className="mess-menu-input" type="text" placeholder="Enter your meal" name="dinnerVeg" onChange={this.handleChange}/></td>
                         <td><input className="mess-menu-input" type="text" placeholder="Enter your meal" name="dinnerNonVeg" onChange={this.handleChange}/></td>
                         
                     </tr>
                 </table>
                </form>
            </div>
        </body>
        )
    }
}
