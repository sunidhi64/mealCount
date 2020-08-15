import React, { Component } from "react";
import "./menu.css"
export default class Menu extends Component {
    render() {
        return (
            <body className="student-menu">
            <div>
                <table>
                    
                    <tr>
                        <th className="meal-menu" colSpan="6" >Meal Menu</th>
                    </tr>
                    <tr>
                        <th ></th>
                        <th >Veg</th>
                        <th >Non-veg</th>
                        <th >Yes</th>
                        <th >No</th>
                    </tr>
                    
                    <tr>
                        <th >Breakfast</th>
                    
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        
                        
                        
                    </tr>
                    <tr>
                        <th >Lunch</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        
                        
                    </tr>
                    <tr>
                        <th >Snacks</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        
                    </tr>
                    <tr>
                        <th >Dinner</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        
                        
                    </tr>
                    
                </table>
            </div>
            </body>
        )
    }
}
