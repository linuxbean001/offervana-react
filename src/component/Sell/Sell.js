import React, { Component } from 'react';
import submit from '../../assets/img/submit-home.png';
import tap3 from '../../assets/img/tap3.png';
import sell from '../../assets/img/sell-home.png';
import logo from '../../assets/img/logo.png';
import videolink from '../../assets/video/Website_Loop_Compressed.mp4';
import bg from '../../assets/img/Offervana_difference_background.jpeg';
import Carousel from 'react-bootstrap/Carousel';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link , NavLink} from 'react-router-dom';
import ScrollAnimation from "react-animate-on-scroll";


const options = {
  items: 4,
};

class Sell extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      index: 0,
      direction: null,
      demo: '',
      submit: '',
      videoStatus: false,
    };
  }
  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  playVideo = () => {
    this.setState({
      videoStatus: !this.state.videoStatus
    })
  }

  pauseVideo = () => {
    console.log('pause');

  }
  render() {
    const { index, direction } = this.state;
    return (
      <div>
        <section className="big-background">
          <article>
            <div className="hero-content">
              <h1>Get Multiple Offers On Your Home</h1>
              <h3>Instant Cash Buyers Compete, You Win</h3>

              <div className="hero-main-form">
                <form role="search" method="get" action="#">
                  <div className="hero-sign-in-wrap">
                    <input placeholder="Enter Your Address" tabIndex="101" type="text" defaultValue={this.state.demo} name="" id="hero-sign-in-input" />
                    <button tabIndex="102" type="submit" id="hero-sign-in-submit" defaultValue={this.state.submit}>
                      get Offers
                            </button>
                  </div>
                </form>
              </div>
            </div>
          </article>
          <video id="video-background" loop autoPlay>
            <source src={videolink} type="video/mp4" />
            <source src={videolink} type="video/ogg" />
            Your browser does not support the video tag.
                    </video>
        </section>
        <div className="video-popup-main">
          <div className="video-main-inner">
            <div className="middle-video">
              <Link className="middle-video__play" to={'/'}><i className="fa fa-play-circle" onClick={this.playVideo}></i> Press Play To Learn More</Link>
            </div>

            {this.state.videoStatus ? <div className="middle-video-2  middle-video__overlay middle-video__overlay--active">
              <Link className="middle-video__close" to={'/'} onClick={this.playVideo}></Link>
              <iframe className="player" type="text/html" width="100%" height="100%"
                src="https://www.youtube.com/embed/OFNr_KX5rNo?enablejsapi=1&amp;html5=1"
                frameBorder="0" />
            </div> : ''}
            {/* <div className="middle-video__overlay">
              <div className="middle-video__modal">
                <Link className="middle-video__close" to={'/'}>Close</Link>
                {/* <div className="fluid-width-video-wrapper" style={{ "paddingTop": "49.6667%" }}><iframe allowScriptAccess='always' id="middle-video-video" className="hero__player" src="https://www.youtube.com/embed/OFNr_KX5rNo?enablejsapi=1&amp;html5=1" frameBorder="0" webkitallowFullScreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
                </div> }
              </div>
              {this.state.videoStatus ?  <div className="middle-video-2">
                  <iframe className="player" type="text/html" width="100%" height="100%"
                    src="https://www.youtube.com/embed/OFNr_KX5rNo?enablejsapi=1&amp;html5=1"
                    frameBorder="0" />
                </div>: ''}
            </div> */}
          </div>
        </div>
        <ScrollAnimation
          animateIn="bounceInLeft"
          animateOut="bounceInLeft"
          animateOnce="true"
        >
        <section id="sell-home-main">
          <div className="container">
            <div className="section-title">
              <h2>The Modern Way to Sell Your Home!</h2>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <div className="sell-home-box wow bounceInUp animated animated" style={{ "visibility": "visible", "animationName": "bounceInUp" }}>
                  <div className="sell-home-box-icon">
                    <img src={submit} />
                  </div>

                  <div className="sell-home-box-content">
                    <h3><NavLink to={'/submit'}>Submit</NavLink></h3>
                    <p>Complete your Home Survey and get all your iBuyer offers in one place.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="sell-home-box wow bounceInUp animated animated" style={{ "visibility": "visible", "animationName": "bounceInUp" }}>
                  <div className="sell-home-box-icon">
                    <img src={tap3} />
                  </div>
                  <div className="sell-home-box-content">
                    <h3><Link to={'/'}>Select</Link></h3>
                    <p>Easily review and choose the offer that's best for you with Offervana's Proprietary Multioffer Platform.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="sell-home-box wow bounceInUp animated animated" style={{ "visibility": "visible", "animationName": "bounceInUp" }}>
                  <div className="sell-home-box-icon">
                    <img src={sell} />
                  </div>
                  <div className="sell-home-box-content">
                    <h3><Link to={'/'}>Sell</Link></h3>
                    <p>It's simple, your terms your way.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </ScrollAnimation>
        <section id="difference-main" style={{ backgroundImage: "url(" + bg + ")" }} >
          <div className="parallax parallax--bg difference-bg"></div>

          <div className="container" >
            <div className="section-title mb-100">
              <h2>The Offervana Difference</h2>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-4">
              <ScrollAnimation
              animateIn="bounceInLeft"
              animateOut="bounceOutRight"
              animateOnce="true"
            >
                <div className="difference-main-inner">
                <div
                  className="difference-inner-box"
                  style={{
                    visibility: "visible",
                    animationName: "bounceInLeft"
                  }}
                >
                    <div className="difference-inner-box-head">
                      <h3>Traditional Home Sale</h3>
                    </div>
                    <ul>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i> Maximized sales price</li>
                      <li><i className="fa fa-minus-circle" aria-hidden="true"></i> Fiduciary representation</li>
                      <li><i className="fa fa-minus-circle" aria-hidden="true"></i> Uncertain sales time</li>
                      <li><i className="fa fa-minus-circle" aria-hidden="true"></i> Inconvenient lifestyle</li>
                      <li><i className="fa fa-minus-circle" aria-hidden="true"></i> Possible unqualified buyers</li>
                      <li><i className="fa fa-minus-circle" aria-hidden="true"></i> Hours of open houses</li>
                    </ul>
                  </div>
                </div>
                </ScrollAnimation>
              </div>
              
              <div className="col-md-4 col-sm-4">
              <ScrollAnimation
              animateIn="bounceInBottom"
              animateOut="bounceOutTop"
              animateOnce="true"
            >
                <div className="difference-main-inner offervana-differ">
                <div
                  className="difference-inner-box "
                  style={{
                    visibility: "visible",
                    animationName: "bounceInUp"
                  }}
                >
                    <div className="difference-inner-box-head">
                      <img src={logo} />
                    </div>
                    <ul>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i> Proprietary Multioffer Platform</li>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i> All your iBuyer offers in one place</li>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i> Agent offer and market trends</li>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i> Transparency of fees and net proceeds</li>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i> Side by side comparison</li>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i> Agent representation and negotiation for offer, inspection and closing</li>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i> Avoid hours of submissions</li>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i> Avoid countless text messages, emails, and phone calls from iBuyers and agents</li>
                    </ul>
                  </div>
                </div>
               </ScrollAnimation>
              </div>
              <div className="col-md-4 col-sm-4">
              <ScrollAnimation
              animateIn="bounceInLeft"
              animateOut="bounceOutRight"
              animateOnce="true"
            >
                <div className="difference-main-inner">
                <div
                  className="difference-inner-box"
                  style={{
                    visibility: "visible",
                    animationName: "bounceInRight"
                  }}
                >
                    <div className="difference-inner-box-head">
                      <h3>iBuyers</h3>
                    </div>
                    <ul>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i> Close on your timeline</li>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i> Sell with no showings, animal boarding or interruption of lifestyle</li>
                      <li><i className="fa fa-minus-circle" aria-hidden="true"></i> Hours of submitting your property and uploading photos to multiple websites</li>
                      <li><i className="fa fa-minus-circle" aria-hidden="true"></i> Countless text messages, emails, and phone calls from each company</li>
                      <li><i className="fa fa-minus-circle" aria-hidden="true"></i> Uncertain variable fees</li>
                    </ul>
                  </div>
                </div>
                </ScrollAnimation>+
              </div>
            </div>
          </div>
        </section>
        <section id="testi-slider">
          <div className="container">
            <div className="section-title">
              <h2>Seller Success Stories</h2>
              <h3>We think we’re great, but don’t take our word for it…</h3>
            </div>
            <div className="testi-slider-inner">
              <div className="wistia_responsive_padding" style={{ "position": "relative" }}>
                <div className="wistia_responsive_wrapper">
                  <div className="wistia_responsive_wrapper" style={{ "height": "100%", "left": "0", "position": "absolute", "top": "0", "width": "100%" }}>
                    <div className="wistia_embed wistia_async_9psytd8lbv videoFoam=true" style={{ "width": "640px", "height": "360px" }}>&nbsp;</div>
                  </div>
                </div>
              </div>
              
              <OwlCarousel margin={10} items={4} autoplay={false} loop={true}>
                <a href="#wistia_r0975pl060" className="item"><figure>
                  <img src="http://embed.wistia.com/deliveries/8b198685fb32851ddcec94241de0a8c2453b12fd.jpg?image_crop_resized=300x169" alt="Scott" />
                  <figcaption>Scott - Glendale, AZ</figcaption>
                </figure></a>
                <a href="#wistia_zr9k7afcoa" className="item"><figure>
                  <img src="http://embed.wistia.com/deliveries/03f6b49ddfb9cb4a0e0c02d356d8ac722c8dca14.jpg?image_crop_resized=300x169" alt="Rose" />
                  <figcaption>Rose - San Tan, AZ</figcaption>
                </figure></a>
                <a href="#wistia_2yiei4cjmj" className="item"><figure>
                  <img src="http://embed.wistia.com/deliveries/aacca2614a199e4f21df62a4eda0c58faa5f2bb5.jpg?image_crop_resized=300x169" alt="John" />
                  <figcaption>John &amp; Sonia - Chandler, AZ</figcaption>
                </figure></a>
                <a href="#wistia_r0975pl060" className="item"><figure>
                  <img src="http://embed.wistia.com/deliveries/8b198685fb32851ddcec94241de0a8c2453b12fd.jpg?image_crop_resized=300x169" alt="Scott" />
                  <figcaption>Scott - Glendale, AZ</figcaption>
                </figure></a>
                <a href="#wistia_zr9k7afcoa" className="item"><figure>
                  <img src="http://embed.wistia.com/deliveries/03f6b49ddfb9cb4a0e0c02d356d8ac722c8dca14.jpg?image_crop_resized=300x169" alt="Rose" />
                  <figcaption>Rose - San Tan, AZ</figcaption>
                </figure></a>
                <a href="#wistia_2yiei4cjmj" className="item">
                  <figure>
                    <img src="http://embed.wistia.com/deliveries/aacca2614a199e4f21df62a4eda0c58faa5f2bb5.jpg?image_crop_resized=300x169" alt="John" />
                    <figcaption>John &amp; Sonia - Chandler, AZ</figcaption>
                  </figure></a>
              </OwlCarousel>
            </div>
          </div>
        </section>
        <section id="testimonial4" className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
          <div className="carousel-inner" role="listbox">
            <Carousel  
              activeIndex={index}
              direction={direction}
              onSelect={this.handleSelect}
            >
              <Carousel.Item>
                <div className="testimonial4_slide">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpPHwHCPxb87EBVQDz1cLtAswBJnH7bgP3MogWUmnh2mXNKNLq" />
                  <div className="star-rating"> <span> <strong className="rating"></strong></span></div>
                  <h4>KellyDeLeon Sold a Single Family home in Spectrum, Gilbert, AZ.</h4>
                  <p>Selling our home within a very specific date window was a challenge Offervana was gracefully able to meet. This prevented us from having to pay for any unoccupied months as the home closed before another mortgage payment was to be due. Their actions reflected those of a well prepared professional which was important to us. We would recommend Offervana to our family and friends! We are very pleased to have chosen the right company to sell our house for cash quickly meeting our needs. On to the next chapter, thanks Offervana! </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="testimonial4_slide">
                  <img src="http://www.amir.org.rw/wp-content/uploads/2014/04/face03-2.jpg" />
                  <div className="star-rating"> <span> <strong className="rating"></strong></span></div>
                  <h4>dturensky Bought and sold a Single Family home in Coronado Ranch, Gilbert, AZ.</h4>
                  <p>Upon first talk with Keith at Offervana on the phone, I explained my expectations and I found someone who really understood my ideals in selling my home to an instant cash buyer so I could upgrade to a larger home. He got multiple offers on my house and sold quickly! In Keith and Offervana, I not only got perfect professional service but also in the end I made a friend, he is truly an exceptional person. And again, thank YOU Keith!! </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="testimonial4_slide">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG9DhLLgbVDq1TgkVt9p6UyO2oTi2TAyOE2HOErJV8OTzGlJkR" />
                  <div className="star-rating"> <span> <strong className="rating"></strong></span></div>
                  <h4>Sold a Single Family home in Queen Creek, AZ.</h4>
                  <p>The Offervana team was extremely helpful to me and my family in getting our house sold. We were in a difficult situation and Offervana was there every step of the way helping us and doing what we asked. I would recommend Offervana to anyone because of their work dedication and ethic.</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="testimonial4_slide">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG9DhLLgbVDq1TgkVt9p6UyO2oTi2TAyOE2HOErJV8OTzGlJkR" />
                  <div className="star-rating"> <span> <strong className="rating"></strong></span></div>
                  <h4>raygar.khailany Sold a Single Family home in North Mountain, Phoenix, AZ.</h4>
                  <p>The Offervana team used facts and a awesome system, I loved their multiple offer platform. I went from on the market for 120 days with no offers from another agent and switched to Offervana and then I received multiple offers instantly. They were professional and extremely responsive and delivered on everything from the start.</p>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <Link className="left carousel-control" to={"/testimonial4"} role="button" data-slide="prev">
            <span className="fa fa-chevron-left"></span>
          </Link>
          <Link className="right carousel-control" to={'/testimonial4'} role="button" data-slide="next">
            <span className="fa fa-chevron-right"></span>
          </Link>
        </section>
        <section id="platform-main" >
          <div className="parallax parallax--bg platform-bg"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-sm-6"></div>
              <div className="col-lg-4 col-sm-6">
              <ScrollAnimation
              animateIn="bounceInLeft"
              animateOut="bounceOutRight"
              animateOnce="true"
            >
                <div className="platform-main-inner">
                <div className="pltaform-main-content wow bounceInLeft animated animated" style={{ "visibility": "visible", "animationName": "bounceInLeft" }}>
                    <h2>The Multioffer Platform</h2>
                    <h3>Submit Your Home Survey for Instant Access</h3>
                    <Link to={'/'} className="normal-btn">Submit</Link>
                  </div>
                </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Sell;
