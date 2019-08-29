import React, { Component } from 'react';
import sold from '../../assets/img/sold.jpeg';

class Sold extends Component {
  render() {
    return (
      <div>
        <section id="content-banner" className="content-image" style={{ backgroundImage: "url(" +sold + ")","backgroundPosition": "10%"}}>
        <div className="container">
            <div className="row">
                <div className="col-md-6 content-banner-inner">
                    <h2>Sell</h2>
                    <h4>The Modern Way</h4>
                </div>
            </div>
        </div>
    </section>
    
    <section id="sell-home-main">
        <div className="container">
            <div className="section-title">
                <h2>The Modern Way to Sell Your Home</h2>
            </div>
            <div className="row">
                <div className="offset-md-2 col-md-8 col-sm-12">
                    <div className="sell-home-box wow bounceInUp animated animated" style={{"visibility": "visible", "animationName": "bounceInUp"}}>
                        <div className="sell-home-box-icon">
                            <img src="http://www.offervana.com/images/Sell/Soldsign.png"/>
                        </div>

                        <div className="sell-home-box-content">
                            <h4>Fast, easy and transparent</h4>
                            <p>Avoid the stress and uncertainty of the traditional home sale process, without sacrificing your hard earned equity. With Offervana, ibuyers compete, and you win!</p>
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
                    
                    <h2 classNameName="survey">Enter Your address to start the Home Survey</h2>
                    
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
export default Sold;