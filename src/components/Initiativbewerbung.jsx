import React from "react";
import { Container } from "react-bootstrap";
import VectorLine from "./VectorLine";
import blur_2 from "../assets/image/png/blur_2.png";
const Initiativbewerbung = () => {
  return (
    <>
      <section className=" py-5 position-relative">
        <Container>
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className=" comman_par text-center"
          >
            {" "}
            <span>
              {" "}
              <VectorLine />{" "}
            </span>{" "}
            Initiativbewerbung | Consaltex
          </p>
          <h2
            data-aos="fade-right"
            data-aos-offset="500"
            data-aos-easing="ease-in-sine"
            className=" fw-normal ff_PoiretOne fs_xl text-center text-light Werde_ein"
          >
            Werde ein Teil unserer Erfolgsgeschichte
          </h2>
        </Container>
        <img
          src={blur_2}
          alt="blur_2"
          className=" position-absolute end-0 Initiativbewerbung_setup d-none d-lg-inline-block"
        />
      </section>
    </>
  );
};

export default Initiativbewerbung;
