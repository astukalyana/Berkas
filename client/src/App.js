import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from '@mui/material';

import Info from './components/Info';
import Home from './components/Home';

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/nopel" />}/>
          <Route path="/nopel" exact component={Home}/>
          <Route path="/nopel/:nopel" exact component={Info}/>
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App;