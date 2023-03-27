import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import fackbook from "../assets/image/svg/Facebook.svg";
import tiktok from "../assets/image/svg/tiktok.svg";
import in_img from "../assets/image/svg/linked.svg";
import instagram from "../assets/image/svg/Instagram.svg";
import youtube from "../assets/image/svg/YouTube.svg";
const TopNav = (props) => {
  return (
    <>
      <section className=" bg_green_3f py-3 position-relative z_index_10">
        <Container>
          <Row className=" justify-content-lg-between justify-content-sm-center">
            <Col md="9" lg="7" xl="6">
              <div className=" d-sm-flex align-items-center ">
                <p className="mb-0 fs_xsm ff_Montserrat fw-normal text-light text-center text-sm-start">
                  22143 Hamburg, Rahlstedter Bahnhofstraße 27-29 {""}
                </p>
                <p className="mb-0 fs_xsm ff_Montserrat fw-normal text-light boder_left ps-2 ms-2 text-center text-sm-start">
                  info@consaltex.de
                </p>
              </div>
            </Col>
            <Col sm="5" md="4" lg="3" xl="2" className=" mt-3 mt-lg-0">
              <div className=" d-flex gap-4 align-items-center justify-content-center">
                <a href="#" className={props.img_none}>
                  <img src={fackbook} alt="fackbook" />
                </a>
                <a href="#" className={props.img_none}>
                  <img src={tiktok} alt="tiktok" />
                </a>
                <a href="#" className={props.img_none}>
                  <img src={in_img} alt="in_img" />
                </a>
                <a href="#" className={props.img_none}>
                  <img src={instagram} alt="instagram" />
                </a>
                <a href="#" className={props.img_none}>
                  <img src={youtube} alt="youtube" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TopNav;
