import React, { Component } from 'react';
import couple from '../../assets/img/coupletalking.png';
import icon1 from '../../assets/img/submit-icon1.png';
import icon2 from '../../assets/img/submit-icon2.png';
import icon3 from '../../assets/img/submit-icon3.png';

 class Submit extends Component {
  render() {
    return (
      <div>
        <section id="content-banner" className="couple" style={{backgroundImage: "url(" + couple + ")","backgroundPosition": "70%"}}>
        <div className="container">
            <div className="row">
                <div className="col-md-6 content-banner-inner">
                    <h2>Submit</h2>
                    <h4>Get the HIGHEST cash offer on your home</h4>
                </div>
            </div>
        </div>
        </section>
    
    <section id="sell-home-main">
        <div className="container">
            <div className="section-title">
                <h2>Home Survey</h2>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-4">
                    <div className="sell-home-box wow bounceInUp animated animated" style={{"visibility": "visible", "animationName": "bounceInUp "}}>
                        <div className="sell-home-box-icon">
                            <img src={icon1}/>
                        </div>

                        <div className="sell-home-box-content">
                            <h4>Survey Questions</h4>
                            <p>The survey asks questions about your home's size, age, amenities, and condition. Most surveys are completed in 10 minutes or less</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-4">
                    <div className="sell-home-box wow bounceInUp animated animated" style={{"visibility": "visible", "animationName": "bounceInUp "}}>
                        <div className="sell-home-box-icon">
                            <img src={icon2}/>
                        </div>

                        <div className="sell-home-box-content">
                            <h4>Upload Pictures</h4>
                            <p>During the Home Survey, our photo uploader will walk you through the process to upload your photos. Pictures allow us to get the highest possible offer!</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-4">
                    <div className="sell-home-box wow bounceInUp animated animated" style={{"visibility": "visible", "animationName": "bounceInUp "}}>
                        <div className="sell-home-box-icon">
                            <img src={icon3}/>
                        </div>

                        <div className="sell-home-box-content">
                            <h4>Instant Access</h4>
                            <p>Once you complete your Home Survey for instant access to the Multioffer Platform. Within 48-72 hours you'll be able to see the offers in your Multioffer Platform.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer id="footer" className="text-center">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    
                    <h2 className="survey">Ready to get multiple instant cash offers on your home?</h2>
                    
                    <div className="row text-center">
                        <div className="footer-sign-in">
                            <form role="search" method="get" action="#">
                                <div className="footer-sign-in-wrap">
                                    <input placeholder="Enter Your Address" tabIndex="101" type="text" defaultValue="" name="" id="footer-sign-in-input"/>
                                    <button tabIndex="102" type="submit" id="footer-sign-in-submit" value="Submit">
                                        Get Offers
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
      </div>
    )
  }
}
export default Submit;
