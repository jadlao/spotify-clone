import React, { Component } from "react";

export default class Features extends Component {
  render() {
    return (
      <section className="features">
        <aside>
          <div className="music-player">
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
          <h1>It's easy.</h1>
          <h3>Search</h3>
          <p>Know what you want to listen to? Just search and hit play.</p>
          <h3>Browse</h3>
          <p>
            Check out the latest charts, brand new releases and great playlists
            for right now.
          </p>
          <h3>Discover</h3>
          <p>
            Enjoy new music every Monday with your own personal playlist. Or sit
            back and enjoy Radio.
          </p>
        </main>
      </section>
    );
  }
}