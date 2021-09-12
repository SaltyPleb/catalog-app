import React from 'react';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/index.js';
import About from './pages/about/about.js';
import Contact from './pages/contact/contact-me.js';
import Catalog from './pages/catalog/catalog.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/contact-me' exact component={Contact}/>
        <Route path='/catalog' exact component={Catalog}/>
      </Switch>
    </Router>
  );
}

export default App;
