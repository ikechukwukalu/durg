import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Link } from "react-router-dom";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
    }
  }

  componentDidMount() {
    this.getDate();
  }

  getDate() {
    ReactDOM.render(new Date().getFullYear(), document.getElementById('year'));
  }
  
  render() {
    return (
      <footer className="footer-area ">
          <div className="container">
              <div className="row justify-content-between">
                  <div className="col-sm-6 col-md-3 col-xl-4">
                      <div className="single-footer-widget footer_1">
                          <Link to="/"> <img src={this.state.base_url+"assets/images/footer-logo.png"} alt="" /> </Link>
                          <p>Waters make fish every without firmament saw had. Morning air subdue very one. Whales grass
                              is fish whales winged.</p>
                          <div className="social-links">
                              <ul>
                                  <li><a href="#"> <i className="fa fa-facebook"></i> </a></li>
                                  <li><a href="#"> <i className="fa fa-twitter"></i> </a></li>
                                  <li><a href="#"> <i className="fa fa-linkedin"></i> </a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
  
                  <div className="col-sm-6 col-md-2 col-xl-2">
                      <div className="single-footer-widget">
                          <h4>Company</h4>
                          <ul>
                              <li><Link to="about">About</Link></li>
                              <li><Link to="/">Media</Link></li>
                              <li><Link to="/">Carrier</Link></li>
                              <li><Link to="review">Testimonials</Link></li>
                              <li><Link to="/">Stability</Link></li>
                          </ul>
  
                      </div>
                  </div>
                  <div className="col-sm-6 col-md-3 col-xl-3">
                      <div className="single-footer-widget">
                          <h4>Solutions</h4>
                          <ul>
                              <li><Link to="project-details">Industrial problems</Link></li>
                              <li><Link to="project-details"> Construction solution</Link></li>
                              <li><Link to="project-details">Car manufacturing</Link></li>
                              <li><Link to="project-details">Mechanical problems</Link></li>
                          </ul>
  
                      </div>
                  </div>
                  <div className="col-sm-6 col-md-3 col-xl-3">
                      <div className="single-footer-widget footer_icon">
                          <h4>Branch office</h4>
                          <div className="office-location">
                              <ul>
                                  <li>
                                      <strong>London - UK</strong>
                                      <p>127, Manchaster city, London <br />
                                          +008 728 362 278</p>
                                  </li>
                                  <li>
                                      <strong>New York - USA</strong>
                                      <p>127, Manchaster city, London <br />
                                          +008 728 362 278</p>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="container-fluid">
              <div className="row justify-content-center">
                  <div className="col-lg-12">
                      <div className="copyright_part_text text-center">
                          <p className="footer-text m-0">
                            Copyright &copy;<span id="year"></span> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
    );
  }
}

export default Footer;
