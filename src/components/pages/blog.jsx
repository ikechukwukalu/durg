import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts.js';
import Banner from '../includes/banner.jsx';
import BlogRightSideBar from '../includes/blog-right-sidebar.jsx';

class Blog extends Component {
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
            <Banner text="Blog Page"  name="Blog"/>
            <section className="blog_area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-5 mb-lg-0">
                            <div className="blog_left_sidebar">
                                <article className="blog_item">
                                    <div className="blog_item_img">
                                        <img className="card-img rounded-0" src={this.state.base_url+"assets/images/blog/single_blog_1.png"} alt="" />
                                        <Link to="single-blog" className="blog_item_date">
                                            <h3>15</h3>
                                            <p>Jan</p>
                                        </Link>
                                    </div>

                                    <div className="blog_details">
                                        <Link className="d-inline-block" to="single-blog">
                                            <h2>Google inks pact for new 35-storey office</h2>
                                        </Link>
                                        <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                            he earth it first without heaven in place seed it second morning saying.</p>
                                        <ul className="blog-info-link">
                                            <li><Link to="single-blog"><i className="fa fa-user"></i> Travel, Lifestyle</Link></li>
                                            <li><Link to="single-blog"><i className="fa fa-comments"></i> 03 Comments</Link></li>
                                        </ul>
                                    </div>
                                </article>

                                <article className="blog_item">
                                    <div className="blog_item_img">
                                        <img className="card-img rounded-0" src={this.state.base_url+"assets/images/blog/single_blog_2.png"} alt="" />
                                        <Link to="single-blog" className="blog_item_date">
                                            <h3>15</h3>
                                            <p>Jan</p>
                                        </Link>
                                    </div>

                                    <div className="blog_details">
                                        <Link className="d-inline-block" to="single-blog">
                                            <h2>Google inks pact for new 35-storey office</h2>
                                        </Link>
                                        <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                            he earth it first without heaven in place seed it second morning saying.</p>
                                        <ul className="blog-info-link">
                                            <li><Link to="single-blog"><i className="fa fa-user"></i> Travel, Lifestyle</Link></li>
                                            <li><Link to="single-blog"><i className="fa fa-comments"></i> 03 Comments</Link></li>
                                        </ul>
                                    </div>
                                </article>

                                <article className="blog_item">
                                    <div className="blog_item_img">
                                        <img className="card-img rounded-0" src={this.state.base_url+"assets/images/blog/single_blog_3.png"} alt="" />
                                        <Link to="single-blog" className="blog_item_date">
                                            <h3>15</h3>
                                            <p>Jan</p>
                                        </Link>
                                    </div>

                                    <div className="blog_details">
                                        <Link className="d-inline-block" to="single-blog">
                                            <h2>Google inks pact for new 35-storey office</h2>
                                        </Link>
                                        <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                            he earth it first without heaven in place seed it second morning saying.</p>
                                        <ul className="blog-info-link">
                                            <li><Link to="single-blog"><i className="fa fa-user"></i> Travel, Lifestyle</Link></li>
                                            <li><Link to="single-blog"><i className="fa fa-comments"></i> 03 Comments</Link></li>
                                        </ul>
                                    </div>
                                </article>

                                <article className="blog_item">
                                    <div className="blog_item_img">
                                        <img className="card-img rounded-0" src={this.state.base_url+"assets/images/blog/single_blog_4.png"} alt="" />
                                        <Link to="single-blog" className="blog_item_date">
                                            <h3>15</h3>
                                            <p>Jan</p>
                                        </Link>
                                    </div>

                                    <div className="blog_details">
                                        <Link className="d-inline-block" to="single-blog">
                                            <h2>Google inks pact for new 35-storey office</h2>
                                        </Link>
                                        <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                            he earth it first without heaven in place seed it second morning saying.</p>
                                        <ul className="blog-info-link">
                                            <li><Link to="single-blog"><i className="fa fa-user"></i> Travel, Lifestyle</Link></li>
                                            <li><Link to="single-blog"><i className="fa fa-comments"></i> 03 Comments</Link></li>
                                        </ul>
                                    </div>
                                </article>

                                <article className="blog_item">
                                    <div className="blog_item_img">
                                        <img className="card-img rounded-0" src={this.state.base_url+"assets/images/blog/single_blog_5.png"} alt="" />
                                        <Link to="single-blog" className="blog_item_date">
                                            <h3>15</h3>
                                            <p>Jan</p>
                                        </Link>
                                    </div>

                                    <div className="blog_details">
                                        <Link className="d-inline-block" to="single-blog">
                                            <h2>Google inks pact for new 35-storey office</h2>
                                        </Link>
                                        <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                            he earth it first without heaven in place seed it second morning saying.</p>
                                        <ul className="blog-info-link">
                                            <li><Link to="single-blog"><i className="fa fa-user"></i> Travel, Lifestyle</Link></li>
                                            <li><Link to="single-blog"><i className="fa fa-comments"></i> 03 Comments</Link></li>
                                        </ul>
                                    </div>
                                </article>

                                <nav className="blog-pagination justify-content-center d-flex">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <Link to="blog" className="page-link" aria-label="Previous">
                                                <i className="ti-angle-left"></i>
                                            </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link to="blog" className="page-link">1</Link>
                                        </li>
                                        <li className="page-item active">
                                            <Link to="blog" className="page-link">2</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link to="blog" className="page-link" aria-label="Next">
                                                <i className="ti-angle-right"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <BlogRightSideBar base_url={this.state.base_url} api_url={this.state.api_url} />
                    </div>
                </div>
            </section>
            <Scripts />
        </Fragment>
    );
  }
}

export default Blog;