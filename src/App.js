import React from 'react'
import Navbar from './Components/elements/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './Components/pages/home';
import Cards from './Components/elements/Cards';
import Footer from './Components/elements/Footer';
import About from './Components/pages/About';
import Contact from './Components/elements/Contact';

function App() {
  return (
    <div>
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={home} />
      <Route path='/About' component={About}/>
      <Route path='/services' component={Cards} />
      <Route path='/contacts' component={Contact} />
    </Switch>
  </Router>

    
  </div>
  

  )
}

export default App
