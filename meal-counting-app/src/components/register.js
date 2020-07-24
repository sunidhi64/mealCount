import React, {Component} from "react";
import axios from "axios";
import "./messauth.css"

export default class Register extends Component{
    constructor(){
        super()
        this.state={
            firstName: "",
            lastName: "",
            password: "",
            username: ""
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
            <main>
                <form class="loginbox">
                    <lable Login />
                    <input
                        type="text"
                        //value={this.type.firstName}
                        name="firstName"
                        placeholder="first name"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        //value={this.type.lastName}
                        name="lastName"
                        placeholder="last name"
                        onChange={this.handleChange}
                    />
                    <br />


                    <input
                        type="password"
                        //value={this.type.password}
                        name="password"
                        placeholder="*******"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        //value={this.type.username}
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
