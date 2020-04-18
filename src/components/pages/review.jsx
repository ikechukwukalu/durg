import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts.js';
import Banner from '../includes/banner.jsx';

class Review extends Component {
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
            <Banner text="Customer Review"  name="Review"/>
            <div className="main-review-area">
                <div className="container">
                    <div className="row">
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
                                        <img src={this.state.base_url+"assets/images/about/about-author.jpg"} alt="" />
                                    </div>
                                    <div className="auhor-text">
                                        <span>Jon Snow</span>
                                        <p>Business ownner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                        <img src={this.state.base_url+"assets/images/about/about-author.jpg"} alt="" />
                                    </div>
                                    <div className="auhor-text">
                                        <span>Jon Snow</span>
                                        <p>Business ownner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                        <img src={this.state.base_url+"assets/images/about/about-author.jpg"} alt="" />
                                    </div>
                                    <div className="auhor-text">
                                        <span>Jon Snow</span>
                                        <p>Business ownner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                        <img src={this.state.base_url+"assets/images/about/about-author.jpg"} alt="" />
                                    </div>
                                    <div className="auhor-text">
                                        <span>Jon Snow</span>
                                        <p>Business ownner</p>
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

export default Review;