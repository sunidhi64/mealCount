import React, {Component} from "react";
import "./messauth2.css";
import axios from "axios";


class Messauth2 extends Component {
	constructor() {
	    super()
	    this.state = {
		firstName:"",
		lastName:"",
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


    handleLogin(event){
        event.preventDefault();
        const user = {
            username:  this.state.username,
            password:  this.state.password
        }
        const { history } = this.props;
        axios.post("http://localhost:3000/messauth/login", user)
            .then(result => {
                if (result.status === 200) {
                    history.push('/dashboard/')
                }
            })
            .catch(e => {

            });
        
    }

    handleSubmit(event){
        event.preventDefault();
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            password: this.state.password
        }
        const { history } = this.props;
        axios.post("http://localhost:3000/messauth/register", user)
            .then(result => {
                if (result.status === 200) {
                    history.push('/dashboard/')
                }
            })
            .catch(e => {

            });

    }


	
	render(){
		
		const container = document.getElementById('Mess-container');
		
	    return(
		<div>
			<head>
				<link rel = "stylesheet"
				href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
				integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
				crossOrigin="anonymous"/>
			</head>
		<body class="messauth2">
			<div class="Mess-container" id = "Mess-container">
				<div class="form-container sign-up-container">
					<form action="#" class="form" onSubmit={this.handleSubmit}>
						<h1>Create Account</h1><br/>
						<input type="text" placeholder="First Name" name="firstname" onChange={this.handleChange}/>
						<input type="text" placeholder="Last Name" name="lastname" onChange={this.handleChange}/>
						<input type="text" placeholder="User Name" name="username" onChange={this.handleChange}/>
						<input type="password" placeholder="Password" name="password" onChange={this.handleChange}/>
						<br/><button>Register</button>
					</form>
				</div>
				<div class="form-container sign-in-container">
					<form action="#" onSubmit={this.handleLogin}>
		    			<h1 >Login</h1><br/>
		    			<input type="text" placeholder="User Name" name="username" onChange={this.handleChange}/>
		    			<input type="password" placeholder="Password" name="password" onChange={this.handleChange}/>
		    			<br/><button>Login</button>
		    		</form>
		    	</div>
		    	<div class="overlay-container">
		    		<div class="overlay">
		    			<div class="overlay-panel overlay-left">
		    				<h1>Welcome Back!</h1>
		    				<p>To keep connected with us please login with your personal info</p>
		    				<button class="ghost" id="signIn" onClick={()=>{container.classList.remove('right-panel-active')}}>Login</button>
		    			</div>
		    			<div class="overlay-panel overlay-right">
		    				<h1>Hello!</h1>
		    				<p>Enter your personal details and start journey with us</p>
		    				<button class="ghost" id="signUp" onClick={()=>{container.classList.add('right-panel-active')}}>Register</button>
		    			</div>
		    		</div>
		    	</div>
		    </div>
		</body>
		</div>
	    )
}
}
export default Messauth2;
