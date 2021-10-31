import React from 'react';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import AppRouter from './components/routes/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <AppRouter />
      
      {/* <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/contact-me' exact component={Contact}/>
        <Route path='/catalog' exact component={Catalog}/>
        <Route path='/sign-in' exact component={Signin}/>
        <Route path='/sign-up' exact component={Signup}/>
      </Switch> */}
    </Router>
  );
}

export default App;
