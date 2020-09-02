import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import './scss/main.scss'

import About from './components/about'
import Blog from './components/blog'
import Contact from './components/contact'
import Footer from './components/footer'
import Home from './components/home'
import Navigation from './components/navigation'
import Work from './components/work'

function App() {
  return (
    <body>
      <Navigation/>
      <BrowserRouter>
        <Route exact path='/about' component={About}/>
        <Route exact path='/blog' component={Blog}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/work' component={Work}/>
      </BrowserRouter>
      <Footer/>
    </body>
  );
}

export default App;
