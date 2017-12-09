import React, { Component } from 'react';
import Carousel from '../../js/components/Carousel';
import carouselSlidesData from '../../js/components/data/carouselSlidesData';


export default class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <Carousel slides={carouselSlidesData} />
      </section>
    )
  }
}