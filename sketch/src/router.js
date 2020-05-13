import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Main from './pages/main'

export default function Router(){

    return(
        <BrowserRouter>
            <Switch>
                <Route to='/' exact component={Main}></Route>
                <Redirect from="*" to="/"></Redirect>
            </Switch>
        </BrowserRouter>

    )

}