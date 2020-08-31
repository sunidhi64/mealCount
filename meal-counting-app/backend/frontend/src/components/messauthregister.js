import React, {Component} from "react";
import "./messauthregister.css";
import axios from "axios"
import { Link } from 'react-router-dom';


class Messauthregister extends Component {
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

            axios.post('http://localhost:5000/messauth/register', user)
              .then(res => console.log(res.data));

            //window.location = '/messauth/login';
          }

    render() {
        return(
            <div>
                <body className="Messauthregister">
                    <div className="Messauthregister-container" id="Messauthregister-container">
                        <div className="Messauthregister-form-container Messauthregister-sign-in-container">
					    <form action="#" onSubmit={this.handleSubmit}>
		    			    <h1 >Create Account</h1><br/>
                            <input type="text" placeholder="First Name" name="firstName" onChange={this.handleChange}/>
                            <input type="text" placeholder="Last Name" name="lastName" onChange={this.handleChange}/>
		    			    <input type="text" placeholder="User Name" name="username" onChange={this.handleChange}/>
		    			    <input type="password" placeholder="Password" name="password" onChange={this.handleChange}/>
		    			    <br/><button className="Messauthregister-button">Register</button>
		    		    </form>
		    	        </div>
                    
                    <div class="Messauthregister-overlay-container">
                        <div class="Messauthregister-overlay">
                        <div class="Messauthregister-overlay-panel Messauthregister-overlay-right">
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
