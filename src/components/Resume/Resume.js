import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    return (
      <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>Alejandro de Humboldt University</h3>
              <p className="info">Computer Engineering <span>•</span> <em className="date">January 2017 - In progress</em></p>
              <p>
              Student for 3 years of the degree.<br/>
              Self-taught programming learning, in languages such as JavaScript, HTML, CSS, PHP and C#.
              </p>
            </div>
          </div> {/* item end */}
        </div> {/* main-col end */}
      </div> {/* End Education */}
      {/* Work
    ----------------------------------------------- */}
      <div className="row work">
        <div className="three columns header-col exp-lab">
          <h1><span>Work Experience</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>Tranred</h3>
              <p className="info">POS Analyst <span>•</span> <em className="date">Sept 2018 - Sept 2019</em></p>
              <p>
              POS Analyst: application installation, inventory management and maintenance of POS equipment
              </p>
            </div>
          </div> {/* item end */}
          <div className="row item">
            <div className="twelve columns">
              <h3>Soluciones LGSS</h3>
              <p className="info">Web Analyst <span>•</span> <em className="date">July 2019 - June 2020</em></p>
              <p>
              IT Analyst: office equipment installation, inventory management and equipment maintenance, server maintenance and network installation
              </p>
            </div>
          </div> {/* item end */}
          <div className="row item">
            <div className="twelve columns">
              <h3>My Softweb</h3>
              <p className="info">Web Development <span>•</span> <em className="date">July 2021 - June 2022</em></p>
              <p>
              Web Analyst: front-end web development, Source code documentation, Implement web applications necessary to improve, complete or migrate existing systems, according to the functional needs of users
              </p>
            </div>
          </div> {/* item end */}
        </div> {/* main-col end */}
      </div> {/* End Work */}
      {/* Skills
    ----------------------------------------------- */}
      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Technologies</span></h1>
        </div>
        <div className="nine columns main-col">
          <p>Web application developer.
            Problem solving and quality control.
            Agile processes.
            Front-end and back-end development
          </p>
          <div className="bars">
            <ol className="skills">
              <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
              <img className='Photoshop' alt="photoshop" src={process.env.PUBLIC_URL + '/images/skills/logotipo-de-adobe-photoshop.png'} />
              <li><span className="bar-expand illustrator" /><em>Github</em></li>
              <img className='Photoshop' alt="photoshop" src={process.env.PUBLIC_URL + '/images/skills/github-mark.png'} />
              <li><span className="bar-expand wordpress" /><em>React</em></li>
              <img className='Photoshop' alt="photoshop" src={process.env.PUBLIC_URL + '/images/skills/icons8-react-90.png'} />
              <li><span className="bar-expand css" /><em>CSS</em></li>
              <img className='Photoshop' alt="photoshop" src={process.env.PUBLIC_URL + '/images/skills/icons8-css-100.png'} />
              <li><span className="bar-expand html5" /><em>HTML5</em></li>
              <img className='Photoshop' alt="photoshop" src={process.env.PUBLIC_URL + '/images/skills/icons8-html5-100.png'} />
              <li><span className="bar-expand jquery" /><em>jQuery</em></li>
              <img className='Photoshop' alt="photoshop" src={process.env.PUBLIC_URL + '/images/skills/icons8-jquery-100.png'} />
            </ol>
          </div>
        </div>
      </div> 
    </section>
    )
  }
}