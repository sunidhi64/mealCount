import React from "react";
import {Switch, Route } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import StuLogin from "./components/StuLogin.js";
import Messauth from "./components/messauth";

import Tellme from "./components/Tellme"
function App() {
      return(
          <div>
            <Router>
                <Switch>
                    <Route path='/StuLogin' component={StuLogin} />
                    <Route path='/messauth' component={Messauth} />
                    <Route path='/' component={Tellme} />
                </Switch>
            </Router>
          </div>
            )
}
export default App
