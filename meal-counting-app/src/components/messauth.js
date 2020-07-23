import React, {Component} from "react";
import "./register"
import "./messauth.css"
class Messauth extends Component {
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
            <div>
		<form class="loginbox">
                    <lable Login />
                    <input
                        type="text"
                       /* value={this.type.username}*/
                        name="username"
                        placeholder="Username"
                        onChange={this.handleChange}
                    />
                    <br />

                    <input
                        type="password"
                      /*  value={this.type.password}*/
                        name="password"
                        placeholder="*******"
                        onChange={this.handleChange}
                    />
                    <br />
                    <button>Login</button>

                </form>
                <br />
                <div>
                   <a href="./register">Register</a>
                </div>
            </div>
        )
    }
}

export default Messauth;
