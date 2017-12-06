import React, { Component } from "react";

export default class Pricing extends Component {
  render() {
    return (
      <section className="pricing">
        <h1>Go get the music.</h1>
        <div className="card-wrapper">
          <div className="card">
            <h3>Spotify Free</h3>
            <h2>$0 / month</h2>
            <ul>
              <li>Shuffle play</li>
              <li>Ad free</li>
              <li>Unlimited skips</li>
              <li>Listen offline</li>
              <li>Play any track</li>
              <li>High quality audio</li>
            </ul>
            <button>Get Free</button>
          </div>
          <div className="card">
            <h3>Spotify Premium</h3>
            <h2>$0.99 / 3 months</h2>
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
        <p>Offer not available to users who already tried Premium. <u>Terms apply.</u></p>
      </section>
    );
  }
}