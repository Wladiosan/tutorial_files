import React, {Component} from 'react'
import classes from './App.module.css'
import {Route, NavLink} from "react-router-dom"
import About from './Component/About/About'
import Car from "./Component/Cars/Cars";


class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                activeClassName={classes.active}
                                exact
                            >HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                activeClassName={classes.active}
                                activeStyle={ {color:'blue'} }
                                exact
                            >ABOUT
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={{
                                    pathname: '/cars',
                                    search: '?a=1&b=2',
                                    hash: 'wfm-hash'
                                }}
                                activeClassName={classes.active}
                                exact
                            >CARS
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <hr/>
                {/* localhost:3000/ */}
                <Route path="/" exact render={() => <h1>HOME PAGE</h1>}/>

                {/* localhost:3000/about */}
                <Route path="/about" exact component={About}/>

                {/* localhost:3000/cars */}
                <Route path="/cars" exact component={Car}/>
            </div>
        )
    }
}

export default App;
