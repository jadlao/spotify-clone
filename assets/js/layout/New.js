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
            <div className="cover-wrapper-1">
              <div className="music-cover"></div>
              <div className="music-cover"></div>
            </div>
            <div className="cover-wrapper-2">
              <div className="music-cover"></div>
              <div className="music-cover"></div>
            </div>
          </div>
        </aside>
      </section>
    );
  }
}