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
  constructor() {
    super();
    this.state = {
      className: 'hidden'
    }
  }

  handleScroll() {
    console.log(document.documentElement.scrollTop);
    //console.log(this.state.className);
    (document.documentElement.scrollTop > 500) ? (this.setState({ className: 'show' })) : ''
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll();
  }

  render() {
    return (
      <div className='container'>
        <Header />
        <Hero />
        <New className={this.state.className}/>
        <Features className={this.state.className}/>
        <Media className={this.state.className}/>
        <Pricing className={this.state.className}/>
        <Footer />
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)