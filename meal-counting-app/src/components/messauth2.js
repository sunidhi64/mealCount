import React, {Component} from "react";
import "./messauth2.css"
class Messauth2 extends Component {
	constructor() {
	    super()
	    this.state = {
		username: "",
		password: ""
	    }
	    this.handleChange=this.handleChange.bind(this)
	}

	handleChange(event){
	    this.setState({
		[event.target.name]: event.target.value
	    })
	}
	render(){
	    return(
		<body class="messauth2">
			<div class="container" id = "container">
				<div class="form-container sign-up-container">
					<form action="#" class="form">
						<h1>Create Account</h1>
						<input type="text" placeholder="Name" name="username" onChange={this.handleChange}/>
						<input type="password" placeholder="Password" name="password" onChange={this.handleChange}/>
						<button>Register</button>
					</form>
				</div>
				<div class="form-container sign-in-container">
					<form action="#">
		    			<h1 >Login</h1>
		    			<input type="text" placeholder="Name" name="username" onChange={this.handleChange}/>
		    			<input type="password" placeholder="Password" name="password" onChange={this.handleChange}/>
		    			<button>Login</button>
		    		</form>
		    	</div>
		    	<div class="overlay-container">
		    		<div class="overlay">
		    			<div class="overlay-panel overlay-left">
		    				<h1>Welcome Back!</h1>
		    				<p>To keep connected with us please login with your personal info</p>
		    				<button class="ghost" id="signIn">Login</button>
		    			</div>
		    			<div class="overlay-panel overlay-right">
		    				<h1>Hello, Friend!</h1>
		    				<p>Enter your personal details and start journey with us</p>
		    				<button class="ghost" id="signUp">Register</button>
		    			</div>
		    		</div>
		    	</div>
		    </div>

		   </body>
	    )
}
}
export default Messauth2
