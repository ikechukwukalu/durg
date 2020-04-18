import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      name: this.props.name
    }
  }
  
  render() {
    return (
        <section className="breadcrumb breadcrumb_bg banner-bg-1 overlay2 ptb200">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 offset-lg-1">
                        <div className="breadcrumb_iner">
                            <div className="breadcrumb_iner_item">
                                <h2>{this.state.text}</h2>
                                <p> <Link to="/">Home.</Link> <span></span> {this.state.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Banner;
