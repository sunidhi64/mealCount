import React, {Component} from "react";
import "./studentregister.css";
import { Link } from 'react-router-dom';
export default class Studentregister extends Component {
    render(){
        return(
            <body>
                <div>
                <body className="Studentregister">
                    <div className="Studentregister-container" id="Studentregister-container">
                        <div className="Studentregister-form-container Studentregister-sign-in-container">
					    <form action="#" onSubmit={this.handleSubmit}>
		    			    <h1>Student Account</h1>
                            <input type="text" placeholder="Student Name" name="studentname"/>
                            <input type="text" placeholder="College Reg No" name="clgregno"/>
		    			    <input type="text" placeholder="Hostel Name" name="hostelname"/>
		    			    <input type="text" placeholder="User Name" name="username"/>
                            <input type="password" placeholder="Password" name="studentpassword"/>
		    			    <button className="Studentregister-button">Register</button>
		    		    </form>
		    	        </div>
                    
                    <div class="Studentregister-overlay-container">
                        <div class="Studentregister-overlay">
                        <div class="Studentregister-overlay-panel Studentregister-overlay-right">
		    				<h1>Invite Students!</h1>
		    				<p>For giving access to your students, please enter their details.</p>
                        
		    			</div>
                        </div>
                    </div>
					</div>
                </body>
            </div>
            </body>
        )
    }
}