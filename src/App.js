import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './component/NavBar';

import MainApp from './pages/MainApp';
import Footer from './component/Footer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../src/styles/global.scss';
import Measurments from './pages/measurement';
import ThreeD from './pages/3d';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact component={MainApp} path='/' />
          <Route exact component={Measurments} path='/measurements' />
          <Route exact component={ThreeD} path='/3d' />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
