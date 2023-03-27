import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import VectorLine from "./VectorLine";
import hero_img from "../assets/image/png/hero_img.png";
import bular_img from "../assets/image/png/bluar_right_side.png";
import bluar_left_side from "../assets/image/png/bluar_left_side.png";
import CubeOtherperpective from "../assets/image/png/Cube Other perpective.png";
import crical from "../assets/image/png/crical.png";
import boll from "../assets/image/png/boll.png";
import Arrow from "./Arrow";
const WieTestosteron = () => {
  return (
    <>
      <section className=" flex-grow-1 d-flex align-items-center pt-5 pb-5">
        <img
          src={bular_img}
          alt="bular_img"
          className=" position-absolute top-0 end-0 max_widht_right_bular_img d-none d-lg-inline-block"
        />
        <Container>
          <p
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            className=" comman_par text-center max_width_wie"
          >
            {" "}
            <span>
              {" "}
              <VectorLine />{" "}
            </span>{" "}
            Wie Testosteron für deine Agentur
          </p>
          <h2
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="700"
            className=" ff_PoiretOne fs_xxl fw-normal text-light text-end"
          >
            Wir verhelfen{" "}
            <span className=" bg_red boder_radius px-4">Agenturen</span>
          </h2>
          <h2
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="800"
            className=" ff_PoiretOne fs_xxl fw-normal text-light text-end max_width_zu"
          >
            zu Rekordumsätzen
          </h2>
          <Row className=" align-items-center justify-content-center position-relative">
            <img
              data-aos="zoom-in-right"
              data-aos-offset="500"
              data-aos-duration="500"
              src={CubeOtherperpective}
              alt="CubeOtherperpective"
              className=" position-absolute CubeOther_setup d-none d-md-inline-block"
            />

            <Col sm="9" md="5">
              <img
                data-aos="zoom-in-right"
                data-aos-offset="500"
                data-aos-duration="500"
                src={hero_img}
                alt="hero_img"
                className=" w-100 pt-5"
              />
            </Col>
            <Col
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="800"
              md="6"
              className="min_hight_par pt-4 pt-md-0"
            >
              <p className=" comman_par max_widht_zunde m-sm-auto m-md-0">
                Zünde die Wachstumsrakete und katapultiere deinen Umsatz in eine
                neue Dimension!
              </p>
              <div className=" text-sm-center text-md-start max_widht_btn">
                <button className="  comman_btn ff_PoiretOne fs_sm fw-normal text-light border-0 px-3 py-2 mt-3">
                  Sprich jetzt mit unserem Team{" "}
                  <span className=" ms-3">
                    {" "}
                    <Arrow />{" "}
                  </span>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={bluar_left_side}
          alt="bluar_left_side"
          className=" position-absolute bluar_left_side_setup d-none d-lg-inline-block"
        />
        <img
          src={crical}
          alt="crical"
          className=" position-absolute crical_setup d-none d-lg-inline"
        />
        <img
          src={boll}
          alt="boll"
          className=" position-absolute boll_setup d-none d-lg-inline-block"
        />
      </section>
    </>
  );
};

export default WieTestosteron;
