import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBNavLink,
  MDBTable,
  MDBTableBody
} from "mdbreact";
import { NavLink, Link } from "react-router-dom";

import "./Home.css";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <MDBContainer fluid no-gutters style={{ "padding-left": "5%" }}>
          <MDBRow className="align-self-center">
            <MDBCol size="lg" md="12" sm="12" className="align-self-center">
              <MDBTable borderless responsive>
                <MDBTableBody className="Footer">
                  <div className="Footer">
                    <tr>
                      <td>
                        <i class="fas fa-phone fa-3x" />
                      </td>
                      <td>
                        {" "}
                        <h2>
                          Telefon: <br />
                          +49 1525 3205956
                        </h2>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i class="fas fa-envelope fa-3x" />{" "}
                      </td>
                      <td>
                        <h2>
                          {" "}
                          E-Mail Adresse: <br />
                          <a
                            style={{ color: "lightgrey" }}
                            href="mailto:hey@paxet.de"
                          >
                            <h2> hey@paxet.de </h2>{" "}
                          </a>
                        </h2>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <i class="fab fa-instagram fa-3x" />
                      </td>
                      <td>
                        {" "}
                        <h2>Instagram:</h2>
                        <a
                          style={{ color: "lightgrey" }}
                          href="https://www.instagram.com/paxetofficial/"
                        >
                          <h2> paxetofficial </h2>{" "}
                        </a>
                      </td>
                    </tr>
                  </div>
                </MDBTableBody>
              </MDBTable>
            </MDBCol>
            <MDBCol size="lg" md="12" sm="12" className="align-self-center">
              <MDBTable borderless responsive>
                <MDBTableBody className="Footer">
                  <div className="Footer">
                    <tr>
                      <td>
                        <h2>
                          <h1>PAXET -</h1> Die Paketzustellung von morgen
                        </h2>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <NavLink style={{ color: "white" }} to="/impressum">
                          <h2> Impressum </h2>{" "}
                        </NavLink>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <NavLink style={{ color: "white" }} to="/contact">
                          <h2> Datenschutz </h2>{" "}
                        </NavLink>
                      </td>
                    </tr>
                  </div>
                </MDBTableBody>
              </MDBTable>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
