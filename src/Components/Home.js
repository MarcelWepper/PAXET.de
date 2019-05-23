import React from 'react';
import LazyHero from 'react-lazy-hero';
import CookieConsent from "react-cookie-consent";
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'reactstrap';
import { Animation, MDBBtn, MDBJumbotron, MDBContainer,MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Marcel from'./Pics/marcel.png';
import Hero from'./Pics/hero.jpg';
import Goal from'./Pics/goal.jpg';
import Vision from'./Pics/vision.jpg';
import Task from'./Pics/task.jpg';
import Phone from'./Pics/phone.jpg';
import Logo from'./Pics/brand.png';
import Oli from'./Pics/Oli.jpeg';
import Thomas from'./Pics/Thomas.jpeg';
import Courier from'./Pics/courier.jpg';
import Concept from './Pics/concept.png';
import ConceptD from './Pics/conceptd.png';
import ConceptP from './Pics/conceptp.png';

//Symbols
import Approved from './Pics/symbols/approved.png';
import Chartdown from './Pics/symbols/chartdown.png';
import Chartup from './Pics/symbols/chartup.png';
import City from './Pics/symbols/city.png';
import Error1 from './Pics/symbols/error1.png';
import Error2 from './Pics/symbols/error2.png';
import Grundermotor from './Pics/symbols/grundermotor.png';
import Hub from './Pics/symbols/hub.png';
import Money from './Pics/symbols/money.png';
import Network from './Pics/symbols/network.png';
import Paxetsystem from './Pics/symbols/paxetsystem.png';
import Pioniergeist from './Pics/symbols/pioniergeist.png';
import Pulse from './Pics/symbols/pulse.png';
import Sadface from './Pics/symbols/sadface.png';
import Speech from './Pics/symbols/speech.png';
import Time from './Pics/symbols/time.png';
import Withoutpaxet from './Pics/symbols/withoutpaxet.png';
import Withpaxet from './Pics/symbols/withpaxet.png';
import World from './Pics/symbols/world.png';
import Arrow from './Pics/symbols/arrow.png';
import One from './Pics/symbols/1.png';
import Two from './Pics/symbols/2.png';
import Three from './Pics/symbols/3.png';
import Brand from './Pics/brand2.png';


class Home extends React.Component {

// Scroll to top when changing sites
  componentWillUnmount(){
    window.scrollTo(0, 0);
  }

	render(){
		return(
      <div className="Home Background">
				{/* Hero-Image newes Version*/}
        <section id='home'>
				   <LazyHero color = "#ffffff" minHeight='100vh' style={{"background": "#ffffff"}}>
            <MDBContainer className="Jumbotron3" fluid no-gutters>
              <MDBRow no-gutters>
                <MDBCol size="12">
                  <h1 style={{"margin-bottom": "1%","margin-top": "1%", "fontSize":"5em"}}><b>PAXET</b></h1>
                </MDBCol>
              </MDBRow>
              <MDBRow no-gutters>
                <MDBCol size="12">
                  <h1 style={{"margin-bottom": "2%","margin-top": "2%", "fontSize":"3em"}}>Die Paketzustellung von morgen</h1>
                </MDBCol>
              </MDBRow>
              <MDBRow no-gutters>
                <MDBCol className="Platzhalter"size="12"/>
              </MDBRow>
              <MDBRow no-gutters>
                <MDBCol size="12">
                  <h1 style={{"margin-bottom": "2%","margin-top": "2%","margin-left": "4%","margin-right": "4%", "fontSize":"2em"}}>Werde PAXET Pakethub und verdiene Geld durch das Annehmen von Paketen</h1>
                </MDBCol>
              </MDBRow>
              <MDBRow no-gutters>
                <MDBCol className="Platzhalter"size="12" style={{"margin-bottom": "1%","margin-top": "1%"}}/>
              </MDBRow>
              <MDBRow no-gutters>
                <MDBCol size="12">
                  <h1 style={{"margin-top": "2%", "fontSize":"2em"}}>Interesse geweckt?</h1>
                  <MDBBtn outline color="danger" href="mailto:hey@paxet.de"> Schreib uns!</MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </LazyHero>
        </section>

        <section id='idee'>
          <MDBJumbotron fluid color="white" no-gutters style={{"padding-top": "0px"}}>
            <MDBContainer className="Jumbotron" fluid no-gutters>
              <MDBRow  no-gutters>
                <MDBCol className="Platzhalter"size="12"/>
              </MDBRow>
              <MDBRow className="header" no-gutters>
                <MDBCol size="12">
                  <h1 style={{"margin-bottom": "2%","margin-top": "2%"}}>  Trete der PAXET-Community bei </h1>
                </MDBCol>
              </MDBRow>
              <MDBRow no-gutters className="header">
                <MDBCol lg="6" className="order-lg-1 order-md-1 order-sm-1 order-xs-1">
                  <img src={Vision} className="img-fluid" alt="" />
                </MDBCol>
                <MDBCol lg="6" className="h1 align-self-center order-lg-2 order-md-2 order-sm-2 order-xs-2" style={{"margin-bottom": "0px"}}>
                  <div className="h1">
                    <h1 style={{"margin-bottom": "0px"}}>Unsere Vision:</h1>
                    <h2 style={{"fontSize":"0.6em"}}>Unsere Vision ist es, den Menschen in Zukunft eine problemlose und sichere Zustellung ihrer Paketbestellungen zu garantieren und zugleich die überforderten Paketzusteller zu entlasten.</h2>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow no-gutters className="header">
                <MDBCol lg="6" className="order-last order-lg-1 order-md-2 order-sm-2 h1 align-self-center" style={{"margin-bottom": "0px"}}>
                  <div className="h1">
                    <h1>Unser Ziel:</h1>
                    <h2 style={{"fontSize":"0.6em"}}>Das Ziel von PAXET ist eine zukunftsfähige und reibungslose Paketzustellung, die den Alltag für Empfänger und Paketdienstleister durch den Einbezug privater Haushalte in den Zustellungsprozess vereinfacht und effizienter gestaltet.</h2>
                    </div>
                  </MDBCol>
                  <MDBCol no-gutters lg="6" className="order-first order-lg-2 order-md-1 order-sm-1">
                    <img src={Goal} className="img-fluid" alt="" />
                  </MDBCol>
                </MDBRow>
                <MDBRow no-gutters className="header">
                  <MDBCol no-gutters lg="6" className="order-lg-1 order-md-1 order-sm-1 order-xs-1">
                    <img src={Task} className="img-fluid" alt="" />
                  </MDBCol>
                  <MDBCol lg="6" className="h1 align-self-center order-lg-2 order-md-2 order-sm-2 order-xs-2" style={{"margin-bottom": "0px"}}>
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
                        <img src={Thomas} width="100%" className="img-fluid" height="100%" alt="ProfilePicture" rounded responsive />
                        <MDBCardBody class="elegant-color dark-text rounded-bottom">
                          <MDBCardTitle> Thomas <br/> Göbbel</MDBCardTitle>
                          <hr class="hr-dark" />
                          <MDBCardText className="dark-text">
                            CEO
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                      <br/>
                    </MDBCol>
                    <MDBCol size="lg" md= "12" sm ="12" className="Padding">
                      <MDBCard>
                        <img src={Oli} width="100%" className="img-fluid" height="100%" alt="ProfilePicture"rounded responsive />
                          <MDBCardBody class="elegant-color dark-text rounded-bottom">
                            <MDBCardTitle>Oliver <br/> Göbbel</MDBCardTitle>
                            <hr class="hr-dark" />
                            <MDBCardText class="dark-text">
                              COO
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      <br/>
                    </MDBCol>

                    <MDBCol size="lg" md= "12" sm ="12" className="Padding">
                      <MDBCard>
                        <img src={Marcel} width="100%"  className="img-fluid" height="100%" alt="ProfilePicture"rounded responsive />
                        <MDBCardBody class="elegant-color dark-text rounded-bottom">
                          <MDBCardTitle>Marcel <br/>Wepper</MDBCardTitle>
                          <hr class="hr-dark" />
                          <MDBCardText className="dark-text">
                            CTO
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

                <section id='Erklärung'>

                  <MDBJumbotron fluid color="white" no-gutters style={{"padding-top": "0px"}}>
                    <MDBContainer className="Jumbotron" fluid no-gutters  >
                      <MDBRow className="Sup2" style={{"background": "#4e0d1a" , "padding-top": "2%" , "padding-top": "2%" , "display":"flex"}}>
                        <MDBCol size="12">
                          <h1>Die Probleme der Paketzustellung</h1>
                        </MDBCol>
                      </MDBRow>
                      <div style={{"margin-bottom": "0px", "color":"white", "fontSize":"1em"}}>

                      <MDBRow style={{"background": "#4e0d1a" , "padding-top": "1.5em"}}>
                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <h2>Paketdienste</h2><br/>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow style={{"padding-left": "10%","padding-top": "2.5%","padding-right": "10%", "height":"5%"}}>

                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <img src={Chartup} className="img-fluid" style={{"width":"20%","height":"20%"}} alt="" /><h2 style={{"margin-bottom":"5%"}}>Massiv steigendes Sendungsaufkommen</h2><br/>
                        </MDBCol>
                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <img src={Chartdown} className="img-fluid" style={{"width":"20%","height":"20%"}} alt="" /><h2 style={{"margin-bottom":"5%"}}>Immer weniger Paketzusteller</h2><br/>
                        </MDBCol>
                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <img src={Sadface} className="img-fluid" style={{"width":"20%","height":"20%"}} alt="" /><h2 style={{"margin-bottom":"5%"}}>Viele Beschwerden</h2><br/>
                        </MDBCol>
                      </MDBRow>

                      <MDBRow style={{"background": "#4e0d1a" , "padding-top": "1.5em"}}>
                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <h2>Paketboten</h2><br/>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow style={{"padding-left": "10%","padding-right": "10%", "padding-top": "2.5%", "height":"5%"}}>

                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em","padding-top": "2.5%"}}>
                          <img src={Pulse} className="img-fluid" style={{"width":"20%","height":"20%"}} alt="" /><h2 style={{"margin-bottom":"5%"}}>Stress und <br/> Druck</h2><br/>
                        </MDBCol>
                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <img src={City} className="img-fluid" style={{"width":"20%","height":"20%"}} alt="" /><h2 style={{"margin-bottom":"5%"}}>Zu viele Haushalte <br/>und Lieferungen</h2><br/>
                        </MDBCol>
                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <img src={Error1} className="img-fluid" style={{"width":"20%","height":"20%"}} alt="" /><h2 style={{"margin-bottom":"5%"}}>Erfolgreiche Zustellungen oft nicht möglich</h2><br/>
                        </MDBCol>
                      </MDBRow>

                      <MDBRow style={{"background": "#4e0d1a" , "padding-top": "1.5em"}}>
                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <h2 >Endkunden</h2><br/>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow style={{"padding-left": "10%","padding-right": "10%","padding-top": "2.5%", "height":"5%"}}>

                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <img src={Error2} className="img-fluid" style={{"width":"20%","height":"20%"}} alt="" /><h2 style={{"margin-bottom":"5%"}}>Nichtzustellung mit aufwendiger Abholung an Abholorten</h2><br/>
                        </MDBCol>
                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <img src={Time} className="img-fluid" style={{"width":"20%","height":"20%"}} alt="" /><h2 style={{"margin-bottom":"5%"}}>Verspätete und unordnungsgemäße abgelegte Lieferungen</h2><br/>
                        </MDBCol>
                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <img src={Speech} className="img-fluid" style={{"width":"20%","height":"20%"}} alt="" /><h2 style={{"margin-bottom":"5%"}}>Keine Zustellung trotz Ankündigung und Anwesenheit</h2><br/>
                        </MDBCol>
                      </MDBRow>

                      </div>

                    </MDBContainer>
                  </MDBJumbotron>

                </section>

                <section id='Pakethubs'>
                  <MDBJumbotron fluid color="white" no-gutters style={{"padding-buttom": "0px"}}>
                    <MDBContainer className="Jumbotron" fluid no-gutters>
                      <MDBRow className="Sup2" style={{"background": "#4e0d1a"}}>
                        <MDBCol size="12" style={{"padding-bottom": "15px", "padding-left": "15px", "padding-right": "15px","padding-top": "15px"}}>
                          <h1 style={{"fontSize": "2em"}}>PAXET löst diese Probleme durch folgende Lösung</h1>
                          <h2 style={{"fontSize": "1.5em"}}>Einbezug privater Haushalte und Personen in den Zustellprozess </h2>
                          <img src={Hub} style={{"padding-bottom": "1.5%", "padding-top": "1.5%"}} className="img-fluid" alt="" />
                          <br/><h2 style={{"fontSize": "1.5em", "padding-bottom": "15px", "padding-left": "15px", "padding-right": "15px","padding-top": "15px"}}>Pakete können für eine Umgebung / Nachbarschaft gesammelt an ein Pakethub abgegeben werden, <br/> der als Paketstation oder Paketbote agiert </h2>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol size="12" style={{"padding-bottom": "15px"}}>
                          <img src={Withoutpaxet} style={{"padding-bottom": "1.5%", "padding-top": "1.5%"}} className="img-fluid" alt="" />
                          <h1 style={{"fontSize": "2em", "padding-top": "1.5%"}}>Heute ohne PAXET</h1>
                          <h2 style={{"fontSize": "1.5em"}}>Heutige Struktur von Paketfilialen oder Shops / Läden die Pakete annehmen</h2>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol size="12" style={{"padding-bottom": "15px"}}>
                          <img src={Arrow} style={{"padding-bottom": "1.5%", "padding-top": "1.5%"}} className="img-fluid" alt="" />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol size="12" style={{"padding-bottom": "15px"}}>
                          <img src={Withpaxet} style={{"padding-bottom": "1.5%", "padding-top": "1.5%"}} className="img-fluid" alt="" />
                          <h1 style={{"fontSize": "2em", "padding-top": "1.5%"}}>PAXET Vision</h1>
                          <h2 style={{"fontSize": "1.5em"}}>Flächendeckende Verbreitung von PAXET Pakethubs, die Pakete annehmen und verteilen</h2>
                        </MDBCol>
                      </MDBRow>
                    </MDBContainer>
                  </MDBJumbotron>
                </section>

                <section id='Vorteile-Pakethubs'>

                  <MDBJumbotron fluid color="white" no-gutters style={{"padding-top": "0px"}}>
                    <MDBContainer className="Jumbotron" fluid no-gutters  >
                      <MDBRow className="Sup2" style={{"background": "#4e0d1a" , "padding-top": "2%" , "padding-top": "2%" , "display":"flex"}}>
                        <MDBCol size="12">
                          <h1>Pakethubs</h1>
                        </MDBCol>
                      </MDBRow>
                      <div style={{"margin-bottom": "0px", "color":"white", "fontSize":"1em"}}>

                      <MDBRow style={{"background": "#4e0d1a" , "padding-top": "1.5em"}}>
                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <img src={Money} className="img-fluid" style={{"width":"20%","height":"20%"}} alt="" />
                          <h2>Verdienen eines zusätzlichen Taschengeldes</h2><br/>
                        </MDBCol>
                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <img src={World} className="img-fluid" style={{"width":"20%","height":"20%"}} alt="" />
                          <h2>Beitrag zur Entlastung der Umwelt</h2><br/>
                        </MDBCol>
                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <img src={Network} className="img-fluid" style={{"width":"20%","height":"20%"}} alt="" />
                          <h2 >Knüpfung von Kontakten zu der Nachbarschaft</h2><br/>
                        </MDBCol>
                      </MDBRow>
                      </div>

                    </MDBContainer>
                  </MDBJumbotron>
                </section>

                <section id='Funktionsweise'>
                  <MDBJumbotron fluid color="white" no-gutters style={{"padding-top": "0px"}}>
                    <MDBContainer className="Jumbotron" fluid no-gutters>
                      <MDBRow className="Sup2" style={{"background": "#4e0d1a"}}>
                        <MDBCol size="12" style={{"padding-bottom": "15px", "padding-left": "15px", "padding-right": "15px","padding-top": "15px"}}>
                          <h1 style={{"fontSize": "2em"}}>Doch wie funktioniert PAXET genau?</h1>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol size="12" style={{"padding-bottom": "15px"}}>
                          <img src={Paxetsystem} style={{"padding-bottom": "1.5%", "padding-top": "1.5%"}} className="img-fluid" alt="" />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol size="12" style={{"padding-bottom": "15px", "padding-left": "15px", "padding-right": "15px","padding-top": "15px"}}>
                          <img src={One} style={{"padding-bottom": "1.5%", "padding-top": "1.5%"}} className="img-fluid" alt="" />
                          <h2 style={{"fontSize": "1.5em"}}>Paketbote erhält über die PAXET-App die Information: Welcher PAXET Pakethub ist momentan bereit Pakete für die Umgebung anzunehmen? </h2>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol size="12" style={{"padding-bottom": "15px", "padding-left": "15px", "padding-right": "15px","padding-top": "15px"}}>
                          <img src={Two} style={{"padding-bottom": "1.5%", "padding-top": "1.5%"}} className="img-fluid" alt="" />
                          <h2 style={{"fontSize": "1.5em"}}>PAXET-Pakethub informiert den Endkunden über den Erhalt der Pakete</h2>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol size="12" style={{"padding-bottom": "15px", "padding-left": "15px", "padding-right": "15px","padding-top": "15px"}}>
                          <img src={Three} style={{"padding-bottom": "1.5%", "padding-top": "1.5%"}} className="img-fluid" alt="" />
                          <h2 style={{"fontSize": "1.5em"}}>Der Endkunde kann das Paket in dem vom Pakethub angegebenen Zeitraum abholen oder geliefert bekommen und ihm dazu noch eine monetäre Belohnung über die PAXET Applikation hinterlassen</h2>
                        </MDBCol>
                      </MDBRow>
                    </MDBContainer>
                  </MDBJumbotron>
                </section>

                <section id='Vorteile'>

                  <MDBJumbotron fluid color="white" no-gutters style={{"padding-top": "0px"}}>
                    <MDBContainer className="Jumbotron" fluid no-gutters  >
                      <MDBRow className="Sup2" style={{"background": "#4e0d1a" , "padding-top": "2%" , "padding-top": "2%" , "display":"flex"}}>
                        <MDBCol size="12">
                          <h1>Die Vorteile von PAXET im Überblick</h1>
                        </MDBCol>
                      </MDBRow>
                      <div style={{"margin-bottom": "0px", "color":"white", "fontSize":"1em"}}>

                      <MDBRow style={{"background": "#4e0d1a" , "padding-top": "1.5em"}}>
                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <h2>Paketdienste</h2><br/>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow style={{"padding-left": "10%","padding-top": "2.5%","padding-right": "10%", "height":"5%"}}>

                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <img src={Approved} className="img-fluid" style={{"width":"20%","height":"20%"}} alt="" /><h2 style={{"margin-bottom":"5%"}}>Erhöhung des Sendungsvolumen</h2><br/>
                        </MDBCol>
                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <img src={Approved} className="img-fluid" style={{"width":"20%","height":"20%"}} alt="" /><h2 style={{"margin-bottom":"5%"}}>Kosten- und Zeiteinsparung</h2><br/>
                        </MDBCol>
                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <img src={Approved} className="img-fluid" style={{"width":"20%","height":"20%"}} alt="" /><h2 style={{"margin-bottom":"5%"}}>Lieferversprechen werden eingehalten</h2><br/>
                        </MDBCol>
                      </MDBRow>

                      <MDBRow style={{"background": "#4e0d1a" , "padding-top": "1.5em"}}>
                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <h2>Paketboten</h2><br/>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow style={{"padding-left": "10%","padding-right": "10%", "padding-top": "2.5%", "height":"5%"}}>

                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em","padding-top": "2.5%"}}>
                          <img src={Approved} className="img-fluid" style={{"width":"20%","height":"20%"}} alt="" /><h2 style={{"margin-bottom":"5%"}}>100% <br/>Zustellsicherheit</h2><br/>
                        </MDBCol>
                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <img src={Approved} className="img-fluid" style={{"width":"20%","height":"20%"}} alt="" /><h2 style={{"margin-bottom":"5%"}}>Mehr Zustellungen in kürzerer Zeit</h2><br/>
                        </MDBCol>
                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <img src={Approved} className="img-fluid" style={{"width":"20%","height":"20%"}} alt="" /><h2 style={{"margin-bottom":"5%"}}>Keine Mehrmaligen Zustellversuche</h2><br/>
                        </MDBCol>
                      </MDBRow>

                      <MDBRow style={{"background": "#4e0d1a" , "padding-top": "1.5em"}}>
                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <h2 >Endkunden</h2><br/>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow style={{"padding-left": "10%","padding-right": "10%","padding-top": "2.5%", "height":"5%"}}>

                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <img src={Approved} className="img-fluid" style={{"width":"20%","height":"20%"}} alt="" /><h2 style={{"margin-bottom":"5%"}}>Garantierte Zustellsicherheit</h2><br/>
                        </MDBCol>
                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <img src={Approved} className="img-fluid" style={{"width":"20%","height":"20%"}} alt="" /><h2 style={{"margin-bottom":"5%"}}>Eliminierung langer Wartezeiten</h2><br/>
                        </MDBCol>
                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <img src={Approved} className="img-fluid" style={{"width":"20%","height":"20%"}} alt="" /><h2 style={{"margin-bottom":"5%"}}>Keine aufwendigen Abholungen mehr</h2><br/>
                        </MDBCol>
                      </MDBRow>
                      </div>
                      <MDBRow className="Sup2" style={{"background": "#7A1429" , "padding-top": "2%" , "padding-left": "5%","padding-right": "5%" , "display":"flex"}}>
                        <MDBCol size="12">
                          <h1>PAXET eliminiert die Probleme der Paketzustellung und letzten Meile für alle Beteiligten und schafft bedeutende Vorteile, die in Zukunft notwendig und ausschlaggebend sein werden!</h1>
                        </MDBCol>
                      </MDBRow>

                      <MDBRow className="Sup1" style={{"background": "#4e0d1a" , "padding-top": "2%" , "padding-left": "5%","padding-right": "5%" , "display":"flex"}}>
                        <MDBCol size="12">
                          <h1>Danke an unsere Partner!</h1>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow className="Sup1" style={{"background": "#7A1429" , "padding-top": "2%" , "padding-left": "5%","padding-right": "5%" , "display":"flex"}}>
                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <a href="https://www.gruendermotor.io"><img src={Pioniergeist} className="img-fluid" style={{"width":"50%","height":"50%", "padding-bottom": "2.5%"}} alt="" /></a><br/>
                        </MDBCol>
                        <MDBCol size="lg" md= "12" sm ="12" className="align-self-center" style={{"fontSize":"0.5em"}}>
                          <a href="https://www.gruendermotor.io"><img src={Grundermotor} className="img-fluid" style={{"width":"75%","height":"75%","padding-bottom": "2.5%"}} alt="" /></a><br/>
                        </MDBCol>
                      </MDBRow>


                    </MDBContainer>
                  </MDBJumbotron>

                </section>



				{/*	Hier wird der Cookie und deren Parameter bestimmt	*/}
				<CookieConsent
		    location="bottom"
        buttonText=<a href="" >Akzeptieren.</a>
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
