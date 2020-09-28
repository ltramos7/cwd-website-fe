import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import './scss/main.scss'

import About from './components/about/index'
import Blog from './components/blog/index'
import Contact from './components/contact/index'
import Footer from './components/global/footer/index'
import Home from './components/home/index'
import Navigation from './components/global/navigation/index'
import Work from './components/work/index'

import Test from './components/test';

function App() {
  return (
    <body>
      <Navigation/>
      <BrowserRouter>
        <Route exact path='/about' component={About}/>
        <Route exact path='/blog' component={Blog}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/work' component={Work}/>

        <Route exact path='/test' component={Test} />
      </BrowserRouter>
      <Footer/>
    </body>
  );
}

export default App;
