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
        <MDBContainer className="grid">
          <MDBTable borderless responsive>
            <MDBTableBody className="Footer">
              <div className="Footer align-self-center">
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
                  <td />
                  <td>
                    <h2 style={{ "padding-left": "25%" }}>
                      <h1>PAXET</h1> Die Paketzustellung von morgen
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

                  <td />
                  <td>
                    <NavLink style={{ color: "white" }} to="/contact">
                      <h2 style={{ "padding-left": "25%" }}> Impressum </h2>{" "}
                    </NavLink>
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
                  <td />
                  <td>
                    <NavLink style={{ color: "white" }} to="/contact">
                      <h2 style={{ "padding-left": "25%" }}> Datenschutz </h2>{" "}
                    </NavLink>
                  </td>
                </tr>
              </div>
            </MDBTableBody>
          </MDBTable>
        </MDBContainer>
      </div>
    );
  }
}
