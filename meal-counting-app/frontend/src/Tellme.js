import React from "react"
import "./Tellme.css"


function Tellme() {
	    return(
	        <body>
		                
		    <header className="v-header container">
		                    
		        <div className="fullscreen-video-wrap">
		            <video  autoPlay loop muted className="video-bg">
		                <source src={"https://media.istockphoto.com/videos/teenage-students-being-served-meal-in-school-canteen-video-id942400270"} type="video/mp4" /> 
		            </video> 
		        </div>
		        <div className="header-overlay"></div>
		            
		        <div className="header-content">
		            <pre>  Meal Counting App</pre>
		            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
		            <div className="WhoRu">
		                <h2>Let's Get Started</h2>
		                <div className="StuLogin">
		                <a href="./StudentLogin">Student?</a></div><br/><div className="MessLogin"><a  href="./MessReg">Mess Authority?</a></div>
		            </div>
		        </div>

		    </header>
		</body>
            )
        }
export default Tellme

