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
	      	   <body>
		    <div class="container"
		   </body>
}
