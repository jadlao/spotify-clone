import React, { Component } from "react";

export default class Media extends Component {
  render() {
    return (
      <section className="media">
        <main>
          <h1>
            One account. Listen <br />everywhere.
          </h1>
          <h5>mobile * computer * tablet * car</h5>
          <h5>speaker * playstation * xbox * tv * web player</h5>
        </main>
        <aside>
          <img src="./img/devices.svg" />
        </aside>
      </section>
    );
  }
}