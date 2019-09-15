import React from 'react';
import Navigation from './Components/Layout/Navigation'
import ApplicationsList from './Components/Applications/ApplicationsList'
import Container from 'react-bootstrap/Container'
import {Provider} from "react-redux";
import store from "./Redux/Store";
import Filters from "./Components/Filters";
import UrlWatcher from "./Components/UrlWatcher";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router-dom";

function App() {
    return (
        <Provider store={store}>
            <div>
                <BrowserRouter>
                    <Navigation/>
                    <Container fluid className='mt-5'>
                        <Filters/>
                        <UrlWatcher/>
                        <Switch>
                            <Route
                                exact
                                path="/"
                                component={ApplicationsList}/>
                        </Switch>
                    </Container>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
