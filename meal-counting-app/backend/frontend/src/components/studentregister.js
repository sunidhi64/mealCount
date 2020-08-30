import React, {Component} from "react";
import "./studentregister.css";
import axios from "axios"
import { Link } from 'react-router-dom';
export default class Studentregister extends Component {
    constructor() {
	    super()
	    this.state = {
        firstName: "",
        lastName: "",
		username: "",
		password: "",
	    }
		this.handleChange=this.handleChange.bind(this);
		//this.handleLogin=this.handleLogin.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
		
	}
	
	handleChange(event){
	    this.setState({
		[event.target.name]: event.target.value
	    })
    }

    handleSubmit(event){
        event.preventDefault();

            const user = {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    username: this.state.username,
                    password: this.state.password
                    }

            console.log(user);

            axios.post('http://localhost:5000/messauth/registerstudent', user)
              .then(res => console.log(res.data));

            //window.location = '/messauth/studentregister';
          }

    render(){
        return(
            <body>
                <div>
                <body className="Studentregister">
                    <div className="Studentregister-container" id="Studentregister-container">
                        <div className="Studentregister-form-container Studentregister-sign-in-container">
					    <form action="#" onSubmit={this.handleSubmit}>
		    			    <h1>Student Account</h1>
                            <input type="text" placeholder="Student First Name" name="firstName" onChange={this.handleChange}/>
                            <input type="text" placeholder="Student Last Name" name="lastName"onChange={this.handleChange}/>
                            <input type="text" placeholder="College Reg No" name="username"onChange={this.handleChange}/>
                            <input type="password" placeholder="Password" name="password"onChange={this.handleChange}/>
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
