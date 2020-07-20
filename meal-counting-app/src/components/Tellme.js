import React from "react"
import "./Tellme.css"
import Eating from "./Eating.mp4"

function Tellme() {
        return(
                <body>
                        
                        <header className="v-header container">
                            
                            <div className="fullscreen-video-wrap">
                                <video  autoPlay loop muted className="video-bg">
                                <source src={Eating} type="video/mp4" /> 
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
