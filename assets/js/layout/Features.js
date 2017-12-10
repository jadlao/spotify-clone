import React, { Component } from "react";

export default class Features extends Component {
  render() {
    return (
      <section className="features">
        <aside>
          <div className={`music-player ${this.props.className}`}>
            <div className="small-circle"></div>
            <h4>Made for You</h4>
            <div className="music-images">
              <figure>
                <img src="./img/your_daily_mix.jpg" />
                <figcaption>Your Daily Mix</figcaption>
              </figure>
              <figure>
                <img src="./img/your_release_radar.jpg" />
                <figcaption>Release Radar</figcaption>
              </figure>
            </div>
            <ul>
              <li>Charts</li>
              <li>New Releases</li>
              <li>Videos</li>
              <li>Podcasts</li>
              <li>Discover</li>
              <li>Concerts</li>
            </ul>
          </div>
        </aside>
        <main>
          <h1 className={this.props.className}>It's easy.</h1>
          <span className={this.props.className}>
          <h3>Search</h3>
          <p>Know what you want to listen to? Just search and hit play.</p>
          </span>
          <span className={this.props.className}>
          <h3>Browse</h3>
          <p>
            Check out the latest charts, brand new releases and great playlists
            for right now.
          </p>
        </span>
        <span className={this.props.className}>
          <h3>Discover</h3>
          <p>
            Enjoy new music every Monday with your own personal playlist. Or sit
            back and enjoy Radio.
          </p>
        </span>
        </main>
      </section>
    );
  }
}