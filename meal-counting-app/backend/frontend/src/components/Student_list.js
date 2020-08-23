import React, { Component } from "react";
import "./student_list.css";
import axios from "axios";
export default class Student_list extends Component {
    render(){
        return (
            <body>
                <table className = "Student_list_table" width = "50%">
                    <tr>
                        <th>Student Name</th>
                        <th> Registration No.</th>
                        <th> Room No.</th>
                    </tr>
                    <tr> 
                        <td>Simli</td> 
                        <td> 868662787</td>
                        <td> 123</td>
                    </tr>
                </table>
            </body>
        )
    }
}
