import React, { Component } from 'react';

export default class Demo extends Component{
    constructor(){
        super()
        this.state={
            hi:"hi"
        }
    }
    render(){
        return(
            <div>
                <h1>hi</h1>
                <h1>{this.state.hi}</h1>
            </div>
        )
    }
}