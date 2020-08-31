import React, {Component} from "react";
import "./StuLogin.css";
import axios from "axios";



class StuLogin extends Component {
	constructor() {
	    super()
	    this.state = {
		username: "",
		password: ""
		
	    }
		this.handleChange=this.handleChange.bind(this);
		this.handleLogin=this.handleLogin.bind(this);
		//this.handleSubmit=this.handleSubmit.bind(this);
		
	}
	
	handleChange(event){
	    this.setState({
		[event.target.name]: event.target.value
	    })
    }
    
    handleLogin(event){
        event.preventDefault();

            const user = {
                      username: this.state.username,
                      password: this.state.password
                    }

            console.log(user);

            axios.post('http://localhost:5000/students/login', user)
              .then(res => {
                console.log(res.data)
                window.location = '/student/messmenu';
              });

          }


    render() {
        return(
            <div className="StuLogin-background">
            
                <div className="StuLogin2">
            
                    <div className="StuLogin2-container" id="StuLogin2-container">
                        <div className="Stu-form-container Stu-sign-in-container">
					    <form action="#" onSubmit={this.handleLogin}>
		    			    <h1 >Login</h1><br/>
		    			    <input type="text" placeholder="User Name" name="username" onChange={this.handleChange}/>
		    			    <input type="password" placeholder="Password" name="password" onChange={this.handleChange}/>
		    			    <br/><button className="StuLogin2-button">Login</button>
		    		    </form>
		    	        </div>
                    
                    <div class="Stu-overlay-container">
                        <div class="Stu-overlay">
                        <div class="Stu-overlay-panel Stu-overlay-right">
		    				<h1>Hello!</h1>
		    				<p className="p-StuLogin">To keep connected with us please login with your personal info</p>
		    			</div>
                        </div>
                    </div>
					</div>
                </div>
            </div>
        )
    }

}
export default StuLogin;
