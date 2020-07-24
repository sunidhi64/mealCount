import React, { Component } from "react"
import "./StuLogin.css"
class StuLogin extends Component {
	constructor() {
		super() 
		this.state={
		    username: "",
		    password: "",
		    
		}
		this.handleChange=this.handleChange.bind(this)
	}
	handleChange(event){
		this.setState({
			[event.target.name]:event.target.value
		})
	}
	render() {
		return( 
			<body>
			  
			  <div class="loginbox">
			  <img src="https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png" class="icon" alt="student icon"/>
			    
			    <h1>Login Here</h1>
			    <form>
			      
			      <p>Username</p>
			      <input type="text" name="username" placeholder="Enter Username"  onChange={this.handleChange}/>
			      <p>Password</p>
			      <input type="password" name="password" placeholder="Enter Password"  onChange={this.handleChange}/>
			      <input type="submit" value="Login" name=""/>
			    </form>
			  </div>
			  
			</body>
                        

		)
	}
	
}
export default StuLogin
