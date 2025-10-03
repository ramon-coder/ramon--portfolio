import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Under Construction</h1>
            <h1>Portfolio</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://aniek-dev.github.io/Calculadora-Sencilla/" title="Calculadora" target="_blank" rel="noopener noreferrer">
                    <img alt="calculadora" src={process.env.PUBLIC_URL + '/images/portfolio/calculadora1.png'} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Calculadora</h5>
                        <p>aplication web</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#" title="Console" target="_blank" rel="noopener noreferrer">
                    <img alt="Coming Soon" src={process.env.PUBLIC_URL + '/images/portfolio/coming-soon.jpg'} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Coming Soon</h5>
                        <p>Coming Soon</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#" title="Judah" target="_blank" rel="noopener noreferrer">
                    <img alt="Coming Soon" src={process.env.PUBLIC_URL + '/images/portfolio/coming-soon.jpg'} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Coming Soon</h5>
                        <p>Coming Soon</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#" title="Into The Light" target="_blank" rel="noopener noreferrer">
                    <img alt="Coming Soon" src={process.env.PUBLIC_URL + '/images/portfolio/coming-soon.jpg'} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Coming Soon</h5>
                        <p>Coming Soon</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#" title="Farmer Boy" target="_blank" rel="noopener noreferrer">
                    <img alt="Coming Soon" src={process.env.PUBLIC_URL + '/images/portfolio/coming-soon.jpg'} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Coming Soon</h5>
                        <p>Coming Soon</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> 
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#" title="Girl" target="_blank" rel="noopener noreferrer">
                    <img alt="Coming Soon" src={process.env.PUBLIC_URL + '/images/portfolio/coming-soon.jpg'} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Coming Soon</h5>
                        <p>Coming Soon</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#" title="Origami" target="_blank" rel="noopener noreferrer">
                    <img alt="Coming Soon" src={process.env.PUBLIC_URL + '/images/portfolio/coming-soon.jpg'} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Coming Soon</h5>
                        <p>Coming Soon</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#" title="Coming Soon" target="_blank" rel="noopener noreferrer">
                    <img alt="Coming Soon" src={process.env.PUBLIC_URL + '/images/portfolio/coming-soon.jpg'} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Coming Soon</h5>
                        <p>Coming Soon</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
            </div> 
          </div> 
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src={process.env.PUBLIC_URL + '/images/portfolio/modals/calculadora1.png'} alt />
            <div className="description-box">
              <h5>Calculadora</h5>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/Aniek-dev/Calculadora-Sencilla.git" target="_blank" rel="noopener noreferrer">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src={process.env.PUBLIC_URL + '/images/portfolio/modals/m-console.jpg'} alt />
            <div className="description-box">
              <h4>Console</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src={process.env.PUBLIC_URL + '/images/portfolio/modals/m-judah.jpg'} alt />
            <div className="description-box">
              <h4>Judah</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src={process.env.PUBLIC_URL + '/images/portfolio/modals/m-intothelight.jpg'} alt />
            <div className="description-box">
              <h4>Into the Light</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src={process.env.PUBLIC_URL + '/images/portfolio/modals/m-farmerboy.jpg'} alt />
            <div className="description-box">
              <h4>Farmer Boy</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src={process.env.PUBLIC_URL + '/images/portfolio/modals/m-girl.jpg'} alt />
            <div className="description-box">
              <h4>Girl</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          <div id="modal-07" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src={process.env.PUBLIC_URL + '/images/portfolio/modals/m-origami.jpg'} alt />
            <div className="description-box">
              <h4>Origami</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          <div id="modal-08" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src={process.env.PUBLIC_URL + '/images/portfolio/modals/m-retrocam.jpg'} alt />
            <div className="description-box">
              <h4>Retrocam</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
        </div> 
      </section>
    )
  }
}