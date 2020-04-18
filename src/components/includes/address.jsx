import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      path: this.props.path
    }
  }
  
  render() {
    if(this.state.path.trim() == '/' || 
        this.state.path.trim() == '/about' || 
        this.state.path.trim() == '/services' || 
        this.state.path.trim() == '/projects' || 
        this.state.path.trim() == '/service-details' || 
        this.state.path.trim() == '/project-details' || 
        this.state.path.trim() == '/review' || 
        this.state.path.trim() == '/faq' || 
        this.state.path.trim() == '/contact')
      return (
        <div className="addres-area black-bg section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-md-4">
                        <div className="single-address text-center">
                            <div className="addres-icon">
                                <img src={this.state.base_url+"assets/images/icon/1.png"} alt="" />
                            </div>
                            <h3>Our Location</h3>
                            <p>127, Manchaster city, London <br />
                                86/A, green street, California, USA</p>
                            <Link className="underline-hover" to="contact">Get Direction</Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4">
                        <div className="single-address text-center">
                            <div className="addres-icon">
                                <img src={this.state.base_url+"assets/images/icon/2.png"} alt="" />
                            </div>
                            <h3>Opening hour</h3>
                            <p>Mon-Fri (9.00-19.00) <br />
                                Sat-Sun <Link className="underline-hover" to="contact">(Closed)</Link></p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4">
                        <div className="single-address text-center">
                            <div className="addres-icon">
                                <img src={this.state.base_url+"assets/images/icon/3.png"} alt="" />
                            </div>
                            <h3>Drop a message</h3>
                            <p>support@durg.com <br />
                                456 267 3572</p>
                            <Link className="underline-hover" to="contact">Mail Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    else
      return (<div></div>);
  }
}

export default Address;
