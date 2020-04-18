import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts.js';
import Banner from '../includes/banner.jsx';

class About extends Component {
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
            <Banner text="Our Company"  name="About"/>
            <div className="about-area section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-md-12 col-lg-6">
                            <div className="about-thumb">
                                <img src={this.state.base_url+"assets/images/about/about.jpg"} alt="" />
                                <a className="video-icon popup-video" href="https://www.youtube.com/watch?v=vb9uYBtqmeM">
                                    <i className="fa fa-play"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-12 col-lg-6">
                            <div className="section-title mb-65">
                                <span>About Company</span>
                                <h3>Deliver inovative
                                    Industrial solution</h3>
                                <p className="para-text">
                                    Waters makte fish every without firmament saw had. Morning air subdue very one. Whales grass
                                    is fish whales winged.
                                </p>
                                <div className="name">
                                    <img src={this.state.base_url+"assets/images/about/name.png"} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="counter-area gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-4">
                            <div className="single-counter">
                                <div className="icon">
                                    <img src={this.state.base_url+"assets/images/icon/conunter-icon.png"} alt="" />
                                </div>
                                <div className="counter-number">
                                    <h3><span className="counter">400</span><span>+</span></h3>
                                    <p>Business <span>Completed</span> </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4">
                            <div className="single-counter">
                                <div className="icon">
                                    <img src={this.state.base_url+"assets/images/icon/conunter-icon2.png"} alt="" />
                                </div>
                                <div className="counter-number">
                                    <h3><span className="counter">30</span><span>+</span></h3>
                                    <p><span>Dedicated team</span> Business</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4">
                            <div className="single-counter">
                                <div className="icon">
                                    <img src={this.state.base_url+"assets/images/icon/conunter-icon3.png"} alt="" />
                                </div>
                                <div className="counter-number">
                                    <h3><span className="counter">350</span><span>+</span></h3>
                                    <p>Positive <span>review</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-area section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-md-12 col-lg-6">
                            <div className="section-title mb-65 p-0">
                                <span>About Company</span>
                                <h3>Deliver inovative
                                    Industrial solution</h3>
                                <p className="para-text">
                                    Waters makte fish every without firmament saw had. Morning air subdue very one. Whales grass
                                    is fish whales winged.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-12 col-lg-6">
                            <div className="about-thumb">
                                <img src={this.state.base_url+"assets/images/about/1.jpg"} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team-area section-padding gray-bg">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="section-title text-center mb-65">
                            <span>OUR INDUSTRIAL EXPERTS</span>
                            <h3>Meet with our Industrial experts</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="single-team">
                                <div className="team-thumb">
                                    <img src={this.state.base_url+"assets/images/team/2.jpg"} alt="" />
                                    <div className="team-hover">
                                        <div className="team-link">
                                            <ul>
                                                <li><a href="#"> <i className="fa fa-facebook"></i> </a></li>
                                                <li><a href="#"> <i className="fa fa-twitter"></i> </a></li>
                                                <li><a href="#"> <i className="fa fa-linkedin"></i> </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-info text-center">
                                    <h3>Kamal Dowlat</h3>
                                    <p>Industrial engineer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="single-team">
                                <div className="team-thumb">
                                    <img src={this.state.base_url+"assets/images/team/3.jpg"} alt="" />
                                    <div className="team-hover">
                                        <div className="team-link">
                                            <ul>
                                                <li><a href="#"> <i className="fa fa-facebook"></i> </a></li>
                                                <li><a href="#"> <i className="fa fa-twitter"></i> </a></li>
                                                <li><a href="#"> <i className="fa fa-linkedin"></i> </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-info text-center">
                                    <h3>Miller Jonson</h3>
                                    <p>Industrial engineer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="single-team">
                                <div className="team-thumb">
                                    <img src={this.state.base_url+"assets/images/team/4.jpg"} alt="" />
                                    <div className="team-hover">
                                        <div className="team-link">
                                            <ul>
                                                <li><a href="#"> <i className="fa fa-facebook"></i> </a></li>
                                                <li><a href="#"> <i className="fa fa-twitter"></i> </a></li>
                                                <li><a href="#"> <i className="fa fa-linkedin"></i> </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-info text-center">
                                    <h3>Aristetol Smith</h3>
                                    <p>Industrial engineer</p>
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

export default About;