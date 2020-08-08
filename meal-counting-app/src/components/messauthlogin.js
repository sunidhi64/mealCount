import React, {Component} from "react";
import "./messauthlogin.css";
import { Link } from 'react-router-dom';
import axios from "axios";


class Messauthlogin extends Component {
	constructor() {
	    super()
	    this.state = {
		username: "",
		password: ""
		
	    }
		this.handleChange=this.handleChange.bind(this);
		this.handleLogin=this.handleLogin.bind(this);
		//this.handleSubmit=this.handleSubmit.bind(this);
		
	}
	
	handleChange(event){
	    this.setState({
		[event.target.name]: event.target.value
	    })
    }
    
    handleLogin(event){
        event.preventDefault();

            const user = {
                      username: this.state.username,
                      password: this.state.password
                    }

            console.log(user);

            axios.post('http://localhost:3000/messauth/login', user)
              .then(res => console.log(res.data));

            //window.location = '/messauth/dashboard'+this.props.match.params.id;
          }


    render() {
        return(
            <div>
                <body className="Messauthlogin">
                    <div className="Messauthlogin-container" id="Messauthlogin-container">
                        <div className="Messauthlogin-form-container Messauthlogin-sign-in-container">
					    <form action="#" onSubmit={this.handleLogin}>
		    			    <h1 >Login</h1><br/>
		    			    <input type="text" placeholder="User Name" name="username" onChange={this.handleChange}/>
		    			    <input type="password" placeholder="Password" name="password" onChange={this.handleChange}/>
		    			    <br/><button className="Messauthlogin-button">Login</button>
		    		    </form>
		    	        </div>
                    
                    <div class="Messauthlogin-overlay-container">
                        <div class="Messauthlogin-overlay">
                        <div class="Messauthlogin-overlay-panel Messauthlogin-overlay-right">
		    				<h1>Hello!</h1>
		    				<p>Enter your personal details and start journey with us</p>
                            <Link to="/messauth/register" className="Messauthlogin-link">Register</Link>
		    			</div>
                        </div>
                    </div>
					</div>
                </body>
            </div>
        )
    }

}
export default Messauthlogin;
