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
                        <td><input className="student-checkbox" type="checkbox"/>I prefer veg</td>
                        <td><input className="student-checkbox" type="checkbox" />I prefer non-veg</td>
                        <td><input className="student-checkbox" type="checkbox" />No meal</td>
                     </tr>
                     <tr>
                         <th>LUNCH</th>
                         <td><input className="student-checkbox" type="checkbox"/>I prefer veg</td>
                        <td><input className="student-checkbox" type="checkbox" />I prefer non-veg</td>
                        <td><input className="student-checkbox" type="checkbox" />No meal</td>
                     </tr>
                     <tr>
                         <th>SNACKS</th>
                         <td><input className="student-checkbox" type="checkbox"/>I prefer veg</td>
                        <td><input className="student-checkbox" type="checkbox" />I prefer non-veg</td>
                        <td><input className="student-checkbox" type="checkbox" />No meal</td>
                         
                     </tr>
                     <tr>
                         <th>DINNER</th>
                         <td><input className="student-checkbox" type="checkbox"/>I prefer veg</td>
                        <td><input className="student-checkbox" type="checkbox" />I prefer non-veg</td>
                        <td><input className="student-checkbox" type="checkbox" />No meal</td>
                     </tr>
                 </table>
            </div>
        </body>
        )
    }
}