import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

      render() {
              return (
                    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                    <Link to="/student/MessMenu" className="navbar-brand">Mess Menu</Link>
                    <div className="collpase navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                        <Link to="/student/attendance" className="nav-link">Attendance</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/student/suggestions" className="nav-link">Suggestions</Link>
                        </li>
                        </ul>
                    </div>
                    </nav>
                      );
            }
}
