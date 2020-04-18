import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts.js';
import Banner from '../includes/banner.jsx';

class Services extends Component {
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
            <Banner text="Our Services"  name="Services"/>
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
            <Scripts />
        </Fragment>
    );
  }
}

export default Services;