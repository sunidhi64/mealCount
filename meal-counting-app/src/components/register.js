import React, {Component} from "react";
import axios from "axios";

export default class Register extends Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            username: ""
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
        [name]: value
    })
    }

    handleSubmit() {
        event.preventDefault();
            const user = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                password: this.state.password,
                username: this.state.username,
 
                    }
            axios.post('https://localhost:3000/messauth/register', { user })
              .then(res=>{
                          console.log(res);
                          console.log(res.data);
                          window.location = "/dashboard" //This line of code will redirect you once the submission is succeed
                        })
          }




    render(){
        return(
            <main>
                <form onSubmit = { this.handleSubmit }>
                    <lable Login />
                    <input
                        type="text"
                        value={this.type.firstName}
                        name="firstName"
                        placeholder="first name"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        value={this.type.lastName}
                        name="lastName"
                        placeholder="last name"
                        onChange={this.handleChange}
                    />
                    <br />


                    <input
                        type="password"
                        value={this.type.password}
                        name="password"
                        placeholder="*******"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        value={this.type.username}
                        name="username"
                        placeholder="Username"
                        onChange={this.handleChange}
                    />
                    <br />

                    <button>Submit</button>

                </form>
            </main>
        )
    }
}
