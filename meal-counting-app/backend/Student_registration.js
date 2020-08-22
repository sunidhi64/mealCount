import React, { Component } from "react";
import "./student_list.css";
import axios from "axios";
export default class Student_list extends Component {
    render() {
        return(
            <div>
                <body className="Student_registration">
                    <div className="Student_registration-container" id="Student_registration-container">
                        <div className="Student_registration-form-container Student_registration-sign-in-container">
					    <form action="#" onSubmit={this.handleSubmit}>
		    			    <h1 >Create Account</h1><br/>
                            <input type="text" placeholder="Student's name" name="Student's name" onChange={this.handleChange}/>
                            <input type="password" placeholder="Registration No." name="Registration No." onChange={this.handleChange}/>
		    			    <input type="password" placeholder="Room No." name="password" onChange={this.handleChange}/>
		    			    <br/><button className="Student_registration-button">Register</button>
		    		    </form>
		    	        </div>
                    
                    <div class="Student_registration-overlay-container">
                        <div class="Student_registration-overlay">
                        <div class="Student_registration-overlay-panel Student_registration-overlay-right">
		    				<h1>Welcome Back!</h1>
		    				<p>To keep connected with us please login with your personal info</p>
                            <Link to="/messauth/login" className="Messauthregister-link">Login</Link>
		    			</div>
                        </div>
                    </div>
					</div>
                </body>
            </div>
        )
    }

}
export default Messauthregister;
