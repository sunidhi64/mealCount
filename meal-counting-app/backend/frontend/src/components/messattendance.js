import React, { Component } from "react";
import "./messattendance.css";
export default class Messattendance extends Component {
    render() {
        return(
            <body>
                <div className="meal-logout-position"><button className="meal-logout">Logout</button></div>
                <div className="navigation">
                    <button className="stu-attendance-nav">Meal Menu</button>
                    <div className="stu-reg-position"><button className="stu-reg">Student Register</button></div>
                    <div className="menu-heading"><h1 style={{color:"#fff"}}>MEAL COUNT</h1></div>
                    <div className="menu-logout-position"><button className="menu-logout">Logout</button></div>
                </div>
            <div className="buttons3">
            <button className="monday3 mess-attendance-button">Monday</button>
            <button className="tuesday3 mess-attendance-button">Tuesday</button>
                 <button className="wednesday3 mess-attendance-button">Wednesday</button>
                     <button className="thursday3 mess-attendance-button">Thursday</button>
                         <button className="friday3 mess-attendance-button">Friday</button>
                             <button className="saturday3 mess-attendance-button">Saturday</button>
            <button className="sunday3 mess-attendance-button">Sunday</button>
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
                     <tr>
                         <th>BREAKFAST</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                     </tr>
                     <tr>
                         <th>LUNCH</th>
                         <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                         <th>SNACKS</th>
                         <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                         <th>DINNER</th>
                         <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                 </table>
            </div>
        </body>
        )
    }
}