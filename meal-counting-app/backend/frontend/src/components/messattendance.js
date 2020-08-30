import React, { Component } from "react";
import "./messattendance.css";
import axios from 'axios';


export default class Messattendance extends Component {
    
    constructor(props){
        super(props);
        this.state={
            menuMon: [],
            menuTue: [],
            menuWed: [],
            menuThu: [],
            menuFri: [],
            menuSat: [],
            menuSun: [],
            isMon: false,
            isTue: false,
            isWed: false,
            isThu: false,
            isFri: false,
            isSat: false,
            isSun: false,
        }
        this.handleMonday=this.handleMonday.bind(this);
        this.handleTuesday=this.handleTuesday.bind(this);
        this.handleWednesday=this.handleWednesday.bind(this);
        this.handleThursday=this.handleThursday.bind(this);
        this.handleFriday=this.handleFriday.bind(this);
        this.handleSaturday=this.handleSaturday.bind(this);
        this.handleSunday=this.handleSunday.bind(this);
    }
        
        
        handleMonday(event){
        this.setState(prevState => ({
                        isMon: !prevState.isMon
                    }));

        axios.get('http://localhost:5000/messauth/attendance/mon')
              .then(response => {
                        console.log(response);
                        this.setState({
                            menuMon: response.data
                                                      })
                            console.log(this.state.menuMon);
                        })
              .catch((error) => {
                          console.log(error);
                        });
                console.log(this.state.menuMon);

                
        }

                
        
    handleTuesday(event){
        this.setState(prevState => ({
                        isTue: !prevState.isTue
                    }));

        axios.get('http://localhost:5000/messauth/attendance/tue')
              .then(response => {
                        console.log(response);
                        this.setState({
                            menuTue: response.data
                                                      })
                            console.log(this.state.menuMon);
                        })
              .catch((error) => {
                          console.log(error);
                        });
                console.log(this.state.menuMon);

                
        }
    handleWednesday(event){
        this.setState(prevState => ({
                        isWed: !prevState.isWed
                    }));

        axios.get('http://localhost:5000/messauth/attendance/wed')
              .then(response => {
                        console.log(response);
                        this.setState({
                            menuWed: response.data
                                                      })
                            console.log(this.state.menuMon);
                        })
              .catch((error) => {
                          console.log(error);
                        });
                console.log(this.state.menuMon);

                
        }
    handleThursday(event){
        this.setState(prevState => ({
                        isThu: !prevState.isThu
                    }));

        axios.get('http://localhost:5000/messauth/attendance/thu')
              .then(response => {
                        console.log(response);
                        this.setState({
                            menuThu: response.data
                                                      })
                            console.log(this.state.menuMon);
                        })
              .catch((error) => {
                          console.log(error);
                        });
                console.log(this.state.menuMon);

                
        }
    handleFriday(event){
        this.setState(prevState => ({
                        isFri: !prevState.isFri
                    }));

        axios.get('http://localhost:5000/messauth/attendance/fri')
              .then(response => {
                        console.log(response);
                        this.setState({
                            menuFri: response.data
                                                      })
                            console.log(this.state.menuMon);
                        })
              .catch((error) => {
                          console.log(error);
                        });
                console.log(this.state.menuMon);

                
        }
    handleSaturday(event){
        this.setState(prevState => ({
                        isSat: !prevState.isSat
                    }));

        axios.get('http://localhost:5000/messauth/attendance/sat')
              .then(response => {
                        console.log(response);
                        this.setState({
                            menuSat: response.data
                                                      })
                            console.log(this.state.menuMon);
                        })
              .catch((error) => {
                          console.log(error);
                        });
                console.log(this.state.menuMon);

                
        }
    handleSunday(event){
        this.setState(prevState => ({
                        isSun: !prevState.isSun
                    }));

        axios.get('http://localhost:5000/messauth/attendance/sun')
              .then(response => {
                        console.log(response);
                        this.setState({
                            menuSun: response.data
                                                      })
                            console.log(this.state.menuMon);
                        })
              .catch((error) => {
                          console.log(error);
                        });
                console.log(this.state.menuMon);

                
        }



    render() {
        const isMon = this.state.isMon;
        const isTue = this.state.isTue;
        const isWed = this.state.isWed;
        const isThu = this.state.isThu;
        const isFri = this.state.isFri;
        const isSat = this.state.isSat;
        const isSun = this.state.isSun;
        var countVegMonBreakfast = 0;
        var countNonVegMonBreakfast = 0;
        var countNoMonBreakfast = 0;
        var countVegTueBreakfast = 0;
        var countNonVegTueBreakfast = 0;
        var countNoTueBreakfast = 0;
        var countVegWedBreakfast = 0;
        var countNonVegWedBreakfast = 0;
        var countNoWedBreakfast = 0;
        var countVegThuBreakfast = 0;
        var countNonVegThuBreakfast = 0;
        var countNoThuBreakfast = 0;
        var countVegFriBreakfast = 0;
        var countNonVegFriBreakfast = 0;
        var countNoFriBreakfast = 0;
        var countVegSatBreakfast = 0;
        var countNonVegSatBreakfast = 0;
        var countNoSatBreakfast = 0;
        var countVegSunBreakfast = 0;
        var countNonVegSunBreakfast = 0;
        var countNoSunBreakfast = 0;
        var countVegMonLunch = 0;
        var countNonVegMonLunch = 0;
        var countNoMonLunch = 0;
        var countVegTueLunch = 0;
        var countNonVegTueLunch = 0;
        var countNoTueLunch = 0;
        var countVegWedLunch = 0;
        var countNonVegWedLunch = 0;
        var countNoWedLunch = 0;
        var countVegThuLunch = 0;
        var countNonVegThuLunch = 0;
        var countNoThuLunch = 0;
        var countVegFriLunch = 0;
        var countNonVegFriLunch = 0;
        var countNoFriLunch = 0;
        var countVegSatLunch = 0;
        var countNonVegSatLunch = 0;
        var countNoSatLunch = 0;
        var countVegSunLunch = 0;
        var countNonVegSunLunch = 0;
        var countNoSunLunch = 0;
        var countVegMonSnacks = 0;
        var countNonVegMonSnacks = 0;
        var countNoMonSnacks = 0;
        var countVegTueSnacks = 0;
        var countNonVegTueSnacks = 0;
        var countNoTueSnacks = 0;
        var countVegWedSnacks = 0;
        var countNonVegWedSnacks = 0;
        var countNoWedSnacks = 0;
        var countVegThuSnacks = 0;
        var countNonVegThuSnacks = 0;
        var countNoThuSnacks = 0;
        var countVegFriSnacks = 0;
        var countNonVegFriSnacks = 0;
        var countNoFriSnacks = 0;
        var countVegSatSnacks = 0;
        var countNonVegSatSnacks = 0;
        var countNoSatSnacks = 0;
        var countVegSunSnacks = 0;
        var countNonVegSunSnacks = 0;
        var countNoSunSnacks = 0;
        var countVegMonDinner = 0;
        var countNonVegMonDinner = 0;
        var countNoMonDinner = 0;
        var countVegTueDinner = 0;
        var countNonVegTueDinner = 0;
        var countNoTueDinner = 0;
        var countVegWedDinner = 0;
        var countNonVegWedDinner = 0;
        var countNoWedDinner = 0;
        var countVegThuDinner = 0;
        var countNonVegThuDinner = 0;
        var countNoThuDinner = 0;
        var countVegFriDinner = 0;
        var countNonVegFriDinner = 0;
        var countNoFriDinner = 0;
        var countVegSatDinner = 0;
        var countNonVegSatDinner = 0;
        var countNoSatDinner = 0;
        var countVegSunDinner = 0;
        var countNonVegSunDinner = 0;
        var countNoSunDinner = 0; 
        {this.state.menuMon.map((menu, index) =>(
                <div>
                {menu.breakfastVegMon?countVegMonBreakfast+=1:"no"}
                {menu.breakfastNonVegMon?countNonVegMonBreakfast+=1:"no"}
                {menu.noBreakfastMon?countNoMonBreakfast+=1:"no"}
                {menu.lunchVegMon?countVegMonLunch+=1:"no"}
                {menu.lunchNonVegMon?countNonVegMonLunch+=1:"no"}
                {menu.noLunchMon?countNoMonLunch+=1:"no"}
                {menu.snacksVegMon?countVegMonSnacks+=1:"no"}
                {menu.snacksNonVegMon?countNonVegMonSnacks+=1:"no"}
                {menu.noSnacksMon?countNoMonSnacks+=1:"no"}
                {menu.dinnerVegMon?countVegMonDinner+=1:"no"}
                {menu.dinnerNonVegMon?countNonVegMonDinner+=1:"no"}
                {menu.noDinnerMon?countNoMonDinner+=1:"no"}
                </div>
            ))}
        
        {this.state.menuTue.map((menu, index) =>(
                <div>
                {menu.breakfastVegTue?countVegTueBreakfast+=1:"no"}
                {menu.breakfastNonVegTue?countNonVegTueBreakfast+=1:"no"}
                {menu.noBreakfastTue?countNoTueBreakfast+=1:"no"}
                {menu.lunchVegTue?countVegTueLunch+=1:"no"}
                {menu.lunchNonVegTue?countNonVegTueLunch+=1:"no"}
                {menu.noLunchTue?countNoTueLunch+=1:"no"}
                {menu.snacksVegTue?countVegTueSnacks+=1:"no"}
                {menu.snacksNonVegTue?countNonVegTueLunch+=1:"no"}
                {menu.noSnacksTue?countNoTueLunch+=1:"no"}
                {menu.dinnerVegTue?countVegTueDinner+=1:"no"}
                {menu.dinnerNonVegTue?countNonVegTueDinner+=1:"no"}
                {menu.noDinnerTue?countNoTueDinner+=1:"no"}
                </div>
            ))}
        
        {this.state.menuWed.map((menu, index) =>(
                <div>
                {menu.breakfastVegWed?countVegWedBreakfast+=1:"no"}
                {menu.breakfastNonVegWed?countNonVegWedBreakfast+=1:"no"}
                {menu.noBreakfastWed?countNoWedBreakfast+=1:"no"}
                {menu.lunchVegWed?countVegWedLunch+=1:"no"}
                {menu.lunchNonVegWed?countNonVegWedLunch+=1:"no"}
                {menu.noLunchWed?countNoWedLunch+=1:"no"}
                {menu.snacksVegWed?countVegWedSnacks+=1:"no"}
                {menu.snacksNonVegWed?countNonVegWedSnacks+=1:"no"}
                {menu.noSnacksWed?countNoWedSnacks+=1:"no"}
                {menu.dinnerVegWed?countVegWedDinner+=1:"no"}
                {menu.dinnerNonVegWed?countNonVegWedDinner+=1:"no"}
                {menu.noDinnerWed?countNoWedDinner+=1:"no"}
                </div>
            ))}
        
        {this.state.menuThu.map((menu, index) =>(
                <div>
                {menu.breakfastVegThu?countVegThuBreakfast+=1:"no"}
                {menu.breakfastNonVegThu?countNonVegThuBreakfast+=1:"no"}
                {menu.noBreakfastThu?countNoThuBreakfast+=1:"no"}
                {menu.lunchVegThu?countVegThuLunch+=1:"no"}
                {menu.lunchNonVegThu?countNonVegThuLunch+=1:"no"}
                {menu.noLunchThu?countNoThuLunch+=1:"no"}
                {menu.snacksVegThu?countVegThuSnacks+=1:"no"}
                {menu.snacksNonVegThu?countNonVegThuSnacks+=1:"no"}
                {menu.noSnacksThu?countNoThuSnacks+=1:"no"}
                {menu.dinnerVegThu?countVegThuDinner+=1:"no"}
                {menu.dinnerNonVegThu?countNonVegThuDinner+=1:"no"}
                {menu.noDinnerThu?countNoThuDinner+=1:"no"}
                </div>
            ))}
        
        {this.state.menuFri.map((menu, index) =>(
                <div>
                {menu.breakfastVegFri?countVegFriBreakfast+=1:"no"}
                {menu.breakfastNonVegFri?countNonVegFriBreakfast+=1:"no"}
                {menu.noBreakfastFri?countNoFriBreakfast+=1:"no"}
                {menu.lunchVegFri?countVegFriLunch+=1:"no"}
                {menu.lunchNonVegFri?countNonVegFriLunch+=1:"no"}
                {menu.noLunchFri?countNoFriLunch+=1:"no"}
                {menu.snacksVegFri?countVegFriSnacks+=1:"no"}
                {menu.snacksNonVegFri?countNonVegFriSnacks+=1:"no"}
                {menu.noSnacksFri?countNoFriSnacks+=1:"no"}
                {menu.dinnerVegFri?countVegFriDinner+=1:"no"}
                {menu.dinnerNonVegFri?countNonVegFriDinner+=1:"no"}
                {menu.noDinnerFri?countNoFriDinner+=1:"no"}
                </div>
            ))}
        
        {this.state.menuSat.map((menu, index) =>(
                <div>
                {menu.breakfastVegSat?countVegSatBreakfast+=1:"no"}
                {menu.breakfastNonVegSat?countNonVegSatBreakfast+=1:"no"}
                {menu.noBreakfastSat?countNoSatBreakfast+=1:"no"}
                {menu.lunchVegSat?countVegSatLunch+=1:"no"}
                {menu.lunchNonVegSat?countNonVegSatLunch+=1:"no"}
                {menu.noLunchSat?countNoSatLunch+=1:"no"}
                {menu.snacksVegSat?countVegSatSnacks+=1:"no"}
                {menu.snacksNonVegSat?countNonVegSatSnacks+=1:"no"}
                {menu.noSnacksSat?countNoSatSnacks+=1:"no"}
                {menu.dinnerVegSat?countVegSatDinner+=1:"no"}
                {menu.dinnerNonVegSat?countNonVegSatDinner+=1:"no"}
                {menu.noDinnerSat?countNoSatDinner+=1:"no"}
                </div>
            ))}
        
        {this.state.menuSun.map((menu, index) =>(
                <div>
                {menu.breakfastVegSun?countVegSunBreakfast+=1:"no"}
                {menu.breakfastNonVegSun?countNonVegSunBreakfast+=1:"no"}
                {menu.noBreakfastSun?countNoSunBreakfast+=1:"no"}
                {menu.lunchVegSun?countVegSunLunch+=1:"no"}
                {menu.lunchNonVegSun?countNonVegSunLunch+=1:"no"}
                {menu.noLunchSun?countNoSunLunch+=1:"no"}
                {menu.snacksVegSun?countVegSunSnacks+=1:"no"}
                {menu.snacksNonVegSun?countNonVegSunSnacks+=1:"no"}
                {menu.noSnacksSun?countNoSunSnacks+=1:"no"}
                {menu.dinnerVegSun?countVegSunDinner+=1:"no"}
                {menu.dinnerNonVegSun?countNonVegSunDinner+=1:"no"}
                {menu.noDinnerSun?countNoSunDinner+=1:"no"}
                </div>
            ))}
        
        return(
            <body>
            
            <div className="buttons3">
            <button className="monday3 mess-attendance-button" onClick={this.handleMonday}>Monday</button>
             <button className="tuesday3 mess-attendance-button"onClick={this.handleTuesday}>Tuesday</button>
                 <button className="wednesday3 mess-attendance-button"onClick={this.handleWednesday}>Wednesday</button>
                     <button className="thursday3 mess-attendance-button"onClick={this.handleThursday}>Thursday</button>
                         <button className="friday3 mess-attendance-button"onClick={this.handleFriday}>Friday</button>
                             <button className="saturday3 mess-attendance-button"onClick={this.handleSaturday}>Saturday</button>
             <button className="sunday3 mess-attendance-button"onClick={this.handleSunday}>Sunday</button>
             </div>
            <div>
                 <table className="center3" width="50%">
                     
                     <tr>
                         <th></th>
                         <th>VEG COUNT</th>
                         <th>NON-VEG COUNT</th>
                         <th>TOTAL MEALS</th>
                         <th>NO MEAL</th>
                     </tr>
                    {isMon?
                    <tbody>
                     <tr>

                         <th>BREAKFAST</th>
                        <td>{countVegMonBreakfast}</td>
                        <td>{countNonVegMonBreakfast}</td>
                        <td>{countVegMonBreakfast+countNonVegMonBreakfast}</td>
                        <td>{countNoMonBreakfast}</td>
                        
                     </tr>
                     <tr>
                         <th>LUNCH</th>
                         <td>{countVegMonLunch}</td>
                        <td>{countNonVegMonLunch}</td>
                        <td>{countVegMonLunch+countNonVegMonLunch}</td>
                        <td>{countNoMonLunch}</td>
                     </tr>
                     <tr>
                         <th>SNACKS</th>
                         <td>{countVegMonSnacks}</td>
                        <td>{countNonVegMonSnacks}</td>
                        <td>{countVegMonSnacks+countNonVegMonSnacks}</td>
                        <td>{countNoMonSnacks}</td>
                     </tr>
                     <tr>
                         <th>DINNER</th>
                         <td>{countVegMonDinner}</td>
                        <td>{countNonVegMonDinner}</td>
                        <td>{countVegMonDinner+countNonVegMonDinner}</td>
                        <td>{countNoMonDinner}</td>
                     </tr>
                     </tbody>
                    :""}
                {isTue?
                    <tbody>
                     <tr>

                         <th>BREAKFAST</th>
                        <td>{countVegTueBreakfast}</td>
                        <td>{countNonVegTueBreakfast}</td>
                        <td>{countVegTueBreakfast+countNonVegTueBreakfast}</td>
                        <td>{countNoTueBreakfast}</td>
                        
                     </tr>
                     <tr>
                         <th>LUNCH</th>
                         <td>{countVegTueLunch}</td>
                        <td>{countNonVegTueLunch}</td>
                        <td>{countVegTueLunch+countNonVegTueLunch}</td>
                        <td>{countNoTueLunch}</td>
                     </tr>
                     <tr>
                         <th>SNACKS</th>
                         <td>{countVegTueSnacks}</td>
                        <td>{countNonVegTueSnacks}</td>
                        <td>{countVegTueSnacks+countNonVegTueSnacks}</td>
                        <td>{countNoTueSnacks}</td>
                     </tr>
                     <tr>
                         <th>DINNER</th>
                         <td>{countVegTueDinner}</td>
                        <td>{countNonVegTueDinner}</td>
                        <td>{countVegTueDinner+countNonVegTueDinner}</td>
                        <td>{countNoTueDinner}</td>
                     </tr>
                     </tbody>
                    :''}
                {isWed?
                    <tbody>
                     <tr>

                         <th>BREAKFAST</th>
                        <td>{countVegWedBreakfast}</td>
                        <td>{countNonVegWedBreakfast}</td>
                        <td>{countVegWedBreakfast+countNonVegWedBreakfast}</td>
                        <td>{countNoWedBreakfast}</td>
                        
                     </tr>
                     <tr>
                         <th>LUNCH</th>
                         <td>{countVegWedLunch}</td>
                        <td>{countNonVegWedLunch}</td>
                        <td>{countVegWedLunch+countNonVegWedLunch}</td>
                        <td>{countNoWedLunch}</td>
                     </tr>
                     <tr>
                         <th>SNACKS</th>
                         <td>{countVegWedSnacks}</td>
                        <td>{countNonVegWedSnacks}</td>
                        <td>{countVegWedSnacks+countNonVegWedSnacks}</td>
                        <td>{countNoWedSnacks}</td>
                     </tr>
                     <tr>
                         <th>DINNER</th>
                         <td>{countVegWedDinner}</td>
                        <td>{countNonVegWedDinner}</td>
                        <td>{countVegWedDinner+countNonVegWedDinner}</td>
                        <td>{countNoWedDinner}</td>
                     </tr>
                     </tbody>
                    :''}
                {isThu?
                    <tbody>
                     <tr>

                         <th>BREAKFAST</th>
                        <td>{countVegThuBreakfast}</td>
                        <td>{countNonVegThuBreakfast}</td>
                        <td>{countVegThuBreakfast+countNonVegThuBreakfast}</td>
                        <td>{countNoThuBreakfast}</td>
                        
                     </tr>
                     <tr>
                         <th>LUNCH</th>
                         <td>{countVegThuLunch}</td>
                        <td>{countNonVegThuLunch}</td>
                        <td>{countVegThuLunch+countNonVegThuLunch}</td>
                        <td>{countNoThuLunch}</td>
                     </tr>
                     <tr>
                         <th>SNACKS</th>
                         <td>{countVegThuSnacks}</td>
                        <td>{countNonVegThuSnacks}</td>
                        <td>{countVegThuSnacks+countNonVegThuSnacks}</td>
                        <td>{countNoThuSnacks}</td>
                     </tr>
                     <tr>
                         <th>DINNER</th>
                         <td>{countVegThuDinner}</td>
                        <td>{countNonVegThuDinner}</td>
                        <td>{countVegThuDinner+countNonVegThuDinner}</td>
                        <td>{countNoThuDinner}</td>
                     </tr>
                     </tbody>
                    :''}
                {isFri?
                    <tbody>
                     <tr>

                         <th>BREAKFAST</th>
                        <td>{countVegFriBreakfast}</td>
                        <td>{countNonVegFriBreakfast}</td>
                        <td>{countVegFriBreakfast+countNonVegFriBreakfast}</td>
                        <td>{countNoFriBreakfast}</td>
                        
                     </tr>
                     <tr>
                         <th>LUNCH</th>
                         <td>{countVegFriLunch}</td>
                        <td>{countNonVegFriLunch}</td>
                        <td>{countVegFriLunch+countNonVegFriLunch}</td>
                        <td>{countNoFriLunch}</td>
                     </tr>
                     <tr>
                         <th>SNACKS</th>
                         <td>{countVegFriSnacks}</td>
                        <td>{countNonVegFriSnacks}</td>
                        <td>{countVegFriSnacks+countNonVegFriSnacks}</td>
                        <td>{countNoFriSnacks}</td>
                     </tr>
                     <tr>
                         <th>DINNER</th>
                         <td>{countVegFriDinner}</td>
                        <td>{countNonVegFriDinner}</td>
                        <td>{countVegFriDinner+countNonVegFriDinner}</td>
                        <td>{countNoFriDinner}</td>
                     </tr>
                     </tbody>
                    :''}
                {isSat?
                    <tbody>
                     <tr>

                         <th>BREAKFAST</th>
                        <td>{countVegSatBreakfast}</td>
                        <td>{countNonVegSatBreakfast}</td>
                        <td>{countVegSatBreakfast+countNonVegSatBreakfast}</td>
                        <td>{countNoSatBreakfast}</td>
                        
                     </tr>
                     <tr>
                         <th>LUNCH</th>
                         <td>{countVegSatLunch}</td>
                        <td>{countNonVegSatLunch}</td>
                        <td>{countVegSatLunch+countNonVegSatLunch}</td>
                        <td>{countNoSatLunch}</td>
                     </tr>
                     <tr>
                         <th>SNACKS</th>
                         <td>{countVegSatSnacks}</td>
                        <td>{countNonVegSatSnacks}</td>
                        <td>{countVegSatSnacks+countNonVegSatSnacks}</td>
                        <td>{countNoSatSnacks}</td>
                     </tr>
                     <tr>
                         <th>DINNER</th>
                         <td>{countVegSatDinner}</td>
                        <td>{countNonVegSatDinner}</td>
                        <td>{countVegSatDinner+countNonVegSatDinner}</td>
                        <td>{countNoSatDinner}</td>
                     </tr>
                     </tbody>
                    :''}
            
                {isSun?
                    <tbody>
                     <tr>

                         <th>BREAKFAST</th>
                        <td>{countVegSunBreakfast}</td>
                        <td>{countNonVegSunBreakfast}</td>
                        <td>{countVegSunBreakfast+countNonVegSunBreakfast}</td>
                        <td>{countNoSunBreakfast}</td>
                        
                     </tr>
                     <tr>
                         <th>LUNCH</th>
                         <td>{countVegSunLunch}</td>
                        <td>{countNonVegSunLunch}</td>
                        <td>{countVegSunLunch+countNonVegSunLunch}</td>
                        <td>{countNoSunLunch}</td>
                     </tr>
                     <tr>
                         <th>SNACKS</th>
                         <td>{countVegSunSnacks}</td>
                        <td>{countNonVegSunSnacks}</td>
                        <td>{countVegSunSnacks+countNonVegSunSnacks}</td>
                        <td>{countNoSunSnacks}</td>
                     </tr>
                     <tr>
                         <th>DINNER</th>
                         <td>{countVegSunDinner}</td>
                        <td>{countNonVegSunDinner}</td>
                        <td>{countVegSunDinner+countNonVegSunDinner}</td>
                        <td>{countNoSunDinner}</td>
                     </tr>
                     </tbody>
                    :''}
                 </table>
            </div>
        </body>
        )
    }
}
