import React from 'react'
import { Switch, Route } from "react-router-dom"
import HomePage from './Pages/HomePage/HomePage'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/"><HomePage /></Route>
        </Switch>
    )
}

export default Routes