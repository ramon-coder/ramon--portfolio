import React, { Component } from 'react'
import '../../vanished.css';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="https://www.facebook.com/ramon.gc.3"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://www.linkedin.com/in/ramón-guzmán-043686206/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/maxbox01/"><i className="fa fa-instagram" /></a></li>
              <li><a href="https://github.com/ramon-coder"><i className="fa fa-github" /></a></li>
            </ul>
            <ul className="copyright">
              
              <li>© Copyright 2023 Caracas</li>
              <li>Designed by Ramón Guzmán</li>   
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
    )
  }
}