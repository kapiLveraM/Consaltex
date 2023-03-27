import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import location_img from "../assets/image/png/location.png";
import email_img from "../assets/image/png/email.png";
import bluar_left_side from "../assets/image/png/bluar_left_side.png";
import cutting_ring from "../assets/image/png/cutting_ring.png";
import Arrow from "./Arrow";
const WirSuchen = () => {
  return (
    <>
      <section className="flex-grow-1 d-flex py-5 position-relative mb-5">
        <img
          src={bluar_left_side}
          alt="bluar_left_side"
          className=" position-absolute start-0 top-50 und_die"
        />
        <img
          src={cutting_ring}
          alt="cutting_ring"
          className=" position-absolute cutting_ring_setup d-none d-lg-inline-block"
        />
        <Container>
          <Row className=" justify-content-between align-items-center">
            <Col lg="6" xl="4" className="">
              <div
                data-aos="fade-right"
                data-aos-offset="600"
                data-aos-easing="ease-in-sine"
                className=" "
              >
                <div className="d-flex justify-content-between align-items-center flex-column">
                  <p className=" comman_par">
                    Wir suchen nach Menschen, die wissen, was sie wollen, wohin
                    sie wollen und die ein klares Warum haben.
                  </p>
                  <div className=" pt-5 mt-md-5">
                    <div className=" d-flex align-items-center mt-4">
                      <img src={location_img} alt="location_img" />
                      <p className=" comman_par mb-0 ms-2 max_widht_361">
                        22143 Hamburg, Rahlstedter Bahnhofstraße 27-29{" "}
                      </p>
                    </div>
                    <div className=" d-flex align-items-center mt-4">
                      <img src={email_img} alt="email_img" />
                      <p className=" comman_par mb-0 ms-2 ">
                        info@consaltex.de{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="6" xl="5" className=" mt-5">
              <form
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-offset="300"
                className="from_box px-4 py-5"
              >
                <label
                  for="fname"
                  className=" fw-semibold fs_sm ff_Montserrat text-light mb-2"
                >
                  Vor- und Nachname
                </label>{" "} 
                <br />
                <input type="text" placeholder="" className="placeholder" />
                <label
                  for="fname"
                  className=" fw-semibold fs_sm ff_Montserrat text-light mb-2 mt-3"
                >
                  Email
                </label>{" "}
                <br />
                <input
                  type="text"
                  placeholder="example@mail.com "
                  className="placeholder text-light"
                />
                <label
                  for="fname"
                  className=" fw-semibold fs_sm ff_Montserrat text-light mb-2 mt-3"
                >
                  Erzähl uns von dir
                </label>{" "}
                <br />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="12"
                  className="text_area"
                ></textarea>
                <div className=" text-sm-center mt-3">
                  <button className="  comman_btn ff_PoiretOne fs_sm fw-normal text-light border-0 px-3 py-2 mt-3">
                    Absenden{" "}
                    <span className=" ms-3">
                      {" "}
                      <Arrow />{" "}
                    </span>
                  </button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WirSuchen;
