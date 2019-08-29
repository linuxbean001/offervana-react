import React, { Component } from 'react';
import multioffer from '../../assets/img/multioffer.jpg';
import select1 from '../../assets/img/select-icon1.png';
import select2 from '../../assets/img/select-icon2.png';
import select3 from '../../assets/img/select-icon3.png';
import bg from '../../assets/img/Offervana_difference_background.jpeg';

class Select extends Component {
  render() {
    return (
      <div>
        <section id="content-banner" className="multioffer" style={{backgroundImage: "url(" + multioffer + ")","backgroundPositionY": "0%"}}>
        
        <div className="container">
            <div className="row">
                <div className="col-md-6 content-banner-inner">
                    <h2>Select</h2>
                    <h4>Pick the best offer for you!</h4>
                </div>
            </div>
        </div>
    </section>
    
    <section id="sell-home-main">
        <div className="container">
            <div className="section-title">
                <h2>Multioffer Platform</h2>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-4">
                    <div className="sell-home-box wow bounceInUp animated animated" style={{"visibility": "visible", "animationName": "bounceInUp"}}>
                        <div className="sell-home-box-icon">
                            <img src={select1}/>
                        </div>

                        <div className="sell-home-box-content">
                            <h4>24/7 Online Access</h4>
                            <p>After you complete your Home Survey, you'll have instant access to the Multioffer Platform. It typically takes 1-3 business days to recieve all your offers, as well your offer from our local real estate service provider.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-4">
                    <div className="sell-home-box wow bounceInUp animated animated" style={{"visibility": "visible", "animationName": "bounceInUp"}}>
                        <div className="sell-home-box-icon">
                            <img src={select2}/>
                        </div>

                        <div className="sell-home-box-content">
                            <h4>Compare Your Offers</h4>
                            <p>The Multioffer Platform allows you to quickly decipher dozens of different data points such as offer price, terms, closing costs and fees, in a side by side comparison view. See all your offers in one place.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-4">
                    <div className="sell-home-box wow bounceInUp animated animated" style={{"visibility": "visible", "animationName": "bounceInUp"}}>
                        <div className="sell-home-box-icon">
                            <img src={select3}/>
                        </div>

                        <div className="sell-home-box-content">
                            <h4>Accept the BEST Offer</h4>
                            <p>Choosing the best offer is not only quick and easy, but transparent too. Every offer has an expiration date, so if you see one you like, click "Accept" and we'll get the paperwork right over. The Multioffer Platform allows you to accept the best offer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section id="comparison-main" style={{ backgroundImage: "url(" + bg + ")","backgroundPositionY": "70%" }}>
        {/* <div className="parallax parallax--bg comparison-bg"></div> */}
        <div className="container">
            <div className="comparison-main-inner">
                <h2>Side By Side Comparison</h2>
                <h4>Offervana's Multioffer Platform makes comparing your ibuyers offers quick and easy, but you may have questions about the process or what offer is best for you. We're here to help. Fill out our form and we'll get right back to you.</h4>
                
                <a href="#" className="normal-btn">let's connect</a>
            </div>
        </div>
    </section>
    

    <footer id="footer" className="text-center">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    
                    <h2 className="survey">Enter Your address to start the Home Survey</h2>
                    
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
export default Select;