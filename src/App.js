import React from 'react'
import './App.css';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar'
import OurTeam from './Components/OurTeam';
import OurWork from './Components/OurWork';
import Price from './Components/Price';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Pages/Home'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/ourteam" component={OurTeam} />
          <Route path="/ourwork" component={OurWork} />
          <Route path="/price" component={Price} />
          <Route path="/contact" component={Contact} />
        </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
