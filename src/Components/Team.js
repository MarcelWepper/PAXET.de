import React from "react";
import LazyHero from "react-lazy-hero";
import CookieConsent from "react-cookie-consent";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "reactstrap";
import {
  MDBAnimation,
  MDBBtn,
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
  MDBIcon,
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBTable,
  MDBTableBody,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink
} from "mdbreact";
import { connect } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

import Marcel from "./Pics/marcel.png";
import Oli from "./Pics/Oli.jpeg";
import Thomas from "./Pics/Thomas.jpeg";

class Team extends React.Component {
  // Scroll to top when changing sites

  componentWillUnmount() {
    window.scrollTo(0, 0);
  }

  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.props.dispatch({ type: "NAVHOME" });
    if (this.state.collapse) {
      this.setState({
        collapse: !this.state.collapse
      });
    }
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div className="Home Background">
        <div>
          <MDBNavbar
            className="header"
            expand="md"
            fixed="top"
            scrolling
            transparent
            dark
          >
            <MDBNavbarBrand href="/#">
              <a style={{ color: "white" }} href="/team">
                <strong>PAXET - Team</strong>
              </a>
            </MDBNavbarBrand>
            {!this.state.isWideEnough && (
              <MDBNavbarToggler onClick={this.onClick} />
            )}
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/endkunde">Endkunde</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/pakethub">Pakethubs</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/paketdienstleister">
                    Paketdienstleister
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem active>
                  <MDBNavLink to="/team">Team</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </div>
        {/* Hero-Image newes Version*/}
        <LazyHero
          color="#ffffff"
          minHeight="35vh"
          style={{ background: "#ffffff" }}
        >
          <MDBContainer className="Jumbotron3" fluid no-gutters>
            <MDBRow no-gutters>
              <MDBCol size="12">
                <h1
                  style={{
                    "padding-bottom": "1%",
                    "padding-top": "1%",
                    fontSize: "2em"
                  }}
                >
                  <b>
                    {" "}
                    Gemeinsam mit Dir lösen wir die Probleme der
                    Paketzustellung!
                  </b>
                </h1>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </LazyHero>

        <MDBContainer className="Jumbotron" fluid no-gutters>
          <div
            style={{
              "padding-bottom": "0px",
              fontSize: "1em"
            }}
          >
            <MDBRow
              style={{
                "padding-left": "10%",
                "padding-top": "2.5%",
                "padding-bottom": "2.5%",
                "padding-right": "10%"
              }}
            >
              <MDBCol size="lg" md="12" sm="12" className="align-self-left">
                <div style={{ "text-align": "left" }}>
                  <h2
                    style={{
                      "padding-bottom": "1.5%",
                      "padding-top": "2%"
                    }}
                  >
                    <b>Wir sehen es als unsere Aufgabe an…</b>
                  </h2>
                  <h3
                    style={{
                      "padding-bottom": "2.5%",
                      fontSize: "2em"
                    }}
                  >
                    …die wachsende Anzahl an Zustellproblemen zu minimieren{" "}
                    <br />
                    <br />
                    …die überforderten Paketboten zu entlasten <br />
                    <br />
                    …das durch die Lieferwägen entstehende Verkehrsaufkommen und
                    somit die Umweltbelastung zu reduzieren.
                  </h3>
                </div>
              </MDBCol>
            </MDBRow>
          </div>

          <MDBRow
            className="Sup1"
            style={{
              "padding-top": "5%",
              display: "flex"
            }}
          >
            <MDBCol size="12">
              <h1>
                <b>Ein Team mit einer gemeinsamen Leidenschaft: PAXET</b>
              </h1>
            </MDBCol>
          </MDBRow>

          <MDBRow
            className="Sup2"
            style={{
              background: "#7A1429",
              "padding-top": "4%",
              "padding-left": "2.5%",
              "padding-right": "2.5%"
            }}
          >
            <MDBCol
              size="lg"
              md="12"
              sm="12"
              className="align-self-center"
              style={{
                fontSize: "0.3em",
                "padding-left": "0.5%",
                "padding-right": "0.5%"
              }}
            >
              <MDBTable borderless responsive>
                <MDBTableBody>
                  <div>
                    <tr className="d-flex justify-content-center">
                      <td className="align-top">
                        <img src={Thomas} className="img-fluid" alt="" />
                      </td>
                    </tr>
                    <tr className="d-flex justify-content-center">
                      <td>
                        <h2
                          style={{
                            "padding-bottom": "5%",
                            color: "white",
                            fontSize: "2em"
                          }}
                        >
                          Thomas Göbbel, CEO
                        </h2>
                      </td>
                    </tr>
                  </div>
                </MDBTableBody>
              </MDBTable>
            </MDBCol>
            <MDBCol
              size="lg"
              md="12"
              sm="12"
              className="align-self-top"
              style={{
                fontSize: "0.3em",
                "padding-left": "0.5%",
                "padding-right": "0.5%"
              }}
            >
              <MDBTable borderless responsive>
                <MDBTableBody>
                  <div>
                    <tr className="d-flex justify-content-center">
                      <td className="align-top">
                        <img src={Oli} className="img-fluid" alt="" />
                      </td>
                    </tr>
                    <tr className="d-flex justify-content-center">
                      <td>
                        <h2
                          style={{
                            "padding-bottom": "5%",
                            color: "white",
                            fontSize: "2em"
                          }}
                        >
                          Oliver Göbbel, COO
                        </h2>
                      </td>
                    </tr>
                  </div>
                </MDBTableBody>
              </MDBTable>
            </MDBCol>
            <MDBCol
              size="lg"
              md="12"
              sm="12"
              className="align-self-top"
              style={{
                fontSize: "0.3em",
                "padding-left": "0.5%",
                "padding-right": "0.5%"
              }}
            >
              <MDBTable borderless responsive>
                <MDBTableBody>
                  <div>
                    <tr className="d-flex justify-content-center">
                      <td className="align-top">
                        <img src={Marcel} className="img-fluid" alt="" />
                      </td>
                    </tr>
                    <tr className="d-flex justify-content-center">
                      <td>
                        <h2
                          style={{
                            "padding-bottom": "5%",
                            color: "white",
                            fontSize: "2em"
                          }}
                        >
                          Marcel-René Wepper, CTO
                        </h2>
                      </td>
                    </tr>
                  </div>
                </MDBTableBody>
              </MDBTable>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer
          className="Jumbotron"
          fluid
          no-gutters
          style={{
            "padding-bottom": "2.5%",
            "padding-top": "2.5%"
          }}
        >
          <MDBRow no-gutters>
            <MDBCol size="12">
              <h2
                style={{
                  "padding-bottom": "1%",
                  "padding-top": "1%",
                  fontSize: "2em"
                }}
              >
                <b>Kontaktieren Sie uns und werden Teil des Teams!</b>
              </h2>
            </MDBCol>
          </MDBRow>

          <MDBRow no-gutters>
            <MDBCol size="12">
              <MDBBtn
                style={{ "border-radius": "24px" }}
                rounded
                color="danger"
                href="mailto:hey@paxet.de"
              >
                Hier kontaktieren
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        {/*	Hier wird der Cookie und deren Parameter bestimmt	*/}
        <CookieConsent
          location="bottom"
          buttonText=<a href="">Akzeptieren.</a>
          cookieName="CookieConsent"
          acceptOnScroll={true}
          acceptOnScrollPercentage={10}
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          Diese Webseite benutzt Cookies, um die Benutzererfahrung zu
          verbessern. Indem Sie diese Website nutzen, erklären Sie sich mit
          dieser Verwendung einverstanden.
        </CookieConsent>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    home: state.home
  };
};
export default connect()(Team);
