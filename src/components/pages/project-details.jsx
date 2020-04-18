import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts.js';
import Banner from '../includes/banner.jsx';

class ProjectDetails extends Component {
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
            <div className="details-banner-area details-bg-1 overlay2 details-banner-area2">
                <div className="details-banner-inner2">
                    <div className="container">
                        <div className="col-lg-11 offset-lg-1">
                            <div className="details-banner-text">
                                <Link to="project-details">January 23, 2019 - Industry.com</Link>
                                <h2>Research and development <br />
                                    center construction</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-review-area section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-md-6">
                            <div className="single-review">
                                <h2>Project overview</h2>
                                <p>
                                    Two midst that won't place waters likeness. Them place good. Darkness meat moved creeping
                                    whales firmament light so were from and given saying light was his fruitful two.
                                </p>
                                <p>
                                    Creature saying in was heaven appear in dominion can't sixth heaven winged lights bearing
                                    evening likeness. Above man thing. Fourth lights. That had you're stars.
                                </p>
                                <p>
                                    Sixth called tree over that fill be blessed our herb Air they're for dry male upon tree
                                    waters whose second open, of replenish created from green moved dry third fill don't tree
                                    green. Life.Two midst that won't place waters likeness. Darkness meat moved creeping whales
                                    firmament light so were from and given saying.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className="review-thumb">
                                <img src={this.state.base_url+"assets/images/project/review-thumb.jpg"} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="full-width-gallery">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="full-thumb">
                                <img src={this.state.base_url+"assets/images/project/width-thumb.jpg"} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className="solution-wrap">
                                <h2>Challenge was</h2>
                                <p>Two midst that won't place waters likeness. Them place good. Darkness meat moved creeping
                                    whales firmament light so were from and given saying light was his fruitful two. </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className="solution-wrap">
                                <h2>Solution</h2>
                                <p>Two midst that won't place waters likeness. Them place good. Darkness meat moved creeping
                                    whales firmament light so were from and given saying light was his fruitful two. </p>
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

export default ProjectDetails;