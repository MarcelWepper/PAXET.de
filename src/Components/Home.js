import React from 'react';
import LazyHero from 'react-lazy-hero';
import CookieConsent from "react-cookie-consent";
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'reactstrap';
import { Animation, MDBJumbotron, MDBContainer,MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Marcel from'./Pics/marcel.png';
import Hero from'./Pics/hero.jpg';
import Phone from'./Pics/phone.jpg';
import Logo from'./Pics/brand.png';
import Oli from'./Pics/Oli.jpeg';
import Thomas from'./Pics/Thomas.jpeg';
import Courier from'./Pics/courier.jpg';

class Home extends React.Component {

  componentWillUnmount(){
    window.scrollTo(0, 0);
  }
  componentDidMount(){
    this.props.dispatch({ type:"NAVHOME"});
  }

	render(){
		return(
      <div className="Home">
				{/* Hero-Image newes Version*/}
        <section id='home'>
				   <LazyHero color = "#000000" parallaxOffset='50' minHeight='100vh' imageSrc={Hero} >
            <Container className= "grid">
              {/* 	Hier die trasnparente Box mit allem	*/}
              <div className= "HeroText">
                <Row>
                  <Col><h1>PAXET</h1></Col>
                </Row>
                <Row>
                  <Col><h2>Die Paketzustellung von morgen</h2></Col>
                </Row>
                <Row>
                  <Col><h3>Seite im Aufbau...</h3></Col>
                </Row>
              </div>
            </Container>
          </LazyHero>
        </section>

        <section id='idee'>
          <MDBJumbotron fluid color="white" no-gutters style={{"padding-top": "0px"}}>
            <MDBContainer className="Jumbotron align-middle" fluid no-gutters>
              <MDBRow no-gutters>
                <MDBCol className="Platzhalter"size="12"/>
              </MDBRow>
              <MDBRow no-gutters>
                <MDBCol size="12">
                  <h1> Trete der PAXET-Community bei </h1>
                </MDBCol>
              </MDBRow>
              <MDBRow no-gutters>
                <MDBCol lg="6">
                  <img src={Courier} className="img-fluid" alt="" />
                </MDBCol>
                <MDBCol lg="6" className="h1 text-center" style={{"margin-bottom": "0px"}}>
                  <div className="h1">
                    <h1 style={{"margin-bottom": "0px"}}>Unsere Vision:</h1>
                    <h2 style={{"fontSize":"0.6em"}}>Unsere Vision ist es, den Menschen in Zukunft eine problemlose und sichere Zustellung ihrer Paketbestellungen zu garantieren und zugleich die überforderten Paketzusteller zu entlasten.</h2>
                    <h2 style={{"fontSize":"0.6em"}}> </h2>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow no-gutters>
                <MDBCol lg="6" className="h1" style={{"margin-bottom": "0px"}}>
                  <div className="h1">
                    <h1>Unser Ziel:</h1>
                    <h2 style={{"fontSize":"0.6em"}}>Das Ziel von PAXET ist eine zukunftsfähige und reibungslose Paketzustellung, die den Alltag für Empfänger und Paketdienstleister durch den Einbezug privater Haushalte in den Zustellungsprozess vereinfacht und effizienter gestaltet.</h2>
                    </div>
                  </MDBCol>
                  <MDBCol no-gutters lg="6">
                    <img src={Hero} className="img-fluid" alt="" />
                  </MDBCol>
                </MDBRow>
                <MDBRow no-gutters>
                  <MDBCol no-gutters lg="6">
                    <img src={Hero} className="img-fluid" alt="" />
                  </MDBCol>
                  <MDBCol lg="6" className="h1" style={{"margin-bottom": "0px"}}>
                    <div className="h1">
                      <h1>Unsere Aufgabe:</h1>
                      <h2 style={{"fontSize":"0.6em"}}>Wir sehen es als unsere Aufgabe an, die wachsende Anzahl an Zustellproblemen zu minimieren, die überforderten Paketboten zu entlasten sowie das durch die Lieferwägen entstehende Verkehrsaufkommen und somit die Umweltbelastung zu reduzieren.</h2>
                      </div>
                    </MDBCol>
                  </MDBRow>
              </MDBContainer>
            </MDBJumbotron>
          </section>

          <section id='team'>
            <MDBJumbotron fluid style={{"background-color": "#7A1429"}}>
              <MDBContainer>
                <Animation type="fadeIn" duration="1s" delay="0.5s" reveal>
                  <MDBRow className="Sup2">
                    <MDBCol size="12">
                      <h1>Unser Team:</h1>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol size="lg" md= "12" sm ="12" className="Padding">
                    <MDBCard>
                      <img src={Oli} width="100%" height="100%" alt="ProfilePicture"rounded responsive />
                      <MDBCardBody class="elegant-color dark-text rounded-bottom">
                        <MDBCardTitle>Oliver <br/> Göbbel</MDBCardTitle>
                        <hr class="hr-dark" />
                        <MDBCardText class="dark-text">
                          Vertrieb, Marketing, Organisation
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                    <br/>
                </MDBCol>
                <MDBCol size="lg" md= "12" sm ="12" className="Padding">
                  <MDBCard>
                    <img src={Thomas} width="100%" height="100%" alt="ProfilePicture"rounded responsive />
                    <MDBCardBody class="elegant-color dark-text rounded-bottom">
                      <MDBCardTitle> Thomas <br/> Göbbel</MDBCardTitle>
                      <hr class="hr-dark" />
                      <MDBCardText className="dark-text">
                        Strategie-, Finanzplanung
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                  <br/>
                </MDBCol>

                  <MDBCol size="lg" md= "12" sm ="12" className="Padding">
                    <MDBCard>
                      <img src={Marcel} width="100%" height="100%" alt="ProfilePicture"rounded responsive />
                      <MDBCardBody class="elegant-color dark-text rounded-bottom">
                        <MDBCardTitle>Marcel <br/>Wepper</MDBCardTitle>
                        <hr class="hr-dark" />
                        <MDBCardText className="dark-text">
                          Full-Stack-Developer, IT-Administrator
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                    <br/>
                  </MDBCol>

                </MDBRow>
                </Animation>
              </MDBContainer>

              </MDBJumbotron>
              </section>

              <section id='lösung'>
                <MDBJumbotron fluid color="white" style={{"padding-top": "0px"}}>
                  <MDBContainer fluid className="Jumbotron2" >
                    <MDBRow>
                      <MDBCol className="Platzhalter"size="12"/>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol size="12">
                        <h1> Unsere Lösung: </h1>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow >
                      <MDBCol lg="6">
                        <img src={Courier} className="img-fluid" alt="" />
                      </MDBCol>
                      <MDBCol lg="6" className="h1" style={{"margin-bottom": "0px"}}>
                        <div className="h1">
                          <h1 style={{"margin-bottom": "0px"}}>Paket-Hubs:</h1>
                          <h2 style={{"fontSize":"0.6em"}}>Lorem Ipsum...</h2>
                        </div>
                      </MDBCol>
                    </MDBRow>
                    </MDBContainer>
                  </MDBJumbotron>
                </section>

				{/*	Hier wird der Cookie und deren Parameter bestimmt	*/}
				<CookieConsent
		    location="bottom"
        buttonText=<a href="/contact" >Weitere Informationen.</a>
		    cookieName="CookieConsent"
        acceptOnScroll={true}
        acceptOnScrollPercentage={10}
		    style={{ background: "#2B373B" }}
		    buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
		    expires={150}>

		    Diese Webseite benutzt Cookies, um die Benutzererfahrung zu verbessern. Indem Sie diese Website nutzen, erklären Sie sich mit dieser Verwendung einverstanden.
				</CookieConsent>
			</div>
		);
	}
}

const mapStateToProps = function(state) {
  return{
  home: state.home
}
}
export default connect()(Home);
