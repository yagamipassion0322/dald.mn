import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Category from './Category'
import Detial from './Detial'
import Home from './Home'
import React from 'react'
import Search from './Search'

function RouterPage() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/read/:slug/:id.html" render={props => <Detial {...props} />}/>
                <Route path="/category/:id" render={props => <Category {...props} />} />
                <Route path="/search" exact component={Search} />
                <Route path="/login.html" exact component={Search} />
            </Switch>
        </Router>
    )
}

export default RouterPage
