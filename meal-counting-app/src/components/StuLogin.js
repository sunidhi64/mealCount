import React, { Component } from "react"
import "./StuLogin.css"
class StuLogin extends Component {
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
			  <img src="https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png"  width="150px"/>
			  </div>
			  
			</body>

		)
	}
	
}
export default StuLogin
