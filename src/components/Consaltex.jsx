import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import VectorLine from "./VectorLine";
import Rene_Jozic from "../assets/image/png/Rene Jozic.png";
import in_img from "../assets/image/png/in.png";
import Selmei from "../assets/image/png/selmei.png";
import David from "../assets/image/png/David.png";
import blur_left from "../assets/image/png/bluar_left_side.png";
import image_12 from "../assets/image/png/image 12.png";
const Consaltex = () => {
  return (
    <>
      <section className=" py-5 mt-md-5 position-relative">
        <img
          src={image_12}
          alt="image_12"
          className=" position-absolute top-0 d-none d-lg-inline-block"
        />
        <img
          src={blur_left}
          alt="blur_left"
          className=" position-absolute z_index_n_1 top_20  d-none d-lg-inline-block"
        />
        <Container>
          <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <p className=" comman_par text-center">
              {" "}
              <span>
                {" "}
                <VectorLine />{" "}
              </span>{" "}
              Consaltex
            </p>
            <h2 className=" comman_heading text-light text-center">
              Unser Team
            </h2>
          </div>
          <Row className=" pt-5 justify-content-center ">
            <Col
              data-aos="fade-right"
              data-aos-offset="800"
              data-aos-duration="800"
              md="6"
              lg="4"
              className=" pt-4"
            >
              <div className=" bg_dark_green_16">
                <img src={Rene_Jozic} alt="Rene_Jozic" className=" w-100" />
                <div className=" d-flex align-items-center justify-content-between px-3 pt-3 pb-1">
                  <div className="">
                    <h2 className=" fw-semibold fs_lg ff_Montserrat text-light">
                      Rene Jozic
                    </h2>
                    <p className=" fs_sm fw-normal ff_Montserrat text-light mb-0">
                      Founder
                    </p>
                  </div>
                  <img src={in_img} alt="in_img" className="" />
                </div>
              </div>
            </Col>
            <Col
              data-aos="zoom-in-up"
              data-aos-offset="800"
              data-aos-duration="900"
              md="6"
              lg="4"
              className=" pt-4"
            >
              <div className=" bg_dark_green_16">
                <img src={Selmei} alt="Selmei" className=" w-100" />
                <div className=" d-flex align-items-center justify-content-between px-3 pt-3 pb-1">
                  <div className="">
                    <h2 className=" fw-semibold fs_lg ff_Montserrat text-light">
                      Selmei Nejahsie
                    </h2>
                    <p className=" fs_sm fw-normal ff_Montserrat text-light mb-0">
                      Co-Founder
                    </p>
                  </div>
                  <img src={in_img} alt="in_img" className="" />
                </div>
              </div>
            </Col>
            <Col
              data-aos="fade-left"
              data-aos-offset="800"
              data-aos-duration="900"
              md="6"
              lg="4"
              className=" pt-4"
            >
              <div className=" bg_dark_green_16">
                <img src={David} alt="David" className=" w-100" />
                <div className=" d-flex align-items-center justify-content-between px-3 pt-3 pb-1">
                  <div className="">
                    <h2 className=" fw-semibold fs_lg ff_Montserrat text-light">
                      David Saberi
                    </h2>
                    <p className=" fs_sm fw-normal ff_Montserrat text-light mb-0">
                      Sales Manager
                    </p>
                  </div>
                  <img src={in_img} alt="in_img" className="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Consaltex;
