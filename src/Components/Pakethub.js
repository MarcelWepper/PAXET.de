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

import Schild from "./Pics/schild.png";
import Screen1 from "./Pics/Screen1.png";
import Screen2 from "./Pics/Screen2.png";
import App from "./Pics/app.png";
import Play from "./Pics/play.png";

import S1 from "./Pics/symbols/1.png";
import S2 from "./Pics/symbols/2.png";
import S3 from "./Pics/symbols/3.png";
import S4 from "./Pics/symbols/4.png";
import S5 from "./Pics/symbols/5.png";
import S6 from "./Pics/symbols/6.png";
import S7 from "./Pics/symbols/7.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

class Pakethub extends React.Component {
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
            <MDBNavbarBrand>
              <a style={{ color: "white" }} href="/pakethub">
                <strong>PAXET - Pakethub</strong>
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
                <MDBNavItem active>
                  <MDBNavLink to="/pakethub">Pakethubs</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/paketdienstleister">
                    Paketdienstleister
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/team">Team</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </div>
        {/* Hero-Image newes Version*/}
        <LazyHero
          color="#ffffff"
          minHeight="50vh"
          style={{ background: "#ffffff" }}
        >
          <MDBContainer className="Jumbotron3" fluid no-gutters>
            <MDBRow no-gutters>
              <MDBCol size="12">
                <h1
                  style={{
                    padding: "1%",
                    fontSize: "2em"
                  }}
                >
                  <b>
                    {" "}
                    Profitiere mit PAXET durch die Paketannahme für deine
                    Nachbarn mit nur einer Registrierung -
                    <br />
                    als PAXET-Pakethub!
                  </b>
                </h1>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </LazyHero>

        <MDBContainer className="Jumbotron3" fluid no-gutters>
          <MDBRow no-gutters>
            <MDBCol size="12">
              <h1
                style={{
                  "padding-bottom": "1%",
                  "padding-top": "1%",
                  "padding-left": "4%",
                  "padding-right": "4%",
                  fontSize: "3em"
                }}
              >
                <br />
                In wenigen Schritten zum PAXET-Pakethub
              </h1>
            </MDBCol>
          </MDBRow>
          <MDBRow
            no-gutters
            style={{
              "padding-left": "15%",
              "padding-right": "15%",
              minHeight: "15vh"
            }}
          >
            <MDBCol lg="1" md="12" sm="12" className="align-self-right">
              <img src={S1} className="img-fluid" alt="" />
            </MDBCol>
            <MDBCol
              lg="11"
              md="12"
              sm="12"
              className="align-self-left"
              style={{ "padding-bottom": "5%" }}
            >
              <h2
                style={{
                  "padding-top": "2%",
                  "padding-bottom": "2%"
                }}
              >
                Registriere dich als PAXET-Pakethub
              </h2>
              <MDBBtn
                style={{ "border-radius": "24px" }}
                rounded
                color="danger"
                href="https://docs.google.com/forms/d/e/1FAIpQLSftFlx9AEQ0E_T1E_PZBZOlOXd8tHOZ1VTtIjhGLJTeK7q2sg/viewform?vc=0&c=0&w=1"
              >
                Hier registrieren!
              </MDBBtn>
            </MDBCol>
          </MDBRow>
          <MDBRow
            no-gutters
            style={{
              "padding-left": "15%",
              "padding-right": "15%",
              minHeight: "15vh"
            }}
          >
            <MDBCol lg="1" md="12" sm="12" className="align-self-right">
              <img src={S2} className="img-fluid" alt="" />
            </MDBCol>
            <MDBCol lg="11" md="12" sm="12" className="align-self-left">
              <h2
                style={{
                  "padding-bottom": "5%",
                  "padding-top": "2%"
                }}
              >
                Innerhalb weniger Tage senden wir dir das notwendige
                Klingelschild per Post
              </h2>
            </MDBCol>
          </MDBRow>
          <MDBRow
            no-gutters
            style={{
              "padding-bottom": "2.5%"
            }}
          >
            <MDBCol lg="12" md="12" sm="12" className="align-self-right">
              <img src={Schild} className="img-fluid" alt="" />
            </MDBCol>
          </MDBRow>
          <MDBRow
            no-gutters
            style={{
              "padding-left": "15%",
              "padding-right": "15%",
              minHeight: "10vh"
            }}
          >
            <MDBCol lg="1" md="12" sm="12" className="align-self-right">
              <img src={S3} className="img-fluid" alt="" />
            </MDBCol>
            <MDBCol lg="11" md="12" sm="12" className="align-self-left">
              <h2
                style={{
                  "padding-bottom": "5%",
                  "padding-top": "2%"
                }}
              >
                Du hast Lust und Zeit Pakete anzunehmen? – Klebe das Schild an
                deinen Briefkasten oder an die Klingel
              </h2>
            </MDBCol>
          </MDBRow>
          <MDBRow
            no-gutters
            style={{
              "padding-left": "15%",
              "padding-right": "15%",
              minHeight: "10vh"
            }}
          >
            <MDBCol lg="1" md="12" sm="12" className="align-self-right">
              <img src={S4} className="img-fluid" alt="" />
            </MDBCol>
            <MDBCol lg="11" md="12" sm="12" className="align-self-left">
              <h2
                style={{
                  "padding-bottom": "5%",
                  "padding-top": "2%"
                }}
              >
                Der Paketbote weiß nun Bescheid – Er wird dir Pakete für nicht
                erreichte Nachbarn liefern
              </h2>
            </MDBCol>
          </MDBRow>
          <MDBRow no-gutters>
            <MDBCol size="12" />
          </MDBRow>
          <MDBRow
            no-gutters
            style={{
              "padding-left": "15%",
              "padding-right": "15%",
              minHeight: "10vh"
            }}
          >
            <MDBCol lg="1" md="12" sm="12" className="align-self-right">
              <img src={S5} className="img-fluid" alt="" />
            </MDBCol>
            <MDBCol lg="11" md="12" sm="12" className="align-self-left">
              <h2
                style={{
                  "padding-bottom": "5%",
                  "padding-top": "2%"
                }}
              >
                Lade dir die PAXET App herunter und trage jedes angenommene
                Paket in die App ein, indem du ein Foto vom Paket hochlädst
              </h2>
            </MDBCol>
          </MDBRow>
          <MDBContainer style={{ width: "250px" }}>
            <MDBRow no-gutters>
              <MDBCol lg="12" md="12" sm="12" className="align-self-right">
                <MDBCarousel
                  activeItem={1}
                  length={2}
                  showControls={true}
                  className="z-depth-1 d-flex"
                >
                  <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                      <MDBView className="d-flex align-content-top">
                        <img
                          className="d-block"
                          src={Screen1}
                          alt="First slide"
                        />
                        <MDBMask overlay="black-strong" />
                      </MDBView>

                      <MDBCarouselCaption>
                        <h3
                          className="h3-responsive"
                          style={{ fontSize: "1.5em" }}
                        >
                          Auf der PAXET-Weltkarte siehst du alle durch Hubs
                          abgedeckten Bereiche
                        </h3>
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                      <MDBView className="d-flex align-content-top">
                        <img
                          className="d-block"
                          src={Screen2}
                          alt="Second slide"
                        />
                        <MDBMask overlay="black-strong" />
                      </MDBView>

                      <MDBCarouselCaption>
                        <h3
                          className="h3-responsive"
                          style={{ fontSize: "1.5em" }}
                        >
                          Um dein Guthaben zu erhalten, lade Bilder der Pakete
                          hoch und gib sie anschließend ab
                        </h3>
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                  </MDBCarouselInner>
                </MDBCarousel>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <MDBRow
            style={{
              "padding-left": "10%",
              "padding-right": "10%",
              height: "5%"
            }}
          >
            <MDBCol
              size="lg"
              md="6"
              sm="6"
              className="align-self-left"
              style={{
                fontSize: "0.5em",
                "padding-top": "2.5%",
                "padding-bottom": "2.5%"
              }}
            >
              <a href="https://itunes.apple.com/us/app/paxet/id1461056040?l=en&ls=1&mt=8">
                <img
                  src={App}
                  className="img-fluid"
                  alt=""
                  style={{ width: "50%" }}
                />
              </a>
              <h2 style={{ "padding-bottom": "0.25%", "padding-top": "0.25%" }}>
                {" "}
                <br />{" "}
              </h2>
            </MDBCol>
            <MDBCol
              size="lg"
              md="6"
              sm="6"
              className="align-self-left"
              style={{
                fontSize: "0.5em",
                "padding-top": "2.5%",
                "padding-bottom": "2.5%"
              }}
            >
              <a href="https://play.google.com/store/apps/details?id=com.paxet.app">
                <img
                  src={Play}
                  className="img-fluid"
                  alt=""
                  style={{ width: "50%" }}
                />
              </a>
              <h2 style={{ "padding-bottom": "0.25%", "padding-top": "0.25%" }}>
                {" "}
                <br />{" "}
              </h2>
            </MDBCol>
          </MDBRow>

          <MDBRow
            no-gutters
            style={{
              "padding-left": "15%",
              "padding-right": "15%",
              minHeight: "10vh"
            }}
          >
            <MDBCol lg="1" md="12" sm="12" className="align-self-right">
              <img src={S6} className="img-fluid" alt="" />
            </MDBCol>
            <MDBCol lg="11" md="12" sm="12" className="align-self-left">
              <h2
                style={{
                  "padding-bottom": "5%",
                  "padding-top": "2%"
                }}
              >
                Du hast die Wahl – Entweder du lieferst das Paket aus oder
                wartest bis der Empfänger zu dir kommt
              </h2>
            </MDBCol>
          </MDBRow>

          <MDBRow
            no-gutters
            style={{
              "padding-left": "15%",
              "padding-right": "15%",
              minHeight: "10vh"
            }}
          >
            <MDBCol lg="1" md="12" sm="12" className="align-self-right">
              <img src={S7} className="img-fluid" alt="" />
            </MDBCol>
            <MDBCol lg="11" md="12" sm="12" className="align-self-left">
              <h2
                style={{
                  "padding-bottom": "5%",
                  "padding-top": "2%"
                }}
              >
                Fertig! Jeweils am Ende des Monats erhältst du deine Belohnung
                in Form eines Amazon Gutschein (0,25€/Paket)
              </h2>
            </MDBCol>
          </MDBRow>
          <MDBRow no-gutters>
            <MDBCol size="12" />
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
export default connect()(Pakethub);
