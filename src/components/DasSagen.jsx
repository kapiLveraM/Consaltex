import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Die_Metarec from "../assets/image/png/Die_Metarec.png";
import play_btn from "../assets/image/png/Play.png";
import blur_2 from "../assets/image/png/blur_2.png";
import cuting_ring_img from "../assets/image/png/cutting_ring.png";
import VectorLine from "./VectorLine";
import Arrow from "./Arrow";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const DasSagen = () => {
  const Btnslick = useRef();
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <section className=" py-5 mt_50 position-relative">
        <img
          src={cuting_ring_img}
          alt="cuting_ring_img"
          className=" position-absolute end-0 top_40 d-none d-lg-inline-block"
        />
        <img
          src={blur_2}
          alt="blur_2"
          className=" position-absolute end-0 z_index_n_1 top_n_30 d-none d-lg-inline-block"
        />
        <Container>
          <Row>
            <Col
              data-aos="fade-up"
              data-aos-offset="900"
              data-aos-duration="900"
              xl="8"
            >
              <Row>
                {" "}
                <Slider ref={Btnslick} {...settings}>
                  <Col lg="6" className=" px-2">
                    <div className="Die_Metarec_card">
                      <div className=" position-relative">
                        <a href="#">
                          <img
                            src={play_btn}
                            alt="play_btn"
                            className=" position-absolute play_btn"
                          />
                        </a>
                        <img
                          src={Die_Metarec}
                          alt="Die_Metarec"
                          className=" w-100"
                        />
                      </div>
                      <p className=" comman_par pt-3 pb-4 px-3">
                        Die Metarec GmbH unterstützt unter der Leitung des
                        Geschäftsführers Christian Schmitt kleine- und
                        Mittelständische Unternehmen beim Gewinnen von
                        qualifizierten Fachkräfte zur beseitigung des
                        Fachkräftemangels
                      </p>
                    </div>
                  </Col>
                  <Col lg="6" className=" px-2">
                    <div className="Die_Metarec_card">
                      <div className=" position-relative">
                        <a href="#">
                          <img
                            src={play_btn}
                            alt="play_btn"
                            className=" position-absolute play_btn"
                          />
                        </a>
                        <img
                          src={Die_Metarec}
                          alt="Die_Metarec"
                          className=" w-100"
                        />
                      </div>
                      <p className=" comman_par pt-3 pb-5 px-3">
                        B2B-Reels unterstützt unter der Leitung des
                        Geschäftsführers Simon Günther Unternehmen dabei,
                        effizient & einfach auf TikTok, Instagram und YouTube zu
                        wachsen.
                      </p>
                    </div>
                  </Col>
                  <Col lg="6" className=" px-2">
                    <div className="Die_Metarec_card">
                      <div className=" position-relative">
                        <a href="#">
                          <img
                            src={play_btn}
                            alt="play_btn"
                            className=" position-absolute play_btn"
                          />
                        </a>
                        <img
                          src={Die_Metarec}
                          alt="Die_Metarec"
                          className=" w-100"
                        />
                      </div>
                      <p className=" comman_par pt-3 pb-4 px-3">
                        Die Metarec GmbH unterstützt unter der Leitung des
                        Geschäftsführers Christian Schmitt kleine- und
                        Mittelständische Unternehmen beim Gewinnen von
                        qualifizierten Fachkräfte zur beseitigung des
                        Fachkräftemangels
                      </p>
                    </div>
                  </Col>
                </Slider>
              </Row>
            </Col>
            <Col
              data-aos="fade-down"
              data-aos-offset="900"
              data-aos-duration="900"
              xl="4"
            >
              <div className=" d-flex flex-column-reverse flex-xl-column">
                <div className=" pt-4">
                  <p className=" comman_par ">
                    {" "}
                    <span>
                      {" "}
                      <VectorLine />{" "}
                    </span>{" "}
                    Das sagen unsere Kunden
                  </p>
                  <h2 className=" comman_heading">Testimonials</h2>
                  <p className=" comman_par">
                    Unsere Kunden berichten über die Zusammenarbeit
                  </p>
                  <div className=" mt-4">
                    <button className="  comman_btn ff_PoiretOne fs_sm fw-normal text-light border-0 px-3 py-2 mt-3">
                      Mehr ansehen
                      <span className=" ms-3">
                        {" "}
                        <Arrow />{" "}
                      </span>
                    </button>
                  </div>
                </div>
                <div className=" d-flex justify-content-between justify-content-lg-start mt-xl-5 pt-5">
                  <div
                    onClick={() => Btnslick.current.slickPrev()}
                    className=" bg_dark_green_36 py-2 px-3 d-inline-block cursor_pointer"
                  >
                    <ArrowLeft />
                  </div>
                  <div
                    onClick={() => Btnslick.current.slickNext()}
                    className=" bg_dark_green_36 py-2 px-3 d-inline-block ms-3 cursor_pointer"
                  >
                    <ArrowRight />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DasSagen;
