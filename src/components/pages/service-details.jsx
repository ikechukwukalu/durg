import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts.js';
import Banner from '../includes/banner.jsx';

class ServiceDetails extends Component {
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
            <Banner text="Service Details"  name="Service Details"/>
            <div className="service-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="details-nav">
                                <nav>
                                    <ul className="nav" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <Link className="nav-link active show" id="home-tab" data-toggle="tab" to="service-details" role="tab"
                                                aria-controls="home" aria-selected="true">Industrial construction</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" id="profile-tab" data-toggle="tab" to="service-details" role="tab"
                                                aria-controls="profile" aria-selected="false">Mechanical engineering</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" id="contact-tab" data-toggle="tab" to="service-details" role="tab"
                                                aria-controls="contact" aria-selected="false">Bridge construction</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <Link href="service-details" className="download-brouser">Download broucher</Link>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="single-details">
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="details-wrap">
                                            <div className="details-thumb">
                                                <img src={this.state.base_url+"assets/images/service/service-details.jpg"} alt="" />
                                            </div>
                                            <div className="details-info">
                                                <h3>Compatibility</h3>
                                                <p>Two midst that won't place waters likeness. Them place good. Darkness meat
                                                    moved creeping whales firmament light so were from and given saying light
                                                    was his fruitful two. Creature saying in was heaven appear in dominion can't
                                                    sixth heaven winged lights bearing evening likeness. Above man thing. Fourth
                                                    lights. That had you're stars. You subdue form days years likeness female.
                                                </p>
                                            </div>
                                            <div className="details-info">
                                                <h3>Speciality</h3>
                                                <p>Two midst that won't place waters likeness. Them place good. Darkness meat
                                                    moved creeping whales firmament light so were from and given saying light
                                                    was his fruitful two. Creature saying in was heaven appear in dominion can't
                                                    sixth heaven winged lights bearing evening likeness. Above man thing. Fourth
                                                    lights. That had you're stars. You subdue form days years likeness female.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="details-wrap">
                                            <div className="details-thumb">
                                                <img src={this.state.base_url+"assets/images/service/service-details.jpg"} alt="" />
                                            </div>
                                            <div className="details-info">
                                                <h3>Compatibility</h3>
                                                <p>Two midst that won't place waters likeness. Them place good. Darkness meat
                                                    moved creeping whales firmament light so were from and given saying light
                                                    was his fruitful two. Creature saying in was heaven appear in dominion can't
                                                    sixth heaven winged lights bearing evening likeness. Above man thing. Fourth
                                                    lights. That had you're stars. You subdue form days years likeness female.
                                                </p>
                                            </div>
                                            <div className="details-info">
                                                <h3>Speciality</h3>
                                                <p>Two midst that won't place waters likeness. Them place good. Darkness meat
                                                    moved creeping whales firmament light so were from and given saying light
                                                    was his fruitful two. Creature saying in was heaven appear in dominion can't
                                                    sixth heaven winged lights bearing evening likeness. Above man thing. Fourth
                                                    lights. That had you're stars. You subdue form days years likeness female.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                        <div className="details-wrap">
                                            <div className="details-thumb">
                                                <img src={this.state.base_url+"assets/images/service/service-details.jpg"} alt="" />
                                            </div>
                                            <div className="details-info">
                                                <h3>Compatibility</h3>
                                                <p>Two midst that won't place waters likeness. Them place good. Darkness meat
                                                    moved creeping whales firmament light so were from and given saying light
                                                    was his fruitful two. Creature saying in was heaven appear in dominion can't
                                                    sixth heaven winged lights bearing evening likeness. Above man thing. Fourth
                                                    lights. That had you're stars. You subdue form days years likeness female.
                                                </p>
                                            </div>
                                            <div className="details-info">
                                                <h3>Speciality</h3>
                                                <p>Two midst that won't place waters likeness. Them place good. Darkness meat
                                                    moved creeping whales firmament light so were from and given saying light
                                                    was his fruitful two. Creature saying in was heaven appear in dominion can't
                                                    sixth heaven winged lights bearing evening likeness. Above man thing. Fourth
                                                    lights. That had you're stars. You subdue form days years likeness female.
                                                </p>
                                            </div>
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

export default ServiceDetails;