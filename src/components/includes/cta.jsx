import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

class CTA extends Component {
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
        this.state.path.trim() == '/faq')
      return (
        <div className="cta-area cta-bg-1">
            <div className="container">
                <div className="col-xl-6 col-lg-7">
                    <div className="cta-content">
                        <h3>Let’s talk about your <br />
                            industrial problems</h3>
                        <p>Waters make fish every without firmament saw had. <br /> Morning air subdue very one. Whales grass
                            is
                            fish <br /> whales winged.</p>
                        <div className="cta-btn">
                            <Link className="boxed-btn2 black-bg" to="blog-details">Discuss now <i
                                    className="Flaticon flaticon-right-arrow"></i></Link>
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

export default CTA;
