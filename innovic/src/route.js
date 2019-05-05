import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './components/Home/';
import PostList from './components/PostList';
import PostView from './components/PostView';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/postlist' component={PostList} />
                <Route path='/posts/:postId' component={PostView} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;