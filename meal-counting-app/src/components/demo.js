import React, {Component} from "react";

class Messauth extends Component{
    constructor(){
        super()
        this.state= {
            hi: "hi!",
        }
    }
    render(){
        return(
            <div>
                <h1> {this.state.hi} </h1>
            </div>
        )
    }
}

export default Messauth;
