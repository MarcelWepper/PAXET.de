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
  MDBMask
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
import Enkdunden from "./Pics/symbols/Enkdunden.png";
import Pakethubs from "./Pics/symbols/Pakethubs.png";
import Paketdienstleister from "./Pics/symbols/Paketdienstleister.png";
import Play from "./Pics/symbols/play.png";
import App from "./Pics/symbols/app.png";

class Home extends React.Component {
  // Scroll to top when changing sites

  state = {
    modal14: false
  };

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };
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
          minHeight="95vh"
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
                    fontSize: "3em",
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
                <h1
                  style={{
                    "padding-bottom": "1%",
                    "padding-top": "1%",
                    "padding-left": "4%",
                    "padding-right": "4%",
                    fontSize: "2em"
                  }}
                >
                  Nimm Pakete für Deine Nachbarn an und profitiere davon – als
                  PAXET Pakethub.
                </h1>
              </MDBCol>
            </MDBRow>
            <MDBRow no-gutters>
              <MDBCol size="12">
                <h1 style={{ "padding-top": "1%", fontSize: "1em" }}>
                  Interesse geweckt?
                </h1>
                <MDBBtn
                  outline
                  color="danger"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe8FCSxk7PVUXsMuc3o3YaaE5IV6zNl3g9AmnfN02DCeOdnnQ/viewform?vc=0&c=0&w=1"
                >
                  Kontaktier uns!
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </LazyHero>

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
            <MDBCarouselInner style={{ "max-height": "25vh" }}>
              <MDBCarouselItem itemId="1" style={{ "max-height": "25vh" }}>
                <MDBView className="d-flex align-content-top">
                  <img
                    className="d-block w-100"
                    style={{ "max-height": "25vh" }}
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
              <MDBCarouselItem itemId="2" style={{ "max-height": "25vh" }}>
                <MDBView className="d-flex align-content-center">
                  <img
                    className="d-block w-100"
                    style={{ "max-height": "25vh" }}
                    src={Back}
                    alt="Second slide"
                  />
                  <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">
                    Werde als PAXET Pakethub sichtbar
                  </h3>
                  <p>Nur wenn Du Zeit und Lust hast.</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3" style={{ "max-height": "25vh" }}>
                <MDBView className="d-flex align-content-center">
                  <img
                    className="d-block w-100"
                    style={{ "max-height": "25vh" }}
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
                    Nimm Pakete an
                  </h3>
                  <p>Sei stolz auf dich!</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="4" style={{ "max-height": "25vh" }}>
                <MDBView className="d-flex align-content-center">
                  <img
                    className="d-block w-100"
                    style={{ "max-height": "25vh" }}
                    src={Back}
                    alt="Forth slide"
                  />
                  <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">
                    Übergib das Paket an den Empfänger
                  </h3>
                  <p>Sie werden dir danken.</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>

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
                "padding-top": "2%",
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
                <h1>PAXET- Eine Lösung für jeden auf der letzten Meile</h1>
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
                  style={{ fontSize: "0.5em", "padding-top": "7.5%" }}
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
                    href="#"
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
                  style={{ fontSize: "0.5em", "padding-top": "7.5%" }}
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
                    href="#"
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
                  style={{ fontSize: "0.5em", "padding-top": "7.5%" }}
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
                    href="#"
                  >
                    Mehr erfahren!
                  </MDBBtn>
                  <br />
                </MDBCol>
              </MDBRow>
            </div>

            <MDBRow
              className="Sup1"
              style={{
                "padding-top": "10%",
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
                "padding-left": "5%",
                "padding-right": "5%",
                display: "flex"
              }}
            >
              <MDBCol
                size="lg"
                md="12"
                sm="12"
                className="align-self-center"
                style={{
                  fontSize: "0.5em",
                  "padding-left": "0.25%",
                  "padding-right": "0.25%"
                }}
              >
                <img
                  src={Vorteil1}
                  className="img-fluid"
                  style={{ width: "20%", height: "20%" }}
                  alt=""
                />
                <h2 style={{ "padding-bottom": "5%" }}>
                  Zukunftsfähige Lösung
                </h2>
                <br />
              </MDBCol>
              <MDBCol
                size="lg"
                md="12"
                sm="12"
                className="align-self-center"
                style={{
                  fontSize: "0.5em",
                  "padding-left": "0.25%",
                  "padding-right": "0.25%"
                }}
              >
                <img
                  src={Vorteil2}
                  className="img-fluid"
                  style={{ width: "20%", height: "20%" }}
                  alt=""
                />
                <h2 style={{ "padding-bottom": "5%" }}>
                  Zeitsparende Zustellung
                </h2>
                <br />
              </MDBCol>
              <MDBCol
                size="lg"
                md="12"
                sm="12"
                className="align-self-center"
                style={{
                  fontSize: "0.5em",
                  "padding-left": "0.25%",
                  "padding-right": "0.25%"
                }}
              >
                <img
                  src={Vorteil3}
                  className="img-fluid"
                  style={{ width: "20%", height: "20%" }}
                  alt=""
                />
                <h2 style={{ "padding-bottom": "5%" }}>
                  Entlastung der Umwelt
                </h2>
                <br />
              </MDBCol>
              <MDBCol
                size="lg"
                md="12"
                sm="12"
                className="align-self-center"
                style={{
                  fontSize: "0.5em",
                  "padding-left": "0.25%",
                  "padding-right": "0.25%"
                }}
              >
                <img
                  src={Vorteil4}
                  className="img-fluid"
                  style={{ width: "20%", height: "20%" }}
                  alt=""
                />
                <h2 style={{ "padding-bottom": "5%" }}>
                  Verringerung des Verkehrsaufkommens
                </h2>
                <br />
              </MDBCol>
              <MDBCol
                size="lg"
                md="12"
                sm="12"
                className="align-self-center"
                style={{
                  fontSize: "0.5em",
                  "padding-left": "0.25%",
                  "padding-right": "0.25%"
                }}
              >
                <img
                  src={Vorteil5}
                  className="img-fluid"
                  style={{ width: "20%", height: "20%" }}
                  alt=""
                />
                <h2 style={{ "padding-bottom": "5%" }}>
                  Nachbarschafts Netzwerk
                </h2>
                <br />
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
                  <b>Immernoch kein Mitglied der PAXET Community?</b>
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
                  Jetzt Teil werden!
                </MDBBtn>
              </MDBCol>
            </MDBRow>
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
          </MDBContainer>
        </MDBJumbotron>

        {/*	Modal für Contact	*/}
        <MDBContainer>
          <MDBModal
            isOpen={this.state.modal14}
            toggle={this.toggle(14)}
            centered
          >
            <MDBModalHeader toggle={this.toggle(14)}>
              Kontaktformular
            </MDBModalHeader>
            <MDBModalBody>
              <MDBRow style={{ "margin-left": "5%" }}>
                <MDBCol md="6">
                  <form>
                    <p className="h5 text-center mb-4">Schreib uns</p>
                    <div className="grey-text">
                      <MDBInput
                        label="Dein Name"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Deine Mail-Adresse"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Betreff"
                        icon="tag"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        type="textarea"
                        rows="2"
                        label="Deine Nachricht"
                        icon="pencil-alt"
                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn
                        outline
                        color="secondary"
                        onClick={this.toggle(14)}
                      >
                        Schicken{" "}
                        <MDBIcon far icon="paper-plane" className="ml-1" />
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBModalBody>
          </MDBModal>
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
export default connect()(Home);
