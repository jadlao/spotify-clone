import React, { Component } from "react";

export default class New extends Component {
  render() {
    return (
      <section className="new">
        <main>
          <h1>
            Whats on <br />Spotify?
          </h1>
          <h3>Music</h3>
          <p>
            There are millions of songs on Spotify. Play your favorites,
            discover new tracks, and build the perfect collection.
          </p>
          <h3>Playlists</h3>
          <p>
            You’ll find readymade playlists to match your mood, put together by
            music fans and experts.
          </p>
          <h3>New Releases</h3>
          <p>
            Hear this week’s latest singles and albums, and check out what’s hot
            in the Top 50.
          </p>
        </main>
        <aside>
          <div className="box">
              <div className="music-cover">
                <img src="./img/cover1.jpeg" />
              </div>
              <div className="music-cover">
                <img src="./img/cover2.jpeg" />
              </div>
              <div className="music-cover">
                <img src="./img/cover3.jpeg" />
              </div>
              <div className="music-cover">
                <img src="./img/cover4.jpeg" />
              </div>
          </div>
        </aside>
      </section>
    );
  }
}