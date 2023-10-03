import React from 'react'
import { Switch, Route } from "react-router-dom"
import HomePage from './Pages/HomePage/HomePage'
import AdicionarPage from './Pages/AdicionarPage/AdicionarPage'
import RankingPage from './Pages/RankingPage/RankingPage'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/"><HomePage /></Route>
            <Route exact path="/adicionar"><AdicionarPage /></Route>
            <Route exact path="/ranking"><RankingPage /></Route>
        </Switch>
    )
}

export default Routes