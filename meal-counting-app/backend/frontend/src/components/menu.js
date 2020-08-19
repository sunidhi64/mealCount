import React, { Component } from "react";
import "./menu.css"
export default class Menu extends Component {
    render() {
        return (
            <body className="student-menu">
    <div>
    <table class="center" width="50%">
            <tr><th colSpan="5" style={{fontSize:"20px"}}>Weekly Meal Menu</th></tr>
  <tr>
    <th rowSpan="5" ><ol><li><button className="monday">Monday</button></li><br/><li><button className="tuesday">Tuesday</button></li><br/><li><button className="wednesday">Wednesday</button></li><br/><li><button className="thursday">Thursday</button></li><br/><li><button className="friday">Friday</button></li><br/><li><button className="saturday">Saturday</button></li><br/><li><button className="sunday">Sunday</button></li></ol></th>
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
