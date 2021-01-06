import React, { Component, useState, useEffect } from 'react';
import {  Route, Link, Switch, Redirect } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import $ from 'jquery';

import Header from './includes/header.jsx';
import Footer from './includes/footer.jsx';
import Address from './includes/address.jsx';
import CTA from './includes/cta.jsx';
import AboutArea from './includes/about-area.jsx';

import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Services from './pages/services.jsx';
import Projects from './pages/projects.jsx';
import Blog from './pages/blog.jsx';
import SingleBlog from './pages/single-blog.jsx';
import Elements from './pages/elements.jsx';
import ServiceDetails from './pages/service-details.jsx';
import ProjectDetails from './pages/project-details.jsx';
import Contact from './pages/contact.jsx';
import Review from './pages/review.jsx';
import FAQ from './pages/faq.jsx';

function RouteChange () {
  const history = useHistory();

  useEffect(() => {
    document.getElementById('root').dispatchEvent(new CustomEvent('route_change', {detail: history.location.pathname}));
  }, [history.location.pathname]);

  return null;
}

function NoMatch (props) {
  return (
    <div key="content"  className="container padding-top-3x padding-bottom-3x mb-1">
      <h1 className="display-404 text-center">404</h1>
      <div className="text-center">
        <h2>Page Not Found</h2>
        <p className="text-sm">It seems we can’t find the <b className="w3-text-red">{window.location.pathname}</b> page you are looking for. <Link to="/"><strong>Go back to Homepage</strong></Link><br/>Or try making a search at the top right corner of the page.</p>
      </div>
    </div>
  )
}

class Components extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      path: window.location.pathname
    }
  }

  componentDidMount() {
    document.getElementById('root').addEventListener('route_change', this.route_change);
  }

  route_change = (e) => {
    this.setState({
      path: e.detail
    });
  }

  render() {
    return [
        <RouteChange key="RouteChange" />,
        <Header key={"header"+this.state.path}
          base_url={this.state.base_url} 
          api_url={this.state.api_url} 
          path={this.state.path} 
        />,
        <Switch key="switch">
            <Route exact path="/" render={(props) => 
              <Home {...props}
                base_url={this.state.base_url} 
                api_url={this.state.api_url} 
              />} 
            />
            <Route path="/about" render={(props) => 
              <About {...props}
                base_url={this.state.base_url} 
                api_url={this.state.api_url} 
              />} 
            />
            <Route path="/services" render={(props) => 
              <Services {...props}
                base_url={this.state.base_url} 
                api_url={this.state.api_url} 
              />} 
            />
            <Route path="/projects" render={(props) => 
              <Projects {...props}
                base_url={this.state.base_url} 
                api_url={this.state.api_url} 
              />} 
            />
            <Route path="/blog" render={(props) => 
              <Blog {...props}
                base_url={this.state.base_url} 
                api_url={this.state.api_url} 
              />} 
            />
            <Route path="/single-blog" render={(props) => 
              <SingleBlog {...props}
                base_url={this.state.base_url} 
                api_url={this.state.api_url} 
              />} 
            />
            <Route path="/elements" render={(props) => 
              <Elements {...props}
                base_url={this.state.base_url} 
                api_url={this.state.api_url} 
              />} 
            />
            <Route path="/service-details" render={(props) => 
              <ServiceDetails {...props}
                base_url={this.state.base_url} 
                api_url={this.state.api_url} 
              />} 
            />
            <Route path="/project-details" render={(props) => 
              <ProjectDetails {...props}
                base_url={this.state.base_url} 
                api_url={this.state.api_url} 
              />} 
            />
            <Route path="/contact" render={(props) => 
              <Contact {...props}
                base_url={this.state.base_url} 
                api_url={this.state.api_url} 
              />} 
            />
            <Route path="/review" render={(props) => 
              <Review {...props}
                base_url={this.state.base_url} 
                api_url={this.state.api_url} 
              />} 
            />
            <Route path="/faq" render={(props) => 
              <FAQ {...props}
                base_url={this.state.base_url} 
                api_url={this.state.api_url} 
              />} 
            />
            <Route render={(props) =>
              <NoMatch
                base_url={this.state.base_url} 
                api_url={this.state.api_url} 
              />}
            />
        </Switch>,
        <AboutArea key={"about"+this.state.path} base_url={this.state.base_url} api_url={this.state.api_url} path={this.state.path} />,
        <CTA key={"cta"+this.state.path} base_url={this.state.base_url} api_url={this.state.api_url} path={this.state.path} />,
        <Address key={"address"+this.state.path} base_url={this.state.base_url} api_url={this.state.api_url} path={this.state.path} />,
        <Footer key="footer"
          base_url={this.state.base_url} 
          api_url={this.state.api_url} 
        />
    ];
  }
}

export default Components;
