import React from 'react'
import { Switch, Route } from "react-router-dom"
import HomePage from './Pages/HomePage/HomePage'
import AdicionarPage from './Pages/AdicionarPage/AdicionarPage'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/"><HomePage /></Route>
            <Route exact path="/adicionar"><AdicionarPage /></Route>
        </Switch>
    )
}

export default Routes