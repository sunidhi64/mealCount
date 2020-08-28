import React from "react";
import {Switch, Route } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./components/navigation";
import Student from "./components/studentDashboard";
import StuLogin from "./components/StuLogin.js";
import Messauthlogin from "./components/messauthlogin.js";
import Register from "./components/register";
import Menu from "./components/menu";
import MessauthMenu from "./components/messauthmenu";
import Attendance from "./components/attendance";
import Suggestions from "./components/suggestions";
import Dashboard from "./components/dashboard";
import Messauthregister from "./components/messauthregister.js";
import Tellme from "./components/Tellme";
import Studentregister from "./components/studentregister.js"
import Messattendance from "./components/messattendance";

function App() {
      return(
          <div>
            <Router>
                <Switch>
                    <Route path='/student/MessMenu' component={Menu} />
                    <Route path='/student/attendance' component={Attendance} />
                    <Route path='/student/suggestions' component={Suggestions} />
                    <Route path='/stuLogin' component={StuLogin} />
                    <Route path='/register' component={Register} />
                    <Route path='/messauth/login' component={Messauthlogin} />
                    <Route path='/messauth/register' component={Messauthregister}/>
                    <Route path='/messauth/MessMenu' component={MessauthMenu} />
                    <Route path='/student/dashboard' component={Navbar}/>
                    <Route path='/student/register' component={Studentregister}/>
                    <Route path='/messauth/attendance' component={Messattendance}/>
                    <Route path='/' component={Tellme} />
                </Switch>
            </Router>
          </div>
            )
}
export default App
