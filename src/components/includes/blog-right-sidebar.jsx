import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

class BlogRightSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url
    }
  }
  
  render() {
    return (
      <div className="col-lg-4">
          <div className="blog_right_sidebar">
              <aside className="single_sidebar_widget search_widget">
                  <form action="#">
                      <div className="form-group">
                          <div className="input-group mb-3">
                              <input type="text" className="form-control" placeholder='Search Keyword' />
                              <div className="input-group-append">
                                  <button className="btn" type="button"><i className="ti-search"></i></button>
                              </div>
                          </div>
                      </div>
                      <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                          type="submit">Search</button>
                  </form>
              </aside>

              <aside className="single_sidebar_widget post_category_widget">
                  <h4 className="widget_title">Category</h4>
                  <ul className="list cat-list">
                      <li>
                          <Link to="blog" className="d-flex">
                              <p>Resaurant food</p>
                              <p>(37)</p>
                          </Link>
                      </li>
                      <li>
                          <Link to="blog" className="d-flex">
                              <p>Travel news</p>
                              <p>(10)</p>
                          </Link>
                      </li>
                      <li>
                          <Link to="blog" className="d-flex">
                              <p>Modern technology</p>
                              <p>(03)</p>
                          </Link>
                      </li>
                      <li>
                          <Link to="blog" className="d-flex">
                              <p>Product</p>
                              <p>(11)</p>
                          </Link>
                      </li>
                      <li>
                          <Link to="blog" className="d-flex">
                              <p>Inspiration</p>
                              <p>21</p>
                          </Link>
                      </li>
                      <li>
                          <Link to="blog" className="d-flex">
                              <p>Health Care (21)</p>
                              <p>09</p>
                          </Link>
                      </li>
                  </ul>
              </aside>

              <aside className="single_sidebar_widget popular_post_widget">
                  <h3 className="widget_title">Recent Post</h3>
                  <div className="media post_item">
                      <img src={this.state.base_url+"assets/images/post/post_1.png"} alt="post" />
                      <div className="media-body">
                          <Link to="single-blog">
                              <h3>From life was you fish...</h3>
                          </Link>
                          <p>January 12, 2019</p>
                      </div>
                  </div>
                  <div className="media post_item">
                      <img src={this.state.base_url+"assets/images/post/post_2.png"} alt="post" />
                      <div className="media-body">
                          <Link to="single-blog">
                              <h3>The Amazing Hubble</h3>
                          </Link>
                          <p>02 Hours ago</p>
                      </div>
                  </div>
                  <div className="media post_item">
                      <img src={this.state.base_url+"assets/images/post/post_3.png"} alt="post" />
                      <div className="media-body">
                          <Link to="single-blog">
                              <h3>Astronomy Or Astrology</h3>
                          </Link>
                          <p>03 Hours ago</p>
                      </div>
                  </div>
                  <div className="media post_item">
                      <img src={this.state.base_url+"assets/images/post/post_4.png"} alt="post" />
                      <div className="media-body">
                          <Link to="single-blog">
                              <h3>Asteroids telescope</h3>
                          </Link>
                          <p>01 Hours ago</p>
                      </div>
                  </div>
              </aside>
              <aside className="single_sidebar_widget tag_cloud_widget">
                  <h4 className="widget_title">Tag Clouds</h4>
                  <ul className="list">
                      <li>
                          <Link to="blog">project</Link>
                      </li>
                      <li>
                          <Link to="blog">love</Link>
                      </li>
                      <li>
                          <Link to="blog">technology</Link>
                      </li>
                      <li>
                          <Link to="blog">travel</Link>
                      </li>
                      <li>
                          <Link to="blog">restaurant</Link>
                      </li>
                      <li>
                          <Link to="blog">life style</Link>
                      </li>
                      <li>
                          <Link to="blog">design</Link>
                      </li>
                      <li>
                          <Link to="blog">illustration</Link>
                      </li>
                  </ul>
              </aside>


              <aside className="single_sidebar_widget instagram_feeds">
                  <h4 className="widget_title">Instagram Feeds</h4>
                  <ul className="instagram_row flex-wrap">
                      <li>
                          <Link to="blog">
                              <img className="img-fluid" src={this.state.base_url+"assets/images/post/post_5.png"} alt="" />
                          </Link>
                      </li>
                      <li>
                          <Link to="blog">
                              <img className="img-fluid" src={this.state.base_url+"assets/images/post/post_6.png"} alt="" />
                          </Link>
                      </li>
                      <li>
                          <Link to="blog">
                              <img className="img-fluid" src={this.state.base_url+"assets/images/post/post_7.png"} alt="" />
                          </Link>
                      </li>
                      <li>
                          <Link to="blog">
                              <img className="img-fluid" src={this.state.base_url+"assets/images/post/post_8.png"} alt="" />
                          </Link>
                      </li>
                      <li>
                          <Link to="blog">
                              <img className="img-fluid" src={this.state.base_url+"assets/images/post/post_9.png"} alt="" />
                          </Link>
                      </li>
                      <li>
                          <Link to="blog">
                              <img className="img-fluid" src={this.state.base_url+"assets/images/post/post_10.png"} alt="" />
                          </Link>
                      </li>
                  </ul>
              </aside>


              <aside className="single_sidebar_widget newsletter_widget">
                  <h4 className="widget_title">Newsletter</h4>

                  <form action="#">
                      <div className="form-group">
                          <input type="email" className="form-control"  placeholder='Enter email' required />
                      </div>
                      <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                          type="submit">Subscribe</button>
                  </form>
              </aside>
          </div>
      </div>
    );
  }
}

export default BlogRightSideBar;
