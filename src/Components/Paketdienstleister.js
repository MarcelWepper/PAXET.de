import React from "react";
import LazyHero from "react-lazy-hero";
import CookieConsent from "react-cookie-consent";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "reactstrap";
import {
  Animation,
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
  MDBTableBody
} from "mdbreact";
import { connect } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

class Paketdienstleister extends React.Component {
  // Scroll to top when changing sites

  componentWillUnmount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    this.props.dispatch({ type: "NAVHOME" });
  }

  render() {
    return (
      <div className="Home Background">
        {/* Hero-Image newes Version*/}
        <LazyHero
          color="#ffffff"
          minHeight="70vh"
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
                    Massiv steigendes Sendungsvolumen und immer weniger
                    Paketzusteller
                  </b>
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
                    fontSize: "3em"
                  }}
                >
                  <br />
                  PAXET - Die Lösung mit viele Vorteilen
                </h1>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </LazyHero>

        <MDBJumbotron className="Jumbotron3" fluid no-gutters>
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
                          <td style={{ height: "27ch" }}>
                            <h2
                              style={{
                                "padding-bottom": "1.5%",
                                "padding-top": "2%"
                              }}
                            >
                              Entlastung der Paketboten
                            </h2>
                            <h3
                              style={{
                                "padding-bottom": "2.5%",
                                fontSize: "2em"
                              }}
                            >
                              Die Paketboten profitieren aufgrund der
                              PAXET-Community von einer 100%-igen
                              Zustellsicherheit, sodass keine mehrmaligen
                              Zustellversuche mehr notwendig sind und mehrere
                              Zustellungen in kürzerer Zeit abgewickelt werden
                              können.
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
                          <td style={{ height: "27ch" }}>
                            <h2
                              style={{
                                padding: "1.5%"
                              }}
                            >
                              Mehr Umsatz
                            </h2>
                            <h3
                              style={{
                                padding: "1.5%",
                                fontSize: "2em"
                              }}
                            >
                              Aufgrund der breit verteilten Pakethubs, die Sie
                              auf der letzten Meile unterstützen, können Sie
                              mehr Pakete in kürzerer Zeit an die Endkunden
                              bringen und somit Ihr Sendungsvolumen erhöhen.
                            </h3>
                          </td>
                        </tr>
                      </div>
                    </MDBTableBody>
                  </MDBTable>
                </MDBCol>
              </MDBRow>
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
                          <td style={{ height: "27ch" }}>
                            <h2
                              style={{
                                padding: "1.5%"
                              }}
                            >
                              Kosten- und Zeiteinsparung
                            </h2>
                            <h3
                              style={{
                                padding: "1.5%",
                                fontSize: "2em"
                              }}
                            >
                              Der prozentuale Anteil der Kosten die auf der
                              letzten Meile entfallen können stark reduziert
                              werden, da PAXET zu einer Routenoptimierung sowie
                              einer großen Zeiteinsparung und
                              Effizienzsteigerung aufgrund der Zustellsicherheit
                              beiträgt.
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
                          <td style={{ height: "27ch" }}>
                            <h2
                              style={{
                                padding: "1.5%"
                              }}
                            >
                              Bequem für Ihre Kunden
                            </h2>
                            <h3
                              style={{
                                padding: "1.5%",
                                fontSize: "2em"
                              }}
                            >
                              Mit PAXET erhalten Ihre Kunden die Pakete schnell,
                              einfach und sicher. Die Rate an Beschwerden sowie
                              die Anzahl an aufwendigen Abholungen verbunden mit
                              einem großen Zeitaufwand sinkt.
                            </h3>
                          </td>
                        </tr>
                      </div>
                    </MDBTableBody>
                  </MDBTable>
                </MDBCol>
              </MDBRow>
            </div>

            <MDBRow
              className="Sup2"
              style={{
                background: "#7A1429",
                padding: "5%"
              }}
            >
              <MDBCol size="lg" md="12" sm="12" className="align-self-center">
                <MDBTable borderless responsive>
                  <MDBTableBody>
                    <div>
                      <h2
                        style={{
                          color: "white",
                          fontSize: "2em"
                        }}
                      >
                        Das Ziel von PAXET ist eine zukunftsfähige und
                        reibungslose Paketzustellung, die den Alltag für
                        Empfänger und Paketdienstleister durch den Einbezug
                        privater Haushalte in den Zustellungsprozess vereinfacht
                        und effizienter gestaltet.
                      </h2>
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
                  <b>
                    Kontaktieren Sie uns und gestalten Sie mit uns die
                    Paketzustellung von morgen!
                  </b>
                </h2>
              </MDBCol>
            </MDBRow>

            <MDBRow no-gutters>
              <MDBCol size="12">
                <MDBBtn
                  style={{ "border-radius": "24px" }}
                  rounded
                  color="danger"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe8FCSxk7PVUXsMuc3o3YaaE5IV6zNl3g9AmnfN02DCeOdnnQ/viewform?vc=0&c=0&w=1"
                >
                  Hier kontaktieren
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
export default connect()(Paketdienstleister);
