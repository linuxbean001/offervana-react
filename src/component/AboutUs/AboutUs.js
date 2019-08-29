import React, { Component } from 'react'
import bg from '../../assets/img/Offervana_difference_background.jpeg';
import { Link } from 'react-router-dom';
import kala from '../../assets/img/Kala.7180db9a.jpg';
import jason from '../../assets/img/Jason.96e42184.jpg'
import eliot from '../../assets/img/Eliot.a751b4a2.jpg';
import keith from '../../assets/img/Keith.52cf3c2d.jpg';

class AboutUs extends Component {
  render() {
    return (
      <div>
        <section id="inner-page-banner" style={{ backgroundImage: "url(" + bg + ")", "backgroundPositionY": "70%" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="inner-page-banner-content">
                  <h2 className="innerpage-about">About Us</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="our-team-main">
          <div className="container">
            <div className="section-title">
              <h2>Meet Our Team</h2>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Consect petur adipiscing elit.</p>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="profile_card wow bounceInUp animated animated" style={{ "visibility": "visible", "animationName": "bounceInUp" }}>
                  <div className="profile_inner">
                    <div className="profile_img">
                      <img src={kala} alt="Profile image" />
                    </div>
                    <div className="over_layer">
                      <p>Having cutting her teeth on thousands of home sales, Kala started JK Realty where she serves as designated broker. Kala obsesses about creating technology, like Offervana, that empowers the consumer. In her spare time, Kala loves speaking, hiking and spending time with her family and Yorkies.</p>
                    </div>
                  </div>
                  <div className="our-team-box-head profile_contact">
                    <h3>Kala Laos<span>CEO/FOUNDER</span>
                    </h3>
                    <ul className="list-inline social_icon">
                      <li className="list-inline-item"><Link to={'/'}><i className="fa fa-facebook-square"></i></Link></li>
                      <li className="list-inline-item"><Link to={'/'}><i className="fa fa-instagram"></i></Link></li>
                      <li className="list-inline-item"><Link to={'/'}><i className="fa fa-linkedin-square"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="profile_card wow bounceInUp animated animated" style={{ "visibility": "visible", "animationName": "bounceInUp" }}>
                  <div className="profile_inner">
                    <div className="profile_img">
                      <img src={jason} alt="Profile image" />
                    </div>
                    <div className="over_layer">
                      <p>Winner, family man, technology nut, and social media enthusiast. #1 WIN I work everyday with my best friend and wife Kala. #2 WIN We parent 2 of the most amazing kids in the world. #3 WIN Together we sell a lot of homes. #4 WIN We do it to make a positive impact in others lives, give glory to our creator, and squeeze all the juice out of this 1 life. #5 WIN Connecting with you. Hit me up.</p>
                    </div>
                  </div>
                  <div className="our-team-box-head profile_contact">
                    <h3>Jason Laos<span>CMO/FOUNDER</span>
                    </h3>
                    <ul className="list-inline social_icon">
                      <li className="list-inline-item"><Link to={'/'}><i className="fa fa-facebook-square"></i></Link></li>
                      <li className="list-inline-item"><Link to={'/'}><i className="fa fa-instagram"></i></Link></li>
                      <li className="list-inline-item"><Link to={'/'}><i className="fa fa-linkedin-square"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="profile_card wow bounceInUp animated animated" style={{ "visibility": "visible", "animationName": "bounceInUp" }}>
                  <div className="profile_inner">
                    <div className="profile_img">
                      <img src={eliot} alt="Profile image" />
                    </div>
                    <div className="over_layer">
                      <p>Creative entrepreneur, family focused Dad, fitness and coffee lover. The nerd that thinks he is cool. Passionate and in mission of creating big ideas that help the community to achieve more together.</p>
                    </div>
                  </div>
                  <div className="our-team-box-head profile_contact">
                    <h3>Eliot Tomaszewski<span>COO/FOUNDER</span>
                    </h3>
                    <ul className="list-inline social_icon">
                      <li className="list-inline-item"><Link to={'/'}><i className="fa fa-facebook-square"></i></Link></li>
                      <li className="list-inline-item"><Link to={'/'}><i className="fa fa-instagram"></i></Link></li>
                      <li className="list-inline-item"><Link to={'/'}><i className="fa fa-linkedin-square"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="profile_card wow bounceInUp animated animated" style={{ "visibility": "visible", "animationName": "bounceInUp" }}>
                  <div className="profile_inner">
                    <div className="profile_img">
                      <img src={keith} alt="Profile image" />
                    </div>
                    <div className="over_layer">
                      <p>Forward thinking visionary that sees the wave of the future in Real Estate. Dedicated to creating technology to empower the consumer and revolutionize the industry on how consumers buy and sell homes. Besides spending time with my wife, dogs &amp; cats, muscle cars and spicy food are my thing!</p>
                    </div>
                  </div>
                  <div className="our-team-box-head profile_contact">
                    <h3>Keith Howard<span>CSO/FOUNDER</span>
                    </h3>
                    <ul className="list-inline social_icon">
                      <li className="list-inline-item"><Link to={'/'}><i className="fa fa-facebook-square"></i></Link></li>
                      <li className="list-inline-item"><Link to={'/'}><i className="fa fa-instagram"></i></Link></li>
                      <li className="list-inline-item"><Link to={'/'}><i className="fa fa-linkedin-square"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default AboutUs;
