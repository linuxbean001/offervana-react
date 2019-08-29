import React, { Component } from 'react';
import Logo from '../../assets/img/logo.png';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demo: '',
      isTop: true,
      isOpen: false
    }
  }
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 200;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });
  }
 handleOpen = () =>{
   console.log('xxxxx');
   
   this.setState ({
     isOpen:true
   })
 }
 handleClose = () =>{
   this.setState({
     isOpen:false
   })
 }
  render() {
    return (
      <div>
        <header className={(this.state.isTop ? 'navigation' : 'navigation sticky offset scrolling')} id="sticky-nav">
          <div className="container-fluid">
            <div className="top-logo">
              <a href="index.html"><img src={Logo} /></a>
            </div>
            <div className="nav-sign-in-wrap">
              <input placeholder="Enter Your Address" tabIndex="101" type="text" defaultValue={this.state.demo} name="" id="nav-sign-in-input" />
              <button tabIndex="102" type="submit" id="nav-sign-in-submit" defaultValue="Submit">
                get Offers
                                </button>
            </div>
            <nav id='cssmenu' className="navigation">
              <Navbar expand="lg">
                <Navbar>
                  <div className="navbar-brand">
                  </div>
                </Navbar>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                  </Nav>
                  <Nav id="menu-main-menu">
                    <Nav><Link to={'/'} className="nav-link">Sell </Link></Nav>
                    
                    <Nav><Link to={'/faq'} className="nav-link">FAQ</Link></Nav>
                    <Nav><Link to={'/about'} className="nav-link">About Us</Link></Nav>
                    <NavDropdown onMouseEnter={this.handleOpen} onMouseLeave={this.handleClose} open={this.state.isOpen} nocaretid="language-switcher-container" title="More" id="collasible-nav-dropdown" className="nav-link">
                      <NavDropdown.Item href={'/msg'}>Messages</NavDropdown.Item>
                      <NavDropdown.Item href={'/careers'}>Careers</NavDropdown.Item>
                      <NavDropdown.Item href={'/media'}>Media</NavDropdown.Item>
                    </NavDropdown>
                    <Nav >
                      <Button variant="outline-primary" className="navbar-login">
                        <Link to={'/login'} className="nav-link">Login</Link>
                      </Button>
                    </Nav>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </nav>
          </div>
        </header>
      </div>
    )
  }
}
export default Header;