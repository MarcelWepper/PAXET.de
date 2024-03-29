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
import Hero from "./Pics/hero.jpg";
import Goal from "./Pics/goal.jpg";
import Vision from "./Pics/vision.jpg";
import Task from "./Pics/task.jpg";
import Phone from "./Pics/phone.jpg";
import Logo from "./Pics/brand.png";
import Oli from "./Pics/Oli.jpeg";
import Thomas from "./Pics/Thomas.jpeg";
import Courier from "./Pics/courier.jpg";
import Concept from "./Pics/concept.png";
import ConceptD from "./Pics/conceptd.png";
import ConceptP from "./Pics/conceptp.png";
import Back from "./Pics/back.png";

//Symbols
import Approved from "./Pics/symbols/approved.png";
import Vorteil1 from "./Pics/symbols/Vorteil1.png";
import Vorteil2 from "./Pics/symbols/Vorteil2.png";
import Vorteil3 from "./Pics/symbols/Vorteil3.png";
import Vorteil4 from "./Pics/symbols/Vorteil4.png";
import Vorteil5 from "./Pics/symbols/Vorteil5.png";
import S1 from "./Pics/symbols/1.png";
import S2 from "./Pics/symbols/2.png";
import S3 from "./Pics/symbols/3.png";
import S4 from "./Pics/symbols/4.png";
import Enkdunden from "./Pics/symbols/Enkdunden.png";
import Pakethubs from "./Pics/symbols/Pakethubs.png";
import Paketdienstleister from "./Pics/symbols/Paketdienstleister.png";
import Play from "./Pics/symbols/play.png";
import App from "./Pics/symbols/app.png";

class Home extends React.Component {
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
              <a style={{ color: "white" }} href="/#">
                <strong>PAXET - simplifying delivery</strong>
              </a>
            </MDBNavbarBrand>
            {!this.state.isWideEnough && (
              <MDBNavbarToggler onClick={this.onClick} />
            )}
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav right>
                <MDBNavItem active>
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
          minHeight="95vh"
          style={{ background: "#ffffff" }}
        >
          <MDBContainer className="Jumbotron3" fluid no-gutters>
            <MDBRow no-gutters>
              <MDBCol size="12">
                <h1
                  style={{
                    "padding-bottom": "0.5%",
                    "padding-top": "0.5%",
                    fontSize: "4.5em"
                  }}
                >
                  <b>PAXET</b>
                </h1>
              </MDBCol>
            </MDBRow>
            <MDBRow no-gutters>
              <MDBCol size="12">
                <h1
                  style={{
                    "padding-bottom": "0.5%",
                    "padding-top": "0.5%",
                    fontSize: "2.5em",
                    "padding-left": "1%",
                    "padding-right": "1%"
                  }}
                >
                  Die Paketzustellung von morgen
                </h1>
              </MDBCol>
            </MDBRow>
            <MDBRow no-gutters>
              <MDBCol size="12">
                <h2
                  style={{
                    "padding-bottom": "0.5%",
                    "padding-top": "0.5%",
                    "padding-left": "4%",
                    "padding-right": "4%",
                    fontSize: "1.65em"
                  }}
                >
                  Nimm Pakete für deine Nachbarn an und profitiere davon – als
                  PAXET Pakethub.
                  <br
                    style={{
                      fontSize: "0.5em"
                    }}
                  />{" "}
                  <br
                    style={{
                      fontSize: "0.5em"
                    }}
                  />
                  Lass deine Pakete von einem PAXET Pakethub annehmen -
                  stressfrei und zuverlässig.
                </h2>
              </MDBCol>
            </MDBRow>
            <MDBRow no-gutters>
              <MDBCol size="12">
                <h1 style={{ "padding-top": "1%", fontSize: "1.25em" }}>
                  Interesse geweckt?
                </h1>
                <MDBBtn outline color="danger" href="/pakethub">
                  Kontaktier uns!
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </LazyHero>

        {/*
          <MDBContainer
          className="Jumbotron"
          fluid
          no-gutters
          style={{ "padding-bottom": "5%" }}
        >
          <MDBRow
            className="Sup1"
            style={{
              display: "flex",
              "padding-left": "0%",
              "padding-right": "0%"
            }}
          >
            <MDBCol size="12" style={{ "text-align": "center" }}>
              <h1>So einfach funktioniert PAXET</h1>
            </MDBCol>
          </MDBRow>
          <MDBCarousel
            activeItem={1}
            length={4}
            showControls={true}
            className="z-depth-1"
          >
            <MDBCarouselInner style={{ "max-height": "35vh" }}>
              <MDBCarouselItem itemId="1" style={{ "max-height": "35vh" }}>
                <MDBView className="d-flex align-content-top">
                  <img
                    className="d-block w-100"
                    style={{ "max-height": "35vh" }}
                    src={Back}
                    alt="First slide"
                  />
                  <MDBMask overlay="black-light" />
                </MDBView>

                <MDBCarouselCaption>
                  <h3 className="h3-responsive" style={{ fontSize: "1.5em" }}>
                    Registriere dich als Pakethub bei PAXET
                  </h3>
                  <p>Schnell und einfach.</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2" style={{ "max-height": "35vh" }}>
                <MDBView className="d-flex align-content-center">
                  <img
                    className="d-block w-100"
                    style={{ "max-height": "35vh" }}
                    src={Back}
                    alt="Second slide"
                  />
                  <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">
                    Werde als PAXET Pakethub sichtbar
                  </h3>
                  <p>
                    Nur wenn du sowieso anwesend bist und Lust hast, Pakete
                    anzunehmen.
                  </p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3" style={{ "max-height": "35vh" }}>
                <MDBView className="d-flex align-content-center">
                  <img
                    className="d-block w-100"
                    style={{ "max-height": "35vh" }}
                    src={Back}
                    alt="Third slide"
                  />
                  <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3
                    className="h3-responsive"
                    style={{ "text-align": "center" }}
                  >
                    Nehm Pakete für deine Nachbarn und Umgebung entgegen
                  </h3>
                  <p>deine Nachbarn und die Paketboten werden Dir danken</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="4" style={{ "max-height": "35vh" }}>
                <MDBView className="d-flex align-content-center">
                  <img
                    className="d-block w-100"
                    style={{ "max-height": "35vh" }}
                    src={Back}
                    alt="Forth slide"
                  />
                  <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">
                    Übergib das Paket an den Empfänger des Pakets
                  </h3>
                  <p>
                    du kannst stolz sein, zur Problemlösung der letzten Meile
                    beigetragen zu haben
                  </p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
        */}

        <MDBJumbotron
          fluid
          color="black"
          no-gutters
          style={{ "padding-top": "0%", "padding-bottom": "0px" }}
        >
          <MDBContainer className="Jumbotron" fluid no-gutters>
            <MDBRow
              className="Sup1"
              style={{
                "padding-top": "0%",
                display: "flex"
              }}
            >
              <MDBCol
                size="12"
                style={{
                  "padding-left": "2.5%",
                  "padding-right": "2.5%"
                }}
              >
                <h1>PAXET - Eine Lösung für jeden auf der letzten Meile</h1>
              </MDBCol>
            </MDBRow>
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
                  "padding-right": "10%",
                  height: "5%"
                }}
              >
                <MDBCol
                  size="lg"
                  md="12"
                  sm="12"
                  className="align-self-center"
                  style={{ fontSize: "0.5em", "padding-top": "2.5%" }}
                >
                  <img
                    src={Enkdunden}
                    className="img-fluid"
                    style={{ width: "20%", height: "20%" }}
                    alt=""
                  />
                  <h2 style={{ "padding-bottom": "5%", "padding-top": "2%" }}>
                    Für Endkunden
                  </h2>
                  <MDBBtn
                    style={{ "border-radius": "24px" }}
                    rounded
                    color="danger"
                    href="/pakethub"
                  >
                    Mehr erfahren!
                  </MDBBtn>
                  <br />
                </MDBCol>
                <MDBCol
                  size="lg"
                  md="12"
                  sm="12"
                  className="align-self-center"
                  style={{ fontSize: "0.5em", "padding-top": "2.5%" }}
                >
                  <img
                    src={Pakethubs}
                    className="img-fluid"
                    style={{ width: "20%", height: "20%" }}
                    alt=""
                  />
                  <h2 style={{ "padding-bottom": "5%", "padding-top": "2%" }}>
                    Für Pakethubs
                  </h2>
                  <MDBBtn
                    style={{ "border-radius": "24px" }}
                    rounded
                    color="danger"
                    href="/pakethub"
                  >
                    Mehr erfahren!
                  </MDBBtn>
                  <br />
                </MDBCol>
                <MDBCol
                  size="lg"
                  md="12"
                  sm="12"
                  className="align-self-center"
                  style={{ fontSize: "0.5em", "padding-top": "2.5%" }}
                >
                  <img
                    src={Paketdienstleister}
                    className="img-fluid"
                    style={{ width: "20%", height: "20%" }}
                    alt=""
                  />
                  <h2 style={{ "padding-bottom": "5%", "padding-top": "2%" }}>
                    Für Paketdienstleister
                  </h2>
                  <MDBBtn
                    style={{ "border-radius": "24px" }}
                    rounded
                    color="danger"
                    href="/pakethub"
                  >
                    Mehr erfahren!
                  </MDBBtn>
                  <br />
                </MDBCol>
              </MDBRow>
            </div>

            <MDBContainer className="Jumbotron" fluid no-gutters>
              <MDBAnimation reveal delay="1s" duration="1s" type="fadeInUp">
                <MDBRow
                  className="Sup1"
                  style={{
                    "padding-top": "2%",
                    display: "flex"
                  }}
                >
                  <MDBCol
                    size="12"
                    style={{
                      "padding-top": "7.5%",
                      "padding-left": "2.5%",
                      "padding-right": "2.5%"
                    }}
                  >
                    <h1>So einfach funktioniert PAXET</h1>
                  </MDBCol>
                </MDBRow>
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
                      "padding-right": "10%",
                      height: "5%"
                    }}
                  >
                    <MDBCol
                      size="lg"
                      md="12"
                      sm="12"
                      className="align-self-top"
                      style={{ fontSize: "0.5em", "padding-top": "2.5%" }}
                    >
                      <MDBTable borderless responsive>
                        <MDBTableBody>
                          <div>
                            <tr>
                              <td className="align-top">
                                <img src={S1} className="img-fluid" alt="" />
                              </td>
                            </tr>
                            <tr>
                              <td style={{ height: "25ch" }}>
                                <h2
                                  style={{
                                    "padding-bottom": "5%",
                                    "padding-top": "2%"
                                  }}
                                >
                                  Registriere dich unverbindlich als Pakethub
                                  bei PAXET
                                </h2>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h3
                                  style={{
                                    "padding-bottom": "5%",
                                    "padding-top": "2%",
                                    color: "#7a1429",
                                    size: "0.5em"
                                  }}
                                >
                                  Die Registrierung geht schnell und einfach
                                  über unser Formular
                                </h3>
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
                      style={{ fontSize: "0.5em", "padding-top": "2.5%" }}
                    >
                      <MDBTable borderless responsive>
                        <MDBTableBody>
                          <div>
                            <tr>
                              <td className="align-top">
                                <img src={S2} className="img-fluid" alt="" />
                              </td>
                            </tr>
                            <tr>
                              <td style={{ height: "25ch" }}>
                                <h2
                                  style={{
                                    "padding-bottom": "5%",
                                    "padding-top": "2%"
                                  }}
                                >
                                  Werde als PAXET Pakethub sichtbar, wann du
                                  willst
                                </h2>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h3
                                  style={{
                                    "padding-bottom": "5%",
                                    "padding-top": "2%",
                                    color: "#7a1429",
                                    size: "0.5em"
                                  }}
                                >
                                  Nur wenn du sowieso anwesend bist und Lust
                                  hast, Pakete anzunehmen
                                </h3>
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
                      style={{ fontSize: "0.5em", "padding-top": "2.5%" }}
                    >
                      <MDBTable borderless responsive>
                        <MDBTableBody>
                          <div>
                            <tr>
                              <td className="align-top">
                                <img src={S3} className="img-fluid" alt="" />
                              </td>
                            </tr>
                            <tr>
                              <td style={{ height: "25ch" }}>
                                <h2
                                  style={{
                                    "padding-bottom": "5%",
                                    "padding-top": "2%"
                                  }}
                                >
                                  Nehm Pakete für deine Nachbarn und Umgebung
                                  entgegen
                                </h2>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h3
                                  style={{
                                    "padding-bottom": "5%",
                                    "padding-top": "2%",
                                    color: "#7a1429",
                                    size: "0.5em"
                                  }}
                                >
                                  Deine Nachbarn und die Paketboten werden Dir
                                  danken
                                </h3>
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
                      style={{ fontSize: "0.5em", "padding-top": "2.5%" }}
                    >
                      <MDBTable borderless responsive>
                        <MDBTableBody>
                          <div>
                            <tr>
                              <td className="align-top">
                                <img src={S4} className="img-fluid" alt="" />
                              </td>
                            </tr>
                            <tr>
                              <td style={{ height: "25ch" }}>
                                <h2
                                  style={{
                                    "padding-bottom": "5%",
                                    "padding-top": "2%"
                                  }}
                                >
                                  Übergib das Paket an den Empfänger des Pakets
                                </h2>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h3
                                  style={{
                                    "padding-bottom": "5%",
                                    "padding-top": "2%",
                                    color: "#7a1429",
                                    size: "0.5em"
                                  }}
                                >
                                  Du kannst stolz sein, zur Problemlösung der
                                  letzten Meile beigetragen zu haben
                                </h3>
                              </td>
                            </tr>
                          </div>
                        </MDBTableBody>
                      </MDBTable>
                    </MDBCol>
                  </MDBRow>
                </div>
              </MDBAnimation>
            </MDBContainer>

            <MDBRow
              className="Sup1"
              style={{
                "padding-top": "5%",
                display: "flex"
              }}
            >
              <MDBCol size="12">
                <h1>
                  <b>Die PAXET Vorteile</b>
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
                className="align-self-top"
                style={{
                  fontSize: "0.3em",
                  "padding-left": "0.25%",
                  "padding-right": "0.25%"
                }}
              >
                <MDBTable borderless responsive>
                  <MDBTableBody>
                    <div>
                      <tr className="d-flex justify-content-center">
                        <td className="align-top" style={{ height: "10ch" }}>
                          <img src={Vorteil1} className="img-fluid" alt="" />
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
                            Zukunftsfähige Lösung für die stark wachsende
                            Paketbranche
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
                  "padding-left": "0.25%",
                  "padding-right": "0.25%"
                }}
              >
                <MDBTable borderless responsive>
                  <MDBTableBody>
                    <div>
                      <tr className="d-flex justify-content-center">
                        <td className="align-top" style={{ height: "10ch" }}>
                          <img src={Vorteil2} className="img-fluid" alt="" />
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
                            Effiziente und zeitsparende Zustellung für
                            Paketboten
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
                  "padding-left": "0.125%",
                  "padding-right": "0.125%"
                }}
              >
                <MDBTable borderless responsive>
                  <MDBTableBody>
                    <div>
                      <tr className="d-flex justify-content-center">
                        <td className="align-top" style={{ height: "10ch" }}>
                          <img src={Vorteil3} className="img-fluid" alt="" />
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
                            Entlastung der Umwelt durch die Verringerung des
                            Verkehrs
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
                  "padding-left": "0.25%",
                  "padding-right": "0.25%"
                }}
              >
                <MDBTable borderless responsive>
                  <MDBTableBody>
                    <div>
                      <tr className="d-flex justify-content-center">
                        <td className="align-top" style={{ height: "10ch" }}>
                          <img src={Vorteil4} className="img-fluid" alt="" />
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
                            Einfache Möglichkeit ein zusätzliches Taschengeld
                            als Pakethub zu verdienen
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
                  "padding-left": "0.25%",
                  "padding-right": "0.25%"
                }}
              >
                <MDBTable borderless responsive>
                  <MDBTableBody>
                    <div>
                      <tr className="d-flex justify-content-center">
                        <td className="align-top" style={{ height: "10ch" }}>
                          <img src={Vorteil5} className="img-fluid" alt="" />
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
                            Entwicklung und Förderung einer Gemeinschaft
                            zwischen den Nachbarn
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
                  <b>Noch kein Mitglied der PAXET Community?</b>
                </h2>
              </MDBCol>
            </MDBRow>

            <MDBRow no-gutters>
              <MDBCol size="12">
                <MDBBtn
                  style={{ "border-radius": "24px" }}
                  rounded
                  color="danger"
                  href="/pakethub"
                >
                  Jetzt Teil werden!
                </MDBBtn>
              </MDBCol>
            </MDBRow>
            {/*
            <MDBRow
              style={{
                "padding-left": "10%",
                "padding-right": "10%",
                height: "5%"
              }}
            >
              <MDBCol
                size="lg"
                md="12"
                sm="12"
                className="align-self-center"
                style={{ fontSize: "0.5em", "padding-top": "7.5%" }}
              >
                <a href="https://itunes.apple.com/us/app/paxet/id1461056040?l=en&ls=1&mt=8">
                  <img
                    src={App}
                    className="img-fluid"
                    style={{ width: "15vh", height: "15vh" }}
                    alt=""
                  />
                </a>
                <h2
                  style={{ "padding-bottom": "0.25%", "padding-top": "0.25%" }}
                >
                  {" "}
                  <br />{" "}
                </h2>
                <MDBBtn
                  style={{ "border-radius": "24px" }}
                  rounded
                  color="danger"
                  href="https://itunes.apple.com/us/app/paxet/id1461056040?l=en&ls=1&mt=8"
                >
                  App-Store für iOS
                </MDBBtn>
                <br />
              </MDBCol>
              <MDBCol
                size="lg"
                md="12"
                sm="12"
                className="align-self-center"
                style={{ fontSize: "0.5em", "padding-top": "7.5%" }}
              >
                <a href="https://play.google.com/store/apps/details?id=com.paxet.app">
                  <img
                    src={Play}
                    className="img-fluid"
                    style={{ width: "15vh", height: "15vh" }}
                    alt=""
                  />
                </a>
                <h2
                  style={{ "padding-bottom": "0.25%", "padding-top": "0.25%" }}
                >
                  {" "}
                  <br />{" "}
                </h2>
                <MDBBtn
                  style={{ "border-radius": "24px" }}
                  rounded
                  color="danger"
                  href="https://play.google.com/store/apps/details?id=com.paxet.app"
                >
                  Play Store für Android
                </MDBBtn>
                <br />
              </MDBCol>
            </MDBRow>
                    */}
          </MDBContainer>
        </MDBJumbotron>

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
export default connect()(Home);
