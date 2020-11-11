import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import './scss/main.scss'

import About from './components/about/index'

import Blog from './components/blog/index.jsx'
import BlogDetail from './components/blog/blog-detail/index'

import Contact from './components/contact/index.jsx'
import Footer from './components/global/footer/index'
import Home from './components/home/index'
import Navigation from './components/global/navigation/index'

import Work from './components/work/index'
import WorkstudyDetail from './components/work/workstudy-detail/index'


function App() {
  return (
    <body>
      <Navigation/>
      <BrowserRouter>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>

        <Route exact path='/work' component={Work}/>
        <Route exact path ='/workstudy/:id' component={WorkstudyDetail} />

        <Route exact path='/contact' component={Contact}/>

        <Route exact path='/blog' component={Blog}/>
        <Route exact path='/blog/:id' component={BlogDetail} />

      </BrowserRouter>
      <Footer/>
    </body>
  );
}

export default App;
