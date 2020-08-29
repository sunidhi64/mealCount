import React, { Component } from "react";
import "./menu.css";
import axios from "axios";







export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
            menuMon: [],
            menuTue: [],
            menuWed: [],
            menuThu: [],
            menuFri: [],
            menuSat: [],
            menuSun: [],
            isMon: false,
            isTue: false,
            isWed: false,
            isThu: false,
            isFri: false,
            isSat: false,
            isSun: false,
        }
        this.handleMonday=this.handleMonday.bind(this);
        this.handleTuesday=this.handleTuesday.bind(this);
        this.handleWednesday=this.handleWednesday.bind(this);
        this.handleThursday=this.handleThursday.bind(this);
        this.handleFriday=this.handleFriday.bind(this);
        this.handleSaturday=this.handleSaturday.bind(this);
        this.handleSunday=this.handleSunday.bind(this);
    }







    handleMonday(event){
        this.setState(prevState => ({
                        isMon: !prevState.isMon
                    }));

        axios.get('http://localhost:5000/students/messmenu/mon')
              .then(response => {
                        this.setState({
                            menuMon: response.data
                                                      })
                        })
              .catch((error) => {
                          console.log(error);
                        });

                
        }




        

          
          handleTuesday(event){
              console.log('I am clicked');
              this.setState(prevState => ({
                        isTue: !prevState.isTue
                    }));
              axios.get('http://localhost:5000/students/messmenu/tue')
              .then(response => {
                  this.setState({
                            menuTue: response.data
                                                      })
                        })
              .catch((error) => {
                          console.log(error);
                        })

          



        }
        handleWednesday(event){
            this.setState(prevState => ({
                        isWed: !prevState.isWed
                    }));
            axios.get('http://localhost:5000/students/messmenu/wed')
              .then(response => {
                  this.setState({
                            menuWed: response.data
                                                      })
                        })
              .catch((error) => {
                          console.log(error);
                        })

          }


    
        
        handleThursday(event){
            this.setState(prevState => ({
                        isThu: !prevState.isThu
                    }));
            axios.get('http://localhost:5000/students/messmenu/thu')
              .then(response => {
                  this.setState({
                            menuFri: response.data
                                                      })
                        })
              .catch((error) => {
                          console.log(error);
                        })

          


    
        }
        handleFriday(event){
            this.setState(prevState => ({
                        isFri: !prevState.isFri
                    }));
            axios.get('http://localhost:5000/students/messmenu/fri')
              .then(response => {
                  this.setState({
                            menuFri: response.data
                                                    })
                        })
              .catch((error) => {
                          console.log(error);
                        })

          }


    
        
        handleSaturday(event){
            this.setState(prevState => ({
                        isSat: !prevState.isSat
                    }));
            axios.get('http://localhost:5000/students/messmenu/sat')
              .then(response => {
                  this.setState({
                            menuSat: response.data
                                                })
                        })
              .catch((error) => {
                          console.log(error);
                        })

          }


    
        
        handleSunday(event){
            this.setState(prevState => ({
                        isSun: !prevState.isSun
                    }));
            axios.get('http://localhost:5000/students/messmenu/sun')
              .then(response => {
                  this.setState({
                            menuSun: response.data
                                                      })
                        })
              .catch((error) => {
                          console.log(error);
                        })

          }



    render() {
            const isMon = this.state.isMon;
            const isTue = this.state.isTue;
            const isWed = this.state.isWed;
            const isThu = this.state.isThu;
            const isFri = this.state.isFri;
            const isSat = this.state.isSat;
            const isSun = this.state.isSun;
       return (
            <body>
                <div className="buttons1">
                <button className="monday1 student-menu-button" onClick={this.handleMonday}>Monday</button>
                <button className="tuesday1 student-menu-button" onClick={this.handleTuesday}>Tuesday</button>
                <button className="wednesday1 student-menu-button " onClick={this.handleWednesday}>Wednesday</button>
                <button className="thursday1 student-menu-button" onClick={this.handleThursday}>Thursday</button>
                <button className="friday1 student-menu-button" onClick={this.handleFriday}>Friday</button>
                <button className="saturday1 student-menu-button" onClick={this.handleSaturday}>Saturday</button>
                <button className="sunday1 student-menu-button" onClick={this.handleSunday}>Sunday</button>
                </div>
                <div>
                    <table className="center1" width="50%">
                        <thead>
                            <tr>
                                <th></th>
                                <th>VEG</th>
                                <th>NON-VEG</th>
                            </tr>
                        </thead>
                            {isMon?
                        <tbody>
                            <tr>
                                <th>BREAKFAST</th>
                                <td>{this.state.menuMon.map((menu, index) =>( 
                                    <p>{menu.breakfastVegMon}</p>
                                ))} 
                                </td>
                                <td>{this.state.menuMon.map((menu, index) =>( 
                                    <p>{menu.breakfastNonVegMon}</p> 
                                ))}
                                </td>
                            </tr>
                            <tr>
                                <th>LUNCH</th>
                                <td>{this.state.menuMon.map((menu, index) =>( 
                                    <p>{menu.lunchVegMon}</p>
                                ))}
                                </td>
                                <td>{this.state.menuMon.map((menu, index) =>(
                                    <p>{menu.lunchNonVegMon}</p> 
                                ))} 
                                </td>
                            </tr>
                            <tr>
                                <th>SNACKS</th>
                                <td>{this.state.menuMon.map((menu, index) =>( 
                                    <p>{menu.snacksVegMon}</p>
                                ))} 
                                </td>
                                <td>{this.state.menuMon.map((menu, index) =>( 
                                    <p>{menu.snacksNonVegMon}</p> 
                                ))} 
                                </td>
                            </tr>
                            <tr>
                                <th>DINNER</th>
                                <td>{this.state.menuMon.map((menu, index) =>(
                                    <p>{menu.dinnerVegMon}</p>
                                ))}  
                                </td>
                                <td>{this.state.menuMon.map((menu, index) =>( 
                                    <p>{menu.dinnerNonVegMon}</p> 
                                ))} 
 
                                </td>
                            </tr>
                    </tbody>
                    :''}
           
                    {isTue?
                        <tbody>
                            <tr>
                                <th>BREAKFAST</th>
                                <td>{this.state.menuTue.map((menu, index) =>( 
                                    <p>{menu.breakfastVegTue}</p>
                                ))} 
                                </td>
                                <td>{this.state.menuTue.map((menu, index) =>( 
                                    <p>{menu.breakfastNonVegTue}</p> 
                                ))}
                                </td>
                            </tr>
                            <tr>
                                <th>LUNCH</th>
                                <td>{this.state.menuTue.map((menu, index) =>( 
                                    <p>{menu.lunchVegTue}</p>
                                ))}
                                </td>
                                <td>{this.state.menuTue.map((menu, index) =>(
                                    <p>{menu.lunchNonVegTue}</p> 
                                ))} 
                                </td>
                            </tr>
                            <tr>
                                <th>SNACKS</th>
                                <td>{this.state.menuTue.map((menu, index) =>( 
                                    <p>{menu.snacksVegTue}</p>
                                ))} 
                                </td>
                                <td>{this.state.menuTue.map((menu, index) =>( 
                                    <p>{menu.snacksNonVegTue}</p> 
                                ))} 
                                </td>
                            </tr>
                            <tr>
                                <th>DINNER</th>
                                <td>{this.state.menuTue.map((menu, index) =>(
                                    <p>{menu.dinnerVegTue}</p>
                                ))}  
                                </td>
                                <td>{this.state.menuTue.map((menu, index) =>( 
                                    <p>{menu.dinnerNonVegTue}</p> 
                                ))} 
 
                                </td>
                            </tr>
                    </tbody>
                    :''}
                    {isWed?
                        <tbody>
                            <tr>
                                <th>BREAKFAST</th>
                                <td>{this.state.menuWed.map((menu, index) =>( 
                                    <p>{menu.breakfastVegWed}</p>
                                ))} 
                                </td>
                                <td>{this.state.menuWed.map((menu, index) =>( 
                                    <p>{menu.breakfastNonVegWed}</p> 
                                ))}
                                </td>
                            </tr>
                            <tr>
                                <th>LUNCH</th>
                                <td>{this.state.menuWed.map((menu, index) =>( 
                                    <p>{menu.lunchVegWed}</p>
                                ))}
                                </td>
                                <td>{this.state.menuWed.map((menu, index) =>(
                                    <p>{menu.lunchNonVegWed}</p> 
                                ))} 
                                </td>
                            </tr>
                            <tr>
                                <th>SNACKS</th>
                                <td>{this.state.menuWed.map((menu, index) =>( 
                                    <p>{menu.snacksVegWed}</p>
                                ))} 
                                </td>
                                <td>{this.state.menuWed.map((menu, index) =>( 
                                    <p>{menu.snacksNonVegWed}</p> 
                                ))} 
                                </td>
                            </tr>
                            <tr>
                                <th>DINNER</th>
                                <td>{this.state.menuWed.map((menu, index) =>(
                                    <p>{menu.dinnerVegWed}</p>
                                ))}  
                                </td>
                                <td>{this.state.menuWed.map((menu, index) =>( 
                                    <p>{menu.dinnerNonVegWed}</p> 
                                ))} 
 
                                </td>
                            </tr>
                    </tbody>
                    :''}
                    {isThu?
                        <tbody>
                            <tr>
                                <th>BREAKFAST</th>
                                <td>{this.state.menuThu.map((menu, index) =>( 
                                    <p>{menu.breakfastVegThu}</p>
                                ))} 
                                </td>
                                <td>{this.state.menuThu.map((menu, index) =>( 
                                    <p>{menu.breakfastNonVegThu}</p> 
                                ))}
                                </td>
                            </tr>
                            <tr>
                                <th>LUNCH</th>
                                <td>{this.state.menuThu.map((menu, index) =>( 
                                    <p>{menu.lunchVegThu}</p>
                                ))}
                                </td>
                                <td>{this.state.menuThu.map((menu, index) =>(
                                    <p>{menu.lunchNonVegThu}</p> 
                                ))} 
                                </td>
                            </tr>
                            <tr>
                                <th>SNACKS</th>
                                <td>{this.state.menuThu.map((menu, index) =>( 
                                    <p>{menu.snacksVegThu}</p>
                                ))} 
                                </td>
                                <td>{this.state.menuThu.map((menu, index) =>( 
                                    <p>{menu.snacksNonVegThu}</p> 
                                ))} 
                                </td>
                            </tr>
                            <tr>
                                <th>DINNER</th>
                                <td>{this.state.menuThu.map((menu, index) =>(
                                    <p>{menu.dinnerVegThu}</p>
                                ))}  
                                </td>
                                <td>{this.state.menuThu.map((menu, index) =>( 
                                    <p>{menu.dinnerNonVegThu}</p> 
                                ))} 
 
                                </td>
                            </tr>
                    </tbody>
                    :''}
                    {isFri?
                        <tbody>
                            <tr>
                                <th>BREAKFAST</th>
                                <td>{this.state.menuFri.map((menu, index) =>( 
                                    <p>{menu.breakfastVegFri}</p>
                                ))} 
                                </td>
                                <td>{this.state.menuFri.map((menu, index) =>( 
                                    <p>{menu.breakfastNonVegFri}</p> 
                                ))}
                                </td>
                            </tr>
                            <tr>
                                <th>LUNCH</th>
                                <td>{this.state.menuFri.map((menu, index) =>( 
                                    <p>{menu.lunchVegFri}</p>
                                ))}
                                </td>
                                <td>{this.state.menuFri.map((menu, index) =>(
                                    <p>{menu.lunchNonVegFri}</p> 
                                ))} 
                                </td>
                            </tr>
                            <tr>
                                <th>SNACKS</th>
                                <td>{this.state.menuFri.map((menu, index) =>( 
                                    <p>{menu.snacksVegFri}</p>
                                ))} 
                                </td>
                                <td>{this.state.menuFri.map((menu, index) =>( 
                                    <p>{menu.snacksNonVegFri}</p> 
                                ))} 
                                </td>
                            </tr>
                            <tr>
                                <th>DINNER</th>
                                <td>{this.state.menuFri.map((menu, index) =>(
                                    <p>{menu.dinnerVegFri}</p>
                                ))}  
                                </td>
                                <td>{this.state.menuFri.map((menu, index) =>( 
                                    <p>{menu.dinnerNonVegFri}</p> 
                                ))} 
 
                                </td>
                            </tr>
                    </tbody>
                    :''}
                    {isSat?
                        <tbody>
                            <tr>
                                <th>BREAKFAST</th>
                                <td>{this.state.menuSat.map((menu, index) =>( 
                                    <p>{menu.breakfastVegSat}</p>
                                ))} 
                                </td>
                                <td>{this.state.menuSat.map((menu, index) =>( 
                                    <p>{menu.breakfastNonVegSat}</p> 
                                ))}
                                </td>
                            </tr>
                            <tr>
                                <th>LUNCH</th>
                                <td>{this.state.menuSat.map((menu, index) =>( 
                                    <p>{menu.lunchVegSat}</p>
                                ))}
                                </td>
                                <td>{this.state.menuSat.map((menu, index) =>(
                                    <p>{menu.lunchNonVegSat}</p> 
                                ))} 
                                </td>
                            </tr>
                            <tr>
                                <th>SNACKS</th>
                                <td>{this.state.menuSat.map((menu, index) =>( 
                                    <p>{menu.snacksVegSat}</p>
                                ))} 
                                </td>
                                <td>{this.state.menuSat.map((menu, index) =>( 
                                    <p>{menu.snacksNonVegSat}</p> 
                                ))} 
                                </td>
                            </tr>
                            <tr>
                                <th>DINNER</th>
                                <td>{this.state.menuSat.map((menu, index) =>(
                                    <p>{menu.dinnerVegSat}</p>
                                ))}  
                                </td>
                                <td>{this.state.menuSat.map((menu, index) =>( 
                                    <p>{menu.dinnerNonVegSat}</p> 
                                ))} 
 
                                </td>
                            </tr>
                    </tbody>
                    :''}
                    {isSun?
                        <tbody>
                            <tr>
                                <th>BREAKFAST</th>
                                <td>{this.state.menuSun.map((menu, index) =>( 
                                    <p>{menu.breakfastVegSun}</p>
                                ))} 
                                </td>
                                <td>{this.state.menuSun.map((menu, index) =>( 
                                    <p>{menu.breakfastNonVegSun}</p> 
                                ))}
                                </td>
                            </tr>
                            <tr>
                                <th>LUNCH</th>
                                <td>{this.state.menuSun.map((menu, index) =>( 
                                    <p>{menu.lunchVegSun}</p>
                                ))}
                                </td>
                                <td>{this.state.menuSun.map((menu, index) =>(
                                    <p>{menu.lunchNonVegSun}</p> 
                                ))} 
                                </td>
                            </tr>
                            <tr>
                                <th>SNACKS</th>
                                <td>{this.state.menuSun.map((menu, index) =>( 
                                    <p>{menu.snacksVegSun}</p>
                                ))} 
                                </td>
                                <td>{this.state.menuSun.map((menu, index) =>( 
                                    <p>{menu.snacksNonVegSun}</p> 
                                ))} 
                                </td>
                            </tr>
                            <tr>
                                <th>DINNER</th>
                                <td>{this.state.menuSun.map((menu, index) =>(
                                    <p>{menu.dinnerVegSun}</p>
                                ))}  
                                </td>
                                <td>{this.state.menuSun.map((menu, index) =>( 
                                    <p>{menu.dinnerNonVegSun}</p> 
                                ))} 
 
                                </td>
                            </tr>
                    </tbody>
                    :''}

                            
                </table>
            </div>
        </body>
    )
    
}
}
