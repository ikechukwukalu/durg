import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts.js';
import Banner from '../includes/banner.jsx';

class Projects extends Component {
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
            <Banner text="Our Projects"  name="Projects"/>
            <div className="main-project-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-6">
                            <div className="single-project">
                                <div className="project-thumb">
                                    <img src={this.state.base_url+"assets/images/project/project-1.png"} alt="" />
                                </div>
                                <div className="project-info">
                                    <span>Industrial construction</span>
                                    <h3>Research and development center</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className="single-project">
                                <div className="project-thumb">
                                    <img src={this.state.base_url+"assets/images/project/project-2.png"} alt="" />
                                </div>
                                <div className="project-info">
                                    <span>Machine engineering</span>
                                    <h3>Project of technological park</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className="single-project">
                                <div className="project-thumb">
                                    <img src={this.state.base_url+"assets/images/project/project-3.png"} alt="" />
                                </div>
                                <div className="project-info">
                                    <span>Industrial construction</span>
                                    <h3>Research and development center</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className="single-project">
                                <div className="project-thumb">
                                    <img src={this.state.base_url+"assets/images/project/project-4.png"} alt="" />
                                </div>
                                <div className="project-info">
                                    <span>Machine engineering</span>
                                    <h3>Project of technological park</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className="single-project">
                                <div className="project-thumb">
                                    <img src={this.state.base_url+"assets/images/project/project-5.png"} alt="" />
                                </div>
                                <div className="project-info">
                                    <span>Industrial construction</span>
                                    <h3>Research and development center</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className="single-project">
                                <div className="project-thumb">
                                    <img src={this.state.base_url+"assets/images/project/project-6.png"} alt="" />
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
            <Scripts />
        </Fragment>
    );
  }
}

export default Projects;