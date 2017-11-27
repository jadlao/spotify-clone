import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navigation from '../../js/layout/Navigation';
import Hero from '../../js/layout/Hero';
import New from '../../js/layout/New';
import Features from '../../js/layout/Features';
import Media from '../../js/layout/Media';
import Pricing from '../../js/layout/Pricing';
import Footer from '../../js/layout/Footer';

class Layout extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render() {
    return (
      <div className='container'>
        <Navigation />
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

ReactDOM.render(<Layout />, app)