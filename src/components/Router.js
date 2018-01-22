import React from 'react'
import { Switch, Route } from 'react-router-dom'
import University from './University/University'
import Students from './Students/Students'
import SoloUniversity from './University/SoloUniversity/SoloUniversity';

class Router extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={ University }/>
                    <Route path='/students' component={ Students }/>
                    <Route path='/university' component={ SoloUniversity }/>
                </Switch>
            </main>
        )
    }
}

export default Router