import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="link-wrapper">
              <div className="footer-brand">
                <img src="./img/logo-spotify.png" alt="Spotify Logo" />
              </div>
              <div className="link-cols">
                <ul>
                  <li>Company</li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Jobs</a></li>
                  <li><a href="#">Press</a></li>
                  <li><a href="#">News</a></li>
                </ul>
                <ul>
                  <li>Communities</li>
                  <li><a href="#">For Artists</a></li>
                  <li><a href="#">Developers</a></li>
                  <li><a href="#">Brands</a></li>
                </ul>
                <ul>
                  <li>Useful links</li>
                  <li><a href="#">Help</a></li>
                  <li><a href="#">Gift</a></li>
                  <li><a href="#">Web Player</a></li>
                </ul>
              </div>
              <div className="social-icons">
                <a href="#">
                  <span className="instagram circle">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </span>
                </a>
                <a href="#">
                  <span className="twitter circle">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </span>
                </a>
                <a href="#">
                  <span className="facebook circle">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="copyright-wrapper">
              <div className="other-links">
                <ul>
                  <li><a href="#">Legal</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Cookies</a></li>
                  <li><a href="#">About Ads</a></li>
                </ul>
              </div>
              <div className="copyrights">
                <div className="australia">
                  <a href="#">Australia</a>
                  <img src="./img/au.svg"/>
                </div>
              &copy; 2017 Spotify AB
              </div>
            </div>
            </footer>
    )
  }
}