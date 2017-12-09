import React, { Component } from "react";

export default class Media extends Component {
  render() {
    return (
      <section className="media">
        <main>
          <h1>
            One account. Listen <br />everywhere.
          </h1>
          <ul>
            <li className="dot">mobile</li>
            <li className="dot">computer</li>
            <li className="dot">tablet</li>
            <li>car</li>
          </ul>
          <ul>
            <li className="dot">speaker</li>
            <li className="dot">playstation</li>
            <li className="dot">xbox</li>
            <li className="dot">tv</li>
            <li>web player</li>
          </ul>
        </main>
        <aside>
          <img src="./img/devices.svg" />
        </aside>
      </section>
    );
  }
}