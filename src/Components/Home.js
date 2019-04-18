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
                  <Col> <img src={Marcel} width="25%" height="100%" alt="ProfilePicture"rounded responsive /></Col>
                </Row>
                <Row>
                  <Col><h1> Trete der Paxet-Community bei!</h1></Col>
                </Row>
                <Row>
                  <Col><h3> Seite im Aufbau...</h3></Col>
                </Row>
              </div>
            </Container>
          </LazyHero>
        </section>

        <section id='idee'>
          <MDBJumbotron fluid color="white" no-gutters>
            <MDBContainer className="Jumbotron" fluid no-gutters>
              <MDBRow no-gutters>
                <MDBCol className="Platzhalter"size="12"/>
              </MDBRow>
              <MDBRow no-gutters>
                <MDBCol size="12">
                  <h1> Unsere Idee: </h1>
                </MDBCol>
              </MDBRow>
              <MDBRow no-gutters>
                <MDBCol lg="6">
                  <img src={Hero} className="img-fluid" alt="" />
                </MDBCol>
                <MDBCol lg="6" className="h1" style={{"margin-bottom": "0px"}}>
                  <div className="h1">
                    <h1 style={{"margin-bottom": "0px"}}>Lorem Ipsum...</h1>
                    <h2 style={{"fontSize":"0.6em"}}>Lorem Ipsum...</h2>
                    <h2 style={{"fontSize":"0.6em"}}>Lorem Ipsum...</h2>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow no-gutters>
                <MDBCol lg="6" className="h1" style={{"margin-bottom": "0px"}}>
                  <div className="h1">
                    <h1>Lorem Ipsum...</h1>
                    <h2 style={{"fontSize":"0.6em"}}>Lorem Ipsum...</h2>
                    <h2 style={{"fontSize":"0.6em"}}>Lorem Ipsum...</h2>
                    </div>
                  </MDBCol>
                  <MDBCol no-gutters lg="6">
                    <img src={Hero} className="img-fluid" alt="" />
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBJumbotron>
          </section>

          <section id='team'>
            <MDBJumbotron fluid>
              <MDBContainer color="elegant-color-dark">
                <Animation type="fadeIn" duration="1s" delay="0.5s" reveal>
                  <MDBRow className="Sup2">
                    <MDBCol size="12">
                      <h1>Unser Team:</h1>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol size="lg" md= "12" sm ="12" className="Padding">
                    <MDBCard>
                      <img src={Marcel} width="100%" height="100%" alt="ProfilePicture"rounded responsive />
                      <MDBCardBody className="elegant-color white-text rounded-bottom">
                        <MDBCardTitle>Oli <br/> Göbbel</MDBCardTitle>
                        <hr className="hr-light" />
                        <MDBCardText className="white-text">
                          Finanzplanung, Unternehmensorganisation
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                    <br/>
                </MDBCol>
                <MDBCol size="lg" md= "12" sm ="12" className="Padding">
                  <MDBCard>
                    <img src={Marcel} width="100%" height="100%" alt="ProfilePicture"rounded responsive />
                    <MDBCardBody className="elegant-color white-text rounded-bottom">
                      <MDBCardTitle> Thomas <br/> Göbbel</MDBCardTitle>
                      <hr className="hr-light" />
                      <MDBCardText className="white-text">
                        Finanzplanung, Unternehmensorganisation
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                  <br/>
                </MDBCol>

                  <MDBCol size="lg" md= "12" sm ="12" className="Padding">
                    <MDBCard>
                      <img src={Marcel} width="100%" height="100%" alt="ProfilePicture"rounded responsive />
                      <MDBCardBody className="elegant-color white-text rounded-bottom">
                        <MDBCardTitle>Marcel <br/>Wepper</MDBCardTitle>
                        <hr className="hr-light" />
                        <MDBCardText className="white-text">
                          Full-Stack-Developer, Administrator
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
