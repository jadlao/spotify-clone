import React, { Component } from 'react'

export default class Carousel extends Component {
  constructor() {
    super();

    this.state = {
      activeIndex: 0
    };
  }

  goToPrevSlide(e) {
    //console.log('prev')
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    // check if index < 1, if so, set to last slide
    (index < 1) ? (index = slidesLength) : --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    //console.log('next')
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    (index === slidesLength) ? (index = 0) : ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <div className="wrapper">
        <a href="#" onClick={e => this.goToPrevSlide(e)}>
          <span className="prev"></span>
        </a>
        <ul className="carousel">
          {this.props.slides.map((slide, index) =>
          <li className={index == this.state.activeIndex ? "carousel-item active" : "carousel-item"} key={index} >
            <h1>{ slide.content }</h1>
            <button>Learn More</button>
            <p>{ slide.signup }</p>
          </li>
        )}
        </ul>
        <a href="#" onClick={e => this.goToNextSlide(e)}>
          <span className="next"></span>
        </a>
      </div>
    )
  }
}