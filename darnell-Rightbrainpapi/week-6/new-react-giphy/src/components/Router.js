import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../Home';
import ActiveGif from './ActiveGif'


const Router = () => (

    <BrowserRouter>
       <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/gif/" component={ActiveGif}/>
            
       </Switch>
    </BrowserRouter>
);


export default Router