import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts.js';
import Banner from '../includes/banner.jsx';

class FAQ extends Component {
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
            <Banner text="FAQ"  name="FAQ"/>
            <div className="faq-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <div id="accordion">
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" data-toggle="collapse"
                                                data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                How can I get support quick?
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                        data-parent="#accordion">
                                        <div className="card-body">
                                            Two midst that won't place waters likeness. Them place good. Darkness meat moved
                                            creeping whales firmament light so were from and given saying light was his fruitful
                                            two.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" data-toggle="collapse"
                                                data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                Can I pay with cash?
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion"
                                        >
                                        <div className="card-body">
                                            Two midst that won't place waters likeness. Them place good. Darkness meat moved
                                            creeping whales firmament light so were from and given saying light was his fruitful
                                            two.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" data-toggle="collapse"
                                                data-target="#collapseThree" aria-expanded="false"
                                                aria-controls="collapseThree">
                                                Do you offer transportation with services?
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                        data-parent="#accordion" >
                                        <div className="card-body">
                                            Two midst that won't place waters likeness. Them place good. Darkness meat moved
                                            creeping whales firmament light so were from and given saying light was his fruitful
                                            two.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="heading_4">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" data-toggle="collapse"
                                                data-target="#collapse_4" aria-expanded="false" aria-controls="collapse_4">
                                                How can I track shipment?
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapse_4" className="collapse" aria-labelledby="heading_4" data-parent="#accordion"
                                        >
                                        <div className="card-body">
                                            Two midst that won't place waters likeness. Them place good. Darkness meat moved
                                            creeping whales firmament light so were from and given saying light was his fruitful
                                            two.
                                        </div>
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

export default FAQ;