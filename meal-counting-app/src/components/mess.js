import React, {Component} from "react";
import "./register"

class Messauth extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
        
        this.handleChange=this.handleChange.bind(this)
        this.handleLogin=this.handleLogin.bind(this)
    }


    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleLogin(event){
        event.preventDefault();
        const user = {
                password: this.state.password,
                username: this.state.username,
 
                    }
        const { history } = this.props;
        history.push('/dashboard/' + this.props.match.params.id)
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleLogin}>
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
