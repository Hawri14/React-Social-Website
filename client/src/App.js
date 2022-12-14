import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import ParticleBackground from './particleBackground';
import Home from './components/Home/Home';


const App = () => (
    <BrowserRouter>
            <Container maxidth="lg">
            <ParticleBackground />
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/auth" exact component={Auth} />
            </Switch>
            <Home />
        </Container>
    </BrowserRouter>
);

export default App;