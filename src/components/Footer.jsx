import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/image/svg/Logo.svg";
const Footer = () => {
  return (
    <>
      <footer className=" pt-5 pb-4 bg_dark_0 position-relative z_index_10">
        <Container>
          <Row className=" flex-column-reverse flex-md-row ">
            <Col md="3">
              <div data-aos="fade-up" data-aos-duration="3000">
                <ul className=" ps-0 pt-4 pt-md-0">
                  <li>
                    <a href="#" className=" comman_par">
                      Home
                    </a>
                  </li>
                  <li className=" my-3">
                    <a href="#" className=" comman_par">
                      Kundenrezensionen
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" comman_par">
                      We´re hiring!
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="6">
              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className=" text-center"
              >
                <img src={logo} alt="logo" />
                <p className=" comman_par text_par_setup pt-2">
                  Der Sparringspartner für die Skalierung deines Unternehmens.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="boder_top mt-3"></div>
        <p className=" text-center comman_par mb-0 mt-3">
          Impressum | Datenschutz | AGBS
        </p>
      </footer>
    </>
  );
};

export default Footer;
