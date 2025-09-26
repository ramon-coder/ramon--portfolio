import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (      
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="../images/Ramon photo.jpg" alt="Ramon" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>Hello, my name is <span>Ramón Andrés Guzmán</span> and I am
                a Front-End Web Developer. I currently live and work
                professionally in Caracas City.<br/><br/>

                I am passionate about programming and web development,
                especially everything related to the result that
                people see on screen: animations, transitions, colors,
                sizes, fonts, etc.

                <br/>
                <br/>
                I continue to prepare myself and keep learning
                technologies and programming languages to be able to create
                projects beyond what the client requires, and thus be able
                to add value to my work.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact</h2>
                <p className="address">
                  <span>Ramón Guzmán</span><br />
                  <span>Venezuela, Caracas,
                    street 2, los aguacaticos sector
                  </span><br />
                  <span>(+58-412)204-0343</span><br />
                  
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="https://drive.google.com/file/d/1Kie2l3VFmXzkJf9TRgbesrYK6--nZQ28/view?usp=sharing" target='_blank' 
                    className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
                <p>
                  <a href="https://drive.google.com/file/d/19eK0fynb_UvrDmEWenuhKW1D8G7Pvj2i/view?usp=sharing" target='_blank' 
                    className="button"><i className="fa fa-download" />Download Resume format ATS</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
