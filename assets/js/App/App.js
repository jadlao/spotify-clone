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
      showNew: 'hidden',
      showFeatures: 'hidden',
      showMedia: 'hidden',
      showPricing: 'hidden'
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    //console.log(document.documentElement.scrollTop);
    //console.log(this.state.className);
    var scrollPosition = document.documentElement.scrollTop;
    scrollPosition > 200 ? this.setState({ showNew: 'show' }) : '';
    scrollPosition > 700 ? this.setState({ showFeatures: 'show' }) : '';
    scrollPosition > 1400 ? this.setState({ showMedia: 'show' }) : '';
    scrollPosition > 1900 ? this.setState({ showPricing: 'show' }) : '';
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Hero />
        <New className={this.state.showNew} />
        <Features className={this.state.showFeatures} />
        <Media className={this.state.showMedia} />
        <Pricing className={this.state.showPricing} />
        <Footer />
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
