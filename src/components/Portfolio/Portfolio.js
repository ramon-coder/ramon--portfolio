import React, { Component } from 'react'

const projects = [
  {
    id: 1,
    title: 'Simple Calculator',
    category: 'Frontend',
    image: 'images/portfolio/calculadora.png',
    modalImg: 'images/portfolio/modals/m-girl.jpg',
    description: 'A simple calculator application built with HTML, CSS, and JavaScript. Performs basic arithmetic operations with a clean interface.',
    tags: 'HTML, CSS, JavaScript',
    github: 'https://aniek-dev.github.io/Calculadora-Sencilla/'
  },
  {
    id: 2,
    title: 'Task Manager CLI',
    category: 'Coming Soon',
    image: 'images/portfolio/calculadora.png',
    modalImg: 'images/portfolio/modals/m-console.jpg',
    description: 'A command-line task manager built with Node.js and Commander.js.',
    tags: 'CLI, Node.js, JavaScript',
    github: '#'
  },
  {
    id: 3,
    title: 'Subscription API',
    category: 'Coming Soon',
    image: 'images/portfolio/calculadora.png',
    modalImg: 'images/portfolio/modals/m-coffee.jpg',
    description: 'API for managing subscriptions and recurring payments.',
    tags: 'API, Node.js, Express, MongoDB',
    github: '#'
  },
  {
    id: 4,
    title: 'APIaaS',
    category: 'Coming Soon',
    image: 'images/portfolio/calculadora.png',
    modalImg: 'images/portfolio/modals/m-origami.jpg',
    description: 'Asynchronous Data Automation and Extraction API.',
    tags: 'API, Node.js, Web Scraping',
    github: '#'
  },
  {
    id: 5,
    title: 'Twitter Clone',
    category: 'Coming Soon',
    image: 'images/portfolio/calculadora.png',
    modalImg: 'images/portfolio/modals/m-judah.jpg',
    description: 'A Twitter-like social media application.',
    tags: 'React, Node.js, MongoDB',
    github: '#'
  },
  {
    id: 6,
    title: 'Bot Lunch',
    category: 'Coming Soon',
    image: 'images/portfolio/calculadora.png',
    modalImg: 'images/portfolio/modals/m-retrocam.jpg',
    description: 'Automated lunch ordering bot.',
    tags: 'Bot, Automation, JavaScript',
    github: '#'
  }
]

export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Projects</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects.map(project => (
                <div className="columns portfolio-item" key={project.id}>
                  <div className="item-wrap">
                    <a href={`#modal-0${project.id}`} title>
                      <img alt={project.title} src={project.image} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{project.title}</h5>
                          <p>{project.category}</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {projects.map(project => (
            <div id={`modal-0${project.id}`} className="popup-modal mfp-hide" key={`modal-${project.id}`}>
              <img className="scale-with-grid" src={project.modalImg} alt={project.title} />
              <div className="description-box">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <span className="categories"><i className="fa fa-tag" />{project.tags}</span>
              </div>
              <div className="link-box">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="#" className="popup-modal-dismiss">Close</a>
              </div>
            </div>
          ))}

        </div>
      </section>
    )
  }
}
