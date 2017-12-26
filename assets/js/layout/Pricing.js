import React, { Component } from 'react';

export default class Pricing extends Component {
  render() {
    return (
      <section className="pricing">
        <h1 className={this.props.className}>Go get the music.</h1>
        <div className="card-wrapper">
          <div className={`card ${this.props.className}`}>
            <h3>Spotify Free</h3>
            <h2>
              <span>$0.00</span>
              <span> / month</span>
            </h2>
            <ul>
              <li>Shuffle play</li>
              <li className="inactive">Ad free</li>
              <li className="inactive">Unlimited skips</li>
              <li className="inactive">Listen offline</li>
              <li className="inactive">Play any track</li>
              <li className="inactive">High quality audio</li>
            </ul>
            <button>Get Free</button>
          </div>
          <div className={`card ${this.props.className}`}>
            <h3>Spotify Premium</h3>
            <h2>
              <span>$0.99</span>
              <span> / 3 months</span>
            </h2>
            <ul>
              <li>Shuffle play</li>
              <li>Ad free</li>
              <li>Unlimited skips</li>
              <li>Listen offline</li>
              <li>Play any track</li>
              <li>High quality audio</li>
            </ul>
            <button>Get Premium</button>
          </div>
        </div>
        <p className={this.props.className}>
          Offer not available to users who already tried Premium.{' '}
          <u>Terms apply.</u>
        </p>
      </section>
    );
  }
}
