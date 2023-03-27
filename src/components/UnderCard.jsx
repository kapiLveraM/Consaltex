import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UnderCardData from "./UnderCardData";
import Cube_under from "../assets/image/png/Cube_under.png";
const UnderCard = () => {
  return (
    <>
      <section className=" py-5 my-md-5 position-relative z_index_10">
        <img
          src={Cube_under}
          alt="Cube_under"
          className=" position-absolute  d-none d-md-inline-block Cube_under_setup"
        />
        <Container>
          <h2 className=" ff_PoiretOne fs_xl fw-normal text-light mb-4">
            Kundenstimmen
          </h2>
          <Row>
            {UnderCardData.map((value) => {
              return (
                <Col md="6" lg="4" className=" px-2">
                  <div
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className="  bg_dark_green_16"
                  >
                    <div className=" position-relative">
                      <a href="#">
                        <img
                          src={value.play_btn}
                          alt="play_btn"
                          className=" position-absolute play_btn"
                        />
                      </a>
                      <img
                        src={value.Img}
                        alt="Die_Metarec"
                        className=" w-100"
                      />
                    </div>
                    <p className=" comman_par pt-3 pb-4 px-3">{value.par}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default UnderCard;
