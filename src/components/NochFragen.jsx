import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import VectorLine from "./VectorLine";
import location_img from "../assets/image/png/location.png";
import email_img from "../assets/image/png/email.png";
import footer_blur from "../assets/image/png/footer_blur.png";
import { InlineWidget, PopupWidget } from "react-calendly";

const NochFragen = () => {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://assets.calendly.com/assets/external/widget.js";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  return (
    <>
      <section className=" py-5 position-relative z_index_10">
        <img
          src={footer_blur}
          alt="footer_blur"
          className=" position-absolute end-0 z_index_n_1 top_n_98 d-none d-lg-inline-block"
        />
        <Container>
          <Row className="justify-content-center">
            <Col lg="6">
              <div
                data-aos="fade-right"
                data-aos-offset="400"
                data-aos-easing="ease-in-sine"
              >
                <p className=" comman_par ">
                  {" "}
                  <span>
                    {" "}
                    <VectorLine />{" "}
                  </span>{" "}
                  Noch Fragen?
                </p>
                <h2 className=" ff_PoiretOne fs_xl fw-normal text-light">
                  Jetzt Erstgespräch vereinbaren
                </h2>
                <p className=" comman_par max_widht_365">
                  Fülle das Formular aus und ein Experte aus unserem Team wird
                  sich zum ausgewählten Zeitfenster bei dir melden.
                </p>
                <div className="boder_line ms-sm-5 mt-5"></div>
                <div className=" d-flex align-items-center mt-4">
                  <img src={location_img} alt="location_img" />
                  <p className=" comman_par mb-0 ms-2 max_widht_361">
                    22143 Hamburg, Rahlstedter Bahnhofstraße 27-29{" "}
                  </p>
                </div>
                <div className=" d-flex align-items-center mt-4">
                  <img src={email_img} alt="email_img" />
                  <p className=" comman_par mb-0 ms-2 max_widht_361">
                    info@consaltex.de{" "}
                  </p>
                </div>
              </div>
            </Col>
            <Col className="mt-5 mt-lg-0" md="8" lg="6">
              <InlineWidget
                // color="#00a2ff"
                // text="Request a Demo"
                // textColor="#ffffff"
                url="https://calendly.com/consaltexgmbh/erstgesprach-15-minuten?hide_event_type_details=1&background_color=011400&text_color=ffffff&primary_color=05502e"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default NochFragen;
