import React from "react";
import { Container } from "react-bootstrap";
import play_btn from "../assets/image/png/Play.png";
import second_Hme_Img from "../assets/image/png/second_Hme_Img.png";
import bluar_left_side from "../assets/image/png/bluar_left_side.png";
import Image_11 from "../assets/image/png/image 11.png";
import blur_2 from "../assets/image/png/blur_2.png";
const SitNec = () => {
  return (
    <>
      <section className=" py-5 position-relative">
        <img
          src={blur_2}
          alt="blur_2"
          className=" position-absolute bottom-0 end-0"
        />
        <img
          src={bluar_left_side}
          alt="bluar_left_side"
          className=" position-absolute d-none d-md-inline-block bluar_setup"
        />
        <img
          src={Image_11}
          alt="Image_11"
          className=" position-absolute image_ring d-none d-md-inline-block"
        />
        <Container>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            data-aos-duration="2000"
            className=" bg_dark_green_16"
          >
            <div className="position-relative">
              <img
                src={second_Hme_Img}
                alt="second_Hme_Img"
                className=" w-100"
              />
              <a href="#">
                <img
                  src={play_btn}
                  alt="play_btn"
                  className=" position-absolute play_btn"
                />
              </a>
            </div>
            <p className=" comman_par px-3 pb-3 pt-2">
              Sit nec cras varius leo sit consectetur eros. Odio egestas
              malesuada interdum scelerisque sed facilisis tincidunt arcu. Ut
              scelerisque sodales senectus feugiat sem nec consequat. Sed erat
              aliquet euismod sed pellentesque ut ornare integer risus. Nam
              varius et scelerisque amet a suscipit felis. Amet odio aliquam
              orci et et ac. Quam non neque condimentum consequat augue odio
              malesuada. Est sit faucibus egestas pretium ipsum elementum turpis
              ultrices lacus. Leo aliquam, orci, in facilisis venenatis enim.
              Feugiat dictumst eget amet eget. Molestie mollis risus porta a
              magna a. Pellentesque at enim ultricies tortor enim.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SitNec;
