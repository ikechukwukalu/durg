import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
    }
  }

  componentWillUnmount() {
    $("head").find('script').remove(); 
  }
  
  render() {
    return (
        <Fragment>
          <div className="slider-area">
              <div className="slider-active owl-carousel">
                  <div className="single-slider bg-img-1">
                      <div className="container">
                          <div className="row">
                              <div className="col-xl-7 offset-xl-1 col-lg-7">
                                  <div className="slider-content">
                                      <p>Quality work. Trustable service. Dedicated team</p>
                                      <h3>We provide your Industrial solution</h3>
                                      <div className="slider-btn">
                                          <Link className="boxed-btn2" to="services">Our Services <i
                                                  className="Flaticon flaticon-right-arrow"></i></Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="single-slider bg-img-1">
                      <div className="container">
                          <div className="row">
                              <div className="col-xl-7 offset-xl-1 col-lg-7">
                                  <div className="slider-content">
                                      <p>Quality work. Trustable service. Dedicated team</p>
                                      <h3>We provide your Industrial solution</h3>
                                      <div className="slider-btn">
                                          <Link className="boxed-btn2" to="services">Our Services <i
                                                  className="Flaticon flaticon-right-arrow"></i></Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="single-slider bg-img-1">
                      <div className="container">
                          <div className="row">
                              <div className="col-xl-7 offset-xl-1 col-lg-7">
                                  <div className="slider-content">
                                      <p>Quality work. Trustable service. Dedicated team</p>
                                      <h3>We provide your Industrial solution</h3>
                                      <div className="slider-btn">
                                          <Link className="boxed-btn2" to="services">Our Services <i
                                                  className="Flaticon flaticon-right-arrow"></i></Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="brand-area gray-bg">
              <div className="container">
                  <div className="row">
                      <div className="col-xl-12">
                          <div className="brand-active owl-carousel">
                              <div className="single-brand">
                                  <img src={this.state.base_url+"assets/images/brand/1.png"} alt="" />
                              </div>
                              <div className="single-brand">
                                  <img src={this.state.base_url+"assets/images/brand/2.png"} alt="" />
                              </div>
                              <div className="single-brand">
                                  <img src={this.state.base_url+"assets/images/brand/3.png"} alt="" />
                              </div>
                              <div className="single-brand">
                                  <img src={this.state.base_url+"assets/images/brand/4.png"} alt="" />
                              </div>
                              <div className="single-brand">
                                  <img src={this.state.base_url+"assets/images/brand/5.png"} alt="" />
                              </div>
                              <div className="single-brand">
                                  <img src={this.state.base_url+"assets/images/brand/6.png"} alt="" />
                              </div>
                              <div className="single-brand">
                                  <img src={this.state.base_url+"assets/images/brand/4.png"} alt="" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="service-area">
              <div className="container">
                  <div className="row align-items-center justify-content-center">
                      <div className="section-title text-center mb-65">
                          <span>OUR SERVICES</span>
                          <h3>We provide all of your <br />
                              industrial solution</h3>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-xl-4 col-md-4">
                          <div className="single-service">
                              <div className="service-thumb">
                                  <img src={this.state.base_url+"assets/images/service/1.jpg"} alt="" />
                              </div>
                              <h3>Industrial construction</h3>
                              <p>Waters make fish every without firmament saw had. Morning air subdue.</p>
                              <Link to="service-details" className="read-more">Read More</Link>
                          </div>
                      </div>
                      <div className="col-xl-4 col-md-4">
                          <div className="single-service">
                              <div className="service-thumb">
                                  <img src={this.state.base_url+"assets/images/service/2.jpg"} alt="" />
                              </div>
                              <h3>Mechanical engineering</h3>
                              <p>Waters make fish every without firmament saw had. Morning air subdue.</p>
                              <Link to="service-details" className="read-more">Read More</Link>
                          </div>
                      </div>
                      <div className="col-xl-4 col-md-4">
                          <div className="single-service">
                              <div className="service-thumb">
                                  <img src={this.state.base_url+"assets/images/service/1.jpg"} alt="" />
                              </div>
                              <h3>Bridge construction</h3>
                              <p>Waters make fish every without firmament saw had. Morning air subdue.</p>
                              <Link to="service-details" className="read-more">Read More</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="project-area bg-img-2 overlay">
              <div className="container-fluid p-lg-0">
                  <div className="row justify-content-end no-gutters">
                      <div className="col-xl-4 col-md-6">
                          <div className="section-title text-white mb-65 ml-80">
                              <h3>Take a look around <br />
                                  our projects</h3>
                              <p>Waters make fish every without firmament saw had. <br /> Morning air subdue.</p>
                              <div className="more-project">
                                  <Link to="projects">More Projects</Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-6 col-md-6">
                          <div className="project-active owl-carousel">
                              <div className="single-project">
                                  <div className="project-thumb">
                                      <img src={this.state.base_url+"assets/images/project/1.jpg"} alt="" />
                                  </div>
                                  <div className="project-info">
                                      <span>Industrial construction</span>
                                      <h3>Research and development center</h3>
                                  </div>
                              </div>
                              <div className="single-project">
                                  <div className="project-thumb">
                                      <img src={this.state.base_url+"assets/images/project/1.jpg"} alt="" />
                                  </div>
                                  <div className="project-info">
                                      <span>Machine engineering</span>
                                      <h3>Project of technological park</h3>
                                  </div>
                              </div>
                              <div className="single-project">
                                  <div className="project-thumb">
                                      <img src={this.state.base_url+"assets/images/project/1.jpg"} alt="" />
                                  </div>
                                  <div className="project-info">
                                      <span>Industrial construction</span>
                                      <h3>Research and development center</h3>
                                  </div>
                              </div>
                              <div className="single-project">
                                  <div className="project-thumb">
                                      <img src={this.state.base_url+"assets/images/project/1.jpg"} alt="" />
                                  </div>
                                  <div className="project-info">
                                      <span>Machine engineering</span>
                                      <h3>Project of technological park</h3>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <Scripts />
        </Fragment>
    );
  }
}

export default Home;