import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Shows from './Shows/Shows'
import Show from './Show/Show'

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Shows} />
            <Route exact path="shows/:slug" component={Show} />
            {/* Could be path="/shows/:slug" */}
        </Switch>
    )
}

export default App
