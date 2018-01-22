import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header/Header';
import Home from './Home/Home';
import University from './University/University'
import Students from './Students/Students'

class Router extends React.Component {
    render() {
        return (
            <div>
                <Header/>  
                <Switch>
                    <Route exact path='/' component={ Home }/>
                    <Route path='/university' component={ University }/>                    
                    <Route path='/students' component={ Students }/>
                </Switch>
            </div>
        )
    }
}

export default Router