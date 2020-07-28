import React from "react";
import {Switch, Route } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./components/navigation";
import Student from "./components/studentDashboard";
import StuLogin from "./components/stuLogin.js";
import Messauth2 from "./components/messauth2.js";
import Register from "./components/register";
import Menu from "./components/menu";
import Attendance from "./components/attendance";
import Suggestions from "./components/suggestions";

import Tellme from "./components/Tellme"
function App() {
      return(
          <div>
            <Router>
                <Switch>
                    <Route path='/student/MessMenu' component={Student} />
                    <Route path='/student/attendance' component={Attendance} />
                    <Route path='/student/suggestions' component={Suggestions} />
                    <Route path='/stuLogin' component={StuLogin} />
                    <Route path='/register' component={Register} />
                    <Route path='/messauth2' component={Messauth2} />
                    <Route path='/' component={Tellme} />
                </Switch>
            </Router>
          </div>
            )
}
export default App
