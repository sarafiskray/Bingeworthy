import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Shows from './Shows/Shows'
import Show from './Show/Show'
import { Account } from './Cognito/Accounts'

const App = () => {
    
    return (
        <Account>
            <Switch>
                <Route exact path="/" component={Shows} />
                <Route exact path="/shows/:slug" component={Show} />
                {/* Could be path="/shows/:slug" */}
            </Switch>
        </Account>
    )
}

export default App
