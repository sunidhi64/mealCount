import React, {Component} from "react";
import "./stuLogin.css";



class StuLogin extends Component {
	constructor() {
	    super()
	    this.state = {
		username: "",
		password: ""
		
	    }
		this.handleChange=this.handleChange.bind(this);
		this.handleLogin=this.handleLogin.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
		
	}
	
	handleChange(event){
	    this.setState({
		[event.target.name]: event.target.value
	    })
    }
    render() {
        return(
            <div>
                <h1>helloworld</h1>
            </div>
        )
    }

}
export default StuLogin;