import React, { Component } from "react";
import "./attendance.css";
export default class Attendance extends Component {
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
                        <td><input className="student-checkbox" id="breakfast-veg-checkbox" type="checkbox"/><label for="breakfast-veg-checkbox">I prefer veg</label></td>
                        <td><input className="student-checkbox" id="breakfast-nonveg-checkbox" type="checkbox" /><label for="breakfast-nonveg-checkbox">I prefer non-veg</label></td>
                        <td><input className="student-checkbox" id="breakfast-nomeal-checkbox" type="checkbox" /><label for="breakfast-nomeal-checkbox">No meal</label></td>
                     </tr>
                     <tr>
                         <th>LUNCH</th>
                         <td><input className="student-checkbox" id="lunch-veg-checkbox" type="checkbox"/><label for="lunch-veg-checkbox">I prefer veg</label></td>
                        <td><input className="student-checkbox" id="lunch-nonveg-checkbox" type="checkbox" /><label for="lunch-nonveg-checkbox">I prefer non-veg</label></td>
                        <td><input className="student-checkbox" id="lunch-nomeal-checkbox" type="checkbox" /><label for="lunch-nomeal-checkbox">No meal</label></td>
                     </tr>
                     <tr>
                         <th>SNACKS</th>
                         <td><input className="student-checkbox" id="snacks-veg-checkbox" type="checkbox"/><label for="snacks-veg-checkbox">I prefer veg</label></td>
                        <td><input className="student-checkbox" id="snacks-nonveg-checkbox" type="checkbox" /><label for="snacks-nonveg-checkbox">I prefer non-veg</label></td>
                        <td><input className="student-checkbox" id="snacks-nomeal-checkbox" type="checkbox" /><label for="snacks-nomeal-checkbox">No meal</label></td>
                         
                     </tr>
                     <tr>
                         <th>DINNER</th>
                         <td><input className="student-checkbox" id="dinner-veg-checkbox" type="checkbox"/><label for="dinner-veg-checkbox">I prefer veg</label></td>
                        <td><input className="student-checkbox" id="dinner-nonveg-checkbox" type="checkbox" /><label for="dinner-nonveg-checkbox">I prefer non-veg</label></td>
                        <td><input className="student-checkbox" id="dinner-nomeal-checkbox" type="checkbox" /><label for="dinner-nomeal-checkbox">No meal</label></td>
                     </tr>
                 </table>
            </div>
        </body>
        )
    }
}