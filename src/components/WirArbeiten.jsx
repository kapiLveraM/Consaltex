import React from "react";
import VectorLine from "./VectorLine";
import { Container, Row } from "react-bootstrap";
import Hgk from "../assets/image/png/Hgk.png";
import wetrust from "../assets/image/png/weTrust.png";
import Labmarkting from "../assets/image/png/Labmarkting.png";
import fibeka from "../assets/image/png/fibeka.png";
import KattanMedia from "../assets/image/png/KattanMedia.png";
import blur_2 from "../assets/image/png/blur_2.png";
const WirArbeiten = () => {
  return (
    <>
      <section className=" py-5 position-relative mb-4">
        <img
          src={blur_2}
          alt="blur_2"
          className=" position-absolute end-0 top_n_blur_2 d-none d-md-inline-block"
        />
        <Container>
          <p className=" comman_par text-center">
            {" "}
            <span>
              {" "}
              <VectorLine />{" "}
            </span>{" "}
            Wir arbeiten mit den besten
          </p>
          <div className=" overflow_x_scroll pt-4">
            <div className=" d-flex align-items-center justify-content-between min_hight_1170 ">
              <div className="">
                {" "}
                <img src={Hgk} alt="Hgk" className=" w-100" />
              </div>
              <div className="">
                {" "}
                <img className=" w-100" src={wetrust} alt="wetrust" />
              </div>
              <div className="">
                <img className=" w-100" src={Labmarkting} alt="Labmarkting" />
              </div>
              <div className="">
                <img className=" w-100" src={fibeka} alt="fibeka" />
              </div>
              <div className=" position-relative z_index_10">
                <img className=" w-100" src={KattanMedia} alt="KattanMedia" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default WirArbeiten;
