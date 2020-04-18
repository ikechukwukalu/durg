import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";


function SubAbout(props) {
    if(props.path == "/" || props.path == "/about")
        return (
            <div className={props.path == "/" ? "about-pro-active owl-carousel pt-120" : "about-pro-active owl-carousel"}>
                <div className="row align-items-center">
                    <div className="col-xl-6 col-md-6 col-lg-6 ">
                        <div className="about-info-text">
                            <div className="quote">
                                <i className="Flaticon flaticon-quote"></i>
                            </div>
                            <div className="about-ratting">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <p className="about-text">Waters make fish every without firmament saw had. Morning air subdue
                                very one. Whales grass is fish whales winged.</p>
                            <div className="about-author">
                                <div className="autor-thumb">
                                    <img src={props.base_url+"assets/images/about/about-author.jpg"} alt="" />
                                </div>
                                <div className="auhor-text">
                                    <span>Jon Snow</span>
                                    <p>Business ownner</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-md-6">
                        <div className="about-review">
                            <img src={props.base_url+"assets/images/about/about-project.jpg"} alt="" />
                            <div className="project-review">
                                <h3>350+</h3>
                                <p>Positive review</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row  align-items-center">
                    <div className="col-xl-6 col-md-6">
                        <div className="about-info-text">
                            <div className="quote">
                                <i className="Flaticon flaticon-quote"></i>
                            </div>
                            <div className="about-ratting">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <p className="about-text">Waters make fish every without firmament saw had. Morning air subdue
                                very one. Whales grass is fish whales winged.</p>
                            <div className="about-author">
                                <div className="autor-thumb">
                                    <img src={props.base_url+"assets/images/about/about-author.jpg"} alt="" />
                                </div>
                                <div className="auhor-text">
                                    <span>Jon Snow</span>
                                    <p>Business ownner</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-md-6">
                        <div className="about-review">
                            <img src={props.base_url+"assets/images/about/about-project.jpg"} alt="" />
                            <div className="project-review">
                                <h3>350+</h3>
                                <p>Positive review</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-xl-6 col-md-6">
                        <div className="about-info-text">
                            <div className="quote">
                                <i className="Flaticon flaticon-quote"></i>
                            </div>
                            <div className="about-ratting">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <p className="about-text">Waters make fish every without firmament saw had. Morning air subdue
                                very one. Whales grass is fish whales winged.</p>
                            <div className="about-author">
                                <div className="autor-thumb">
                                    <img src={props.base_url+"assets/images/about/about-author.jpg"} alt="" />
                                </div>
                                <div className="auhor-text">
                                    <span>Jon Snow</span>
                                    <p>Business ownner</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-md-6">
                        <div className="about-review">
                            <img src={props.base_url+"assets/images/about/about-project.jpg"} alt="" />
                            <div className="project-review">
                                <h3>350+</h3>
                                <p>Positive review</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    else
        return <div></div>
}

class AboutArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      path: this.props.path
    }
  }
  
  render() {
    if(this.state.path.trim() == '/' || this.state.path.trim() == '/about') 
        return (
        <div className="about-area section-padding">
                    {this.state.path.trim() == '/'
                        ?
                        <div className="pattent-bg-img">
                            <img src={this.state.base_url+"assets/images/about/pattern.png"} alt="" />
                        </div>
                        :
                        <div></div>
                    }
            <div className="container">
                {this.state.path.trim() == '/'
                    ?
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
                                <Link to="about" className="boxed-btn">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    :
                    <div></div>
                }
                <SubAbout path={this.state.path} base_url={this.state.base_url} />
            </div>
        </div>
        );
    else    
        return <div></div>;
  }
}

export default AboutArea;
