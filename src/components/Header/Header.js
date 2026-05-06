import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <header id="home">
      <button className="theme-toggle" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="/" title="Hide navigation">Hide navigation</a>
        <ul id="nav" className="nav">
          <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About Me</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#Contact">Contact</a></li>
          </ul> {/* end #nav */}
      </nav> {/* end #nav-wrap */}
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I am Ramón Guzmán</h1>
          <h3>I live in Venezuela and I am a <span>Frontend developer</span> creator of web pages and applications with <span>React and React Native</span>. 
          You can <a className="smoothscroll texto-hover" href="#about">scroll down</a> and read more <a className="smoothscroll texto-hover" href="#about">about me</a>.</h3>
          <hr />
          <ul className="social">
            <li><a href="https://www.facebook.com/ramon.gc.3" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a></li>
            <li><a href="https://www.linkedin.com/in/ramón-guzmán-043686206/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>
            <li><a href="https://www.instagram.com/maxbox01/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" /></a></li>
            <li><a href="https://github.com/ramon-coder" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" /></a></li>
          </ul>
        </div>
      </div>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
      </p>
    </header>
  );
}
