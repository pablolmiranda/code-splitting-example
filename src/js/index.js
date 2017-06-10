import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router';
import Loadable from 'react-loadable';

const LoadingComponent = () => <div>Loading...</div>;

const LazyHome = Loadable({
    loader: () => import('./home'),
    LoadingComponent,
});

const LazyEditor = Loadable({
    loader: () => import('./editor'),
    LoadingComponent,
});

const LazyDetails = Loadable({
    loader: () => import('./details'),
    LoadingComponent,
});

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={LazyHome} />
                <Route path="/details" component={LazyDetails} />
                <Route path="/editor" component={LazyEditor} />
            </Router>
        );
    }
}

ReactDom.render(App, document.getElementById('app-container'));