import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Wie_Zum from "../assets/image/png/Wie_Zum.png";
import VectorLine from "./VectorLine";
import Massiven_Zum from "../assets/image/png/Massiven_Zum.png";
import Wieso_Zum from "../assets/image/png/Wieso_Zum.png";
import Arrow from "./Arrow";
const Videos = () => {
  return (
    <>
      <section className=" py-5 my-lg-5">
        <Container>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-offset="1000"
            data-aos-duration="1500"
          >
            <p className=" comman_par text-center">
              {" "}
              <span>
                {" "}
                <VectorLine />{" "}
              </span>{" "}
              Videos
            </p>
            <h2 className=" text-center comman_heading">Aktuelle Themen</h2>
          </div>
          <Row className=" justify-content-center align-items-center mt-4">
            <Col md="6" lg="4" className=" pt-4">
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                // data-aos-easing="linear"
                data-aos-duration="1000"
                className="Videos_card"
              >
                <img src={Wie_Zum} alt="Wie_Zum" className=" w-100" />
                <div className=" px-3 py-4">
                  <p className=" comman_par font_style pb-1 mb-0">
                    Oct.05, 2022
                  </p>
                  <h2 className=" fw-semibold ff_Montserrat fs_md text-light mb-3">
                    Wie du mit Leichtigkeit Neukunden für dein Hochpreis-Angebot
                    gewinnst
                  </h2>
                  <a
                    href="#"
                    className=" fw-semibold fs_md ff_Montserrat color_rgb"
                  >
                    Zum Video
                  </a>
                </div>
              </div>
            </Col>
            <Col md="6" lg="4" className=" pt-4">
              <div
                data-aos="fade-down"
                // data-aos-easing="linear"
                data-aos-duration="1000"
                className="Videos_card"
              >
                <img src={Massiven_Zum} alt="Massiven_Zum" className=" w-100" />
                <div className=" px-3 py-4">
                  <p className=" comman_par font_style pb-1 mb-0">
                    Oct.05, 2022
                  </p>
                  <h2 className=" fw-semibold ff_Montserrat fs_md text-light mb-3">
                    Massiven Output durch deinen ersten Vertriebler
                  </h2>
                  <div className=" pt-4">
                    <a
                      href="#"
                      className=" fw-semibold fs_md ff_Montserrat color_rgb "
                    >
                      Zum Video
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="500"
              md="6"
              lg="4"
              className=" pt-4"
            >
              <div className="Videos_card">
                <img src={Wieso_Zum} alt="Wieso_Zum" className=" w-100" />
                <div className=" px-3 py-4">
                  <p className=" comman_par font_style pb-1 mb-0">
                    Oct.12, 2022
                  </p>
                  <h2 className=" fw-semibold ff_Montserrat fs_md text-light mb-3">
                    Wieso du als Agenturinhaber UNBEDINGT einheitliche Pakete
                    haben solltest!
                  </h2>
                  <a
                    href="#"
                    className=" fw-semibold fs_md ff_Montserrat color_rgb"
                  >
                    Zum Video
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <div className=" text-center max_widh t_btn mt-4 mt-lg-5">
            <button className="  comman_btn ff_PoiretOne fs_sm fw-normal text-light border-0 px-3 py-2 mt-3">
              Mehr ansehen
              <span className=" ms-3">
                {" "}
                <Arrow />{" "}
              </span>
            </button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Videos;
