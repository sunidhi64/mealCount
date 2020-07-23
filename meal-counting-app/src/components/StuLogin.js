import React, { Components } from "react"
import "./StuLogin.css"
class StuLogin extends Components {
	constructor() {
		super() 
		this.state={
		    username: "",
		    password: ""
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
			  <img src="https://img.pngio.com/app-icon-set-login-icon-svg-png-icon-free-download-311846-login-icon-png-980_980.png"/>
			  </div>
			</body>

		)
	}
	
}
