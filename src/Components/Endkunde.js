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

//Symbols
import Vorteil1 from "./Pics/symbols/Vorteil1.png";
import Vorteil2 from "./Pics/symbols/Vorteil2.png";
import Vorteil3 from "./Pics/symbols/Vorteil3.png";

import S1 from "./Pics/symbols/1.png";
import S2 from "./Pics/symbols/2.png";
import Enkdunden from "./Pics/symbols/Enkdunden.png";
import W1 from "./Pics/w1.png";
import W2 from "./Pics/w2.png";
import W3 from "./Pics/w3.png";

class Endkunde extends React.Component {
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
              <a style={{ color: "white" }} href="/endkunde">
                <strong>PAXET - Endkunde</strong>
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
                <MDBNavItem active>
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
          minHeight="55vh"
          style={{ background: "#ffffff" }}
        >
          <MDBContainer className="Jumbotron3" fluid no-gutters>
            <MDBRow no-gutters>
              <MDBCol size="12">
                <h1
                  style={{
                    "padding-bottom": "1%",
                    "padding-top": "1%",
                    fontSize: "5em"
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
                    "padding-bottom": "1%",
                    "padding-top": "1%",
                    "padding-left": "4%",
                    "padding-right": "4%",
                    fontSize: "2em"
                  }}
                >
                  Mit PAXET garantieren wir Dir eine sichere und problemlose
                  Zustellung Deiner Paketsendungen!
                </h1>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </LazyHero>

        <MDBJumbotron
          fluid
          color="black"
          no-gutters
          style={{ "padding-top": "0px", "padding-bottom": "0px" }}
        >
          <MDBContainer className="Jumbotron" fluid no-gutters>
            <MDBRow
              className="Sup1"
              style={{
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
                <h2>Doch wie funktioniert das?</h2>
                <h3>
                  Sollte der Paketbote Dich nicht erreichen, wird er das Paket
                  bei einem PAXET-Pakethub in Deiner unmittelbaren Nähe abgeben
                </h3>
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
                  "padding-left": "15%",
                  "padding-right": "15%"
                }}
              >
                <MDBCol
                  size="5"
                  className="align-self-center"
                  style={{
                    fontSize: "0.5em",
                    "padding-top": "2.5%",
                    "padding-right": "-50%"
                  }}
                >
                  <MDBAnimation duration="1.5s" type="fadeInLeftBig">
                    <img src={W1} className="img-fluid" alt="" />
                  </MDBAnimation>
                </MDBCol>

                <MDBCol
                  size="2"
                  className="align-self-center"
                  style={{
                    fontSize: "0.5em",
                    "padding-top": "2.5%",
                    "padding-left": "-50%",
                    "padding-right": "-50%"
                  }}
                >
                  <img src={W2} className="img-fluid" alt="" />
                </MDBCol>
                <MDBCol
                  size="5"
                  className="align-self-center"
                  style={{ fontSize: "0.5em", "padding-top": "2.5%" }}
                >
                  <img src={W3} className="img-fluid" alt="" />
                </MDBCol>
              </MDBRow>
            </div>

            <MDBContainer className="Jumbotron" fluid no-gutters>
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
                  <h1>
                    Anschließend kannst du auf zwei Wegen dein Paket sicher und
                    schnell erhalten
                  </h1>
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
                    style={{
                      fontSize: "0.5em",
                      "padding-top": "2.5%",
                      "text-align": "center"
                    }}
                  >
                    <MDBTable borderless>
                      <MDBTableBody>
                        <div className="Sup1 mx-auto ">
                          <tr className="d-flex justify-content-center">
                            <td>
                              <img src={S1} className="img-fluid" alt="" />
                            </td>
                          </tr>
                          <tr className="d-flex justify-content-center">
                            <td>
                              <h2
                                style={{
                                  "padding-bottom": "5%",
                                  "padding-top": "2%"
                                }}
                              >
                                Du holst dir Dein Paket beim PAXET-Pakethub
                                selber ab
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
                    style={{ fontSize: "0.5em", "padding-top": "2.5%" }}
                  >
                    <MDBTable borderless responsive>
                      <MDBTableBody>
                        <div>
                          <tr className="d-flex justify-content-center">
                            <td>
                              <img src={S2} className="img-fluid" alt="" />
                            </td>
                          </tr>
                          <tr className="d-flex justify-content-center">
                            <td>
                              <h2
                                style={{
                                  "padding-bottom": "5%",
                                  "padding-top": "2%"
                                }}
                              >
                                Der PAXET-Pakethub bringt Dir das Paket nach
                                Hause
                              </h2>
                            </td>
                          </tr>
                        </div>
                      </MDBTableBody>
                    </MDBTable>
                  </MDBCol>
                </MDBRow>
              </div>
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
                  <b>Deine Vorteile auf einen Blick</b>
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
                            Garantierte Zustellsicherheit Deiner Pakete trotz
                            Abwesenheit
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
                            Eliminierung der Warte- und Verzögerungszeiten beim
                            Paketempfang
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
                            Nie wieder in überfüllten Paketfilialen anstehen
                          </h2>
                        </td>
                      </tr>
                    </div>
                  </MDBTableBody>
                </MDBTable>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <MDBContainer className="Jumbotron" fluid no-gutters>
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
                <h1>
                  Das Sagen unsere Endkunden, die über PAXET ihre Pakete
                  erhalten haben:
                </h1>
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
                          <MDBAnimation
                            reveal
                            delay="0.25s"
                            duration="2s"
                            type="fadeIn"
                          >
                            <td style={{ height: "27ch" }}>
                              <h2
                                style={{
                                  "padding-bottom": "5%",
                                  "padding-top": "2%"
                                }}
                              >
                                „Ich bestelle viele Pakete und bin fast nie zu
                                Hause wenn der Paketbote klingelt. PAXET erspart
                                mir mehrmals pro Monat den 20-minütigen Weg zur
                                Paketstation oder den Paketshop“
                              </h2>
                              <h3
                                style={{
                                  "padding-bottom": "5%",
                                  "padding-top": "2%",
                                  fontSize: "1.5em"
                                }}
                              >
                                Franziska B. (über Instagram)
                              </h3>
                            </td>
                          </MDBAnimation>
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
                          <MDBAnimation
                            reveal
                            delay="0.5s"
                            duration="2s"
                            type="fadeIn"
                          >
                            <td style={{ height: "27ch" }}>
                              <h2
                                style={{
                                  "padding-bottom": "5%",
                                  "padding-top": "2%"
                                }}
                              >
                                „Gestern ein Paket von einer freundlichen Person
                                aus meinem Studentenwohnheim erhalten. Was für
                                ein Zufall, sie war auch aus Bolivien und wir
                                haben uns direkt angefreundet“
                              </h2>
                              <h3
                                style={{
                                  "padding-bottom": "5%",
                                  "padding-top": "2%",
                                  fontSize: "1.5em"
                                }}
                              >
                                Eliana S. (über Instagram)
                              </h3>
                            </td>
                          </MDBAnimation>
                        </tr>
                      </div>
                    </MDBTableBody>
                  </MDBTable>
                </MDBCol>
              </MDBRow>
            </div>
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
export default connect()(Endkunde);
