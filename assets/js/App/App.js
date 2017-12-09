import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../js/layout/Header';
import Hero from '../../js/layout/Hero';
import New from '../../js/layout/New';
import Features from '../../js/layout/Features';
import Media from '../../js/layout/Media';
import Pricing from '../../js/layout/Pricing';
import Footer from '../../js/layout/Footer';

class App extends Component {

  render() {
    return (
      <div className='container'>
        <Header />
        <Hero />
        <New />
        <Features />
        <Media />
        <Pricing />
        <Footer />
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)