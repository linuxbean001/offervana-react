import React, { Component } from 'react';
import footerIcon from '../../assets/img/footer-logo.png';
import Jkrealty from '../../assets/img/jkrealty.png';
import Housewifi from '../../assets/img/housewifi.22badb52.png';
import Housing from '../../assets/img/housing-4.png';
import { Link } from 'react-router-dom'

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demo: '',
      submit: ''
    }
  }

  render() {
    return (
      <div>
        <footer id="footer" className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-logo">
                  <img src={footerIcon} />
                </div>
                <div className="row text-center">
                  <div className="footer-sign-in">
                    <form role="search" method="get" action="#">
                      <div className="footer-sign-in-wrap">
                        <input placeholder="Enter Your Address" tabIndex="101" type="text" defaultValue={this.state.demo} name="" id="footer-sign-in-input" />
                        <button tabIndex="102" type="submit" id="footer-sign-in-submit" value={this.state.submit}>
                          Get Offers
                                                </button>
                      </div>
                    </form>
                  </div>
                </div>
                <ul className="list-inline social_icon">
                  <li className="list-inline-item"><a href="https://www.facebook.com/Offervana/"><i className="fa fa-facebook"></i></a></li>
                  <li className="list-inline-item"><a href="https://www.instagram.com/offervana/"><i className="fa fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="fa fa-address-book"></i></a></li>
                </ul>
                <div className="copyright">
                  <ul className=" list-inline">
                    <li className="list-inline-item"><a href="about.html" className="nav-link">About Us</a></li>
                    <li className="list-inline-item"><a href="sell.html" className="nav-link">Sell</a></li>
                    <li className="list-inline-item"><a href="https://jkrealtyaz.com/join-the-team/" className="nav-link">Careers</a></li>
                    <li className="list-inline-item"><a href="contact.html" className="nav-link">Contact Us</a></li>
                    <li className="list-inline-item"><a href="media.html" className="nav-link">Media</a></li>
                    <li className="list-inline-item"><a href="faq.html" className="nav-link">FAQ</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <footer className="">
          <div className="container">
            <div className="row copy_right_row">
              <div className="col-md-12">
                <ul className="list-inline text-center footer-last">
                  <li className="list-inline-item">
                    <p>Offervana is Powered by</p>
                  </li>
                  <li className="list-inline-item">
                  <a href="https://jkrealtyaz.com/" className="nav-link"> <img src={Jkrealty} /></a>
                   
                  </li>
                  <li className="list-inline-item">
                    <img src={Housewifi} />
                  </li>
                  <li className="list-inline-item">
                    <p>Terms of use and privacy</p>
                  </li>
                  <li className="list-inline-item">
                    <img src={Housing} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
export default Footer;
