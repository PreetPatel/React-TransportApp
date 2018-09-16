import * as React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import App from "../App";
import Stop from "./Stop"

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/stop/:id" component={Stop} />
        </Switch>
    </BrowserRouter>
);

export default Router;