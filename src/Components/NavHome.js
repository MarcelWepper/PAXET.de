import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
import './Home.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Brand from'./Pics/brand.png';

class NavHome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);

  }

  componentDidUpdate(){
    if (this.state.collapse) {
      this.setState({
      collapse:false
      });

    }

  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }


  render() {
    return (
      <div>
        <MDBNavbar className="header" expand="md" fixed="top" scrolling transparent dark>
        <MDBNavbarBrand href="/#">
          <strong>PAXET - simplify your daily life!</strong>
        </MDBNavbarBrand>
        {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
        <MDBCollapse isOpen={this.state.collapse} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <AnchorLink className="NavbarItem" offset='60' href='#home'>Home</AnchorLink>
            </MDBNavItem>
            <MDBNavItem>
              <AnchorLink  className="NavbarItem" offset='60' href='#idee'>Idee</AnchorLink>
            </MDBNavItem>
            <MDBNavItem>
              <AnchorLink className="NavbarItem" offset='60' href='#team'>Team</AnchorLink>
            </MDBNavItem>
            <MDBNavItem>
              <AnchorLink className="NavbarItem" offset='60' href='#lösung'>Lösung</AnchorLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/location" >Paket-Hubs</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
        </MDBNavbar>
      </div>
    );
  }
}

export default NavHome;
