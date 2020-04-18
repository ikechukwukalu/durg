import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      path: this.props.path
    }
  }

  componentDidMount() {
    if(this.state.path.trim() == "/") {
      $("#home").addClass("active");
      $("#about").removeClass("active");
      $("#services").removeClass("active");
      $("#projects").removeClass("active");
      $("#blog").removeClass("active");
      $("#pages").removeClass("active");
      $("#contact").removeClass("active");
    } else if(this.state.path.trim() == "/about") {
      $("#about").addClass("active");
      $("#home").removeClass("active");
      $("#services").removeClass("active");
      $("#projects").removeClass("active");
      $("#blog").removeClass("active");
      $("#pages").removeClass("active");
      $("#contact").removeClass("active");
    } else if(this.state.path.trim() == "/services") {
      $("#services").addClass("active");
      $("#home").removeClass("active");
      $("#about").removeClass("active");
      $("#projects").removeClass("active");
      $("#blog").removeClass("active");
      $("#pages").removeClass("active");
      $("#contact").removeClass("active");
    } else if(this.state.path.trim() == "/projects") {
      $("#projects").addClass("active");
      $("#home").removeClass("active");
      $("#about").removeClass("active");
      $("#services").removeClass("active");
      $("#blog").removeClass("active");
      $("#pages").removeClass("active");
      $("#contact").removeClass("active");
    } else if(this.state.path.trim() == "/blog") {
      $("#blog").addClass("active");
      $("#home").removeClass("active");
      $("#about").removeClass("active");
      $("#services").removeClass("active");
      $("#projects").removeClass("active");
      $("#pages").removeClass("active");
      $("#contact").removeClass("active");
    } else if(this.state.path.trim() == "/single-blog") {
      $("#blog").addClass("active");
      $("#home").removeClass("active");
      $("#about").removeClass("active");
      $("#services").removeClass("active");
      $("#projects").removeClass("active");
      $("#pages").removeClass("active");
      $("#contact").removeClass("active");
    } else if(this.state.path.trim() == "/elements") {
      $("#pages").addClass("active");
      $("#home").removeClass("active");
      $("#about").removeClass("active");
      $("#services").removeClass("active");
      $("#projects").removeClass("active");
      $("#blog").removeClass("active");
      $("#contact").removeClass("active");
    } else if(this.state.path.trim() == "/service-details") {
      $("#pages").addClass("active");
      $("#home").removeClass("active");
      $("#about").removeClass("active");
      $("#services").removeClass("active");
      $("#projects").removeClass("active");
      $("#blog").removeClass("active");
      $("#contact").removeClass("active");
    } else if(this.state.path.trim() == "/project-details") {
      $("#pages").addClass("active");
      $("#home").removeClass("active");
      $("#about").removeClass("active");
      $("#services").removeClass("active");
      $("#projects").removeClass("active");
      $("#blog").removeClass("active");
      $("#contact").removeClass("active");
    } else if(this.state.path.trim() == "/contact") {
      $("#contact").addClass("active");
      $("#home").removeClass("active");
      $("#about").removeClass("active");
      $("#services").removeClass("active");
      $("#projects").removeClass("active");
      $("#blog").removeClass("active");
      $("#pages").removeClass("active");
    }
  }
  
  render() {
    return (
      <header>
          <div className="header-area ">
              <div className="header-top black-bg d-none d-md-block">
                  <div className="container">
                      <div className="row">
                          <div className="col-xl-6 col-md-6 col-lg-6">
                              <div className="header-contact">
                                  <a href="#"><i className="fa fa-phone"></i> +880 256 356 256</a>
                                  <a href="#"><i className="fa fa-envelope"></i> support24@durg.com</a>
                              </div>
                          </div>
                          <div className="col-xl-6 col-md-6 col-lg-6">
                              <div className="header-top-menu">
                                  <nav>
                                      <ul>
                                          <li><Link to="blog">News & media</Link></li>
                                          <li><Link to="review">Review</Link></li>
                                          <li><Link to="faq">FAQ</Link></li>
                                      </ul>
                                  </nav>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div id="sticky-header" className="main-header-area white-bg">
                  <div className="container">
                      <div className="row align-items-center">
                          <div className="col-xl-2 col-lg-2">
                              <div className="logo-img">
                                  <Link to="/">
                                      <img src={this.state.base_url+"assets/images/logo.png"} alt="" />
                                  </Link>
                              </div>
                          </div>
                          <div className="col-xl-7 col-lg-7">
                              <div className="main-menu d-none d-lg-block">
                                  <nav>
                                      <ul id="navigation">
                                          <li><Link id="home" to="/">Home</Link></li>
                                          <li><Link id="about" to="about">About</Link></li>
                                          <li><Link id="services" to="services">Services</Link></li>
                                          <li><Link id="projects" to="projects">Projects</Link></li>
                                          <li><a id="blog" href="#">blog <i className="ti-angle-down"></i></a>
                                              <ul className="submenu">
                                                  <li><Link to="blog">blog</Link></li>
                                                  <li><Link to="single-blog">single-blog</Link></li>
                                              </ul>
                                          </li>
                                          <li><a id="pages" href="#">pages <i className="ti-angle-down"></i></a>
                                              <ul className="submenu">
                                                  <li><Link to="elements">elements</Link></li>
                                                  <li><Link to="service-details">service-details</Link></li>
                                                  <li><Link to="project-details">project-details</Link></li>
                                              </ul>
                                          </li>
                                          <li><Link id="contact" to="contact">Contact</Link></li>
                                      </ul>
                                  </nav>
                              </div>
                          </div>
                          <div className="col-xl-3 col-lg-3">
                              <div className="quote-area">
                                  <div className="search-bar">
                                      <a id="search_1" href="#"><i className="fa fa-search"></i></a>
                                  </div>
                                  <div className="get-quote d-none d-lg-block">
                                      <a className="boxed-btn" href="#">Get a quote</a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-12">
                              <div className="mobile_menu d-block d-lg-none"></div>
                          </div>
                      </div>
                      <div className="search_input" id="search_input_box" style={{display: "none"}}>
                          <div className="container ">
                              <form className="d-flex justify-content-between search-inner">
                                  <input type="text" className="form-control" id="search_input" placeholder="Search Here" />
                                  <button type="submit" className="btn"></button>
                                  <span className="fa fa-close" id="close_search" title="Close Search"></span>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </header>
    );
  }
}

export default Header;
