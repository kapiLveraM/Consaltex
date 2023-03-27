import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import VectorLine from "./VectorLine";
import sads_1 from "../assets/image/png/sdas 1.png";
import bluar_left_side from "../assets/image/png/bluar_left_side.png";
import cubegreen from "../assets/image/png/Cube(green).png";
import cricle_ring from "../assets/image/png/circle_ring_according.png";
import image_12 from "../assets/image/png/image 12.png";
function FlushExample() {
  return (
    <section className=" py-5 position-relative">
      <img
        src={cubegreen}
        alt="cubegreen"
        className=" position-absolute cubegreen d-none d-lg-inline-block"
      />
      <img
        src={bluar_left_side}
        alt="bluar_left_side"
        className=" position-absolute bluar_left_side_Accordion d-none d-lg-inline-block"
      />
      <img
        src={cricle_ring}
        alt="cricle_ring"
        className=" position-absolute end-0 top-0 d-none d-lg-inline-block cricle_ring"
      />
      <Container>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <p className=" comman_par text-center">
            {" "}
            <span>
              {" "}
              <VectorLine />{" "}
            </span>{" "}
            Du hast noch Fragen?
          </p>
          <h2 className=" fw-normal fs_xl ff_PoiretOne text-light text-center max_widht_Häufig pb-5">
            Häufig gestellte Fragen
          </h2>
        </div>
        <div className="max_width_Accordion">
          <Accordion defaultActiveKey="0" flush>
            <div
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-duration="600"
            >
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Was unterscheidet euch von anderen Agenturen?
                </Accordion.Header>
                <Accordion.Body>
                  Consaltex ist keine Agentur, sondern eine ganzheitliche
                  Unternehmensberatung. Wir helfen dir nicht nur im Marketing,
                  im Vertrieb oder in der Kundenbetreuung, sondern betrachten
                  die Geschäftsprozesse in ihrem Zusammenhang und optimieren sie
                  von Grund auf. Das bedeutet: Wir verstehen uns als Partner,
                  nicht als Dienstleister und laufen nicht nur die extra Meile,
                  sondern wenn nötig einen ganzen Marathon, damit dein
                  Unternehmen zu einer echten Umsatzmaschine wird!
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="700"
              data-aos-duration="900"
            >
              <Accordion.Item eventKey="1">
                <Accordion.Header> Brauche ich eure Hilfe?</Accordion.Header>
                <Accordion.Body>
                  Consaltex ist keine Agentur, sondern eine ganzheitliche
                  Unternehmensberatung. Wir helfen dir nicht nur im Marketing,
                  im Vertrieb oder in der Kundenbetreuung, sondern betrachten
                  die Geschäftsprozesse in ihrem Zusammenhang und optimieren sie
                  von Grund auf. Das bedeutet: Wir verstehen uns als Partner,
                  nicht als Dienstleister und laufen nicht nur die extra Meile,
                  sondern wenn nötig einen ganzen Marathon, damit dein
                  Unternehmen zu einer echten Umsatzmaschine wird!
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="700"
              data-aos-duration="1200"
            >
              <Accordion.Item eventKey="2">
                <Accordion.Header>Wie könnt ihr mir helfen?</Accordion.Header>
                <Accordion.Body>
                  Consaltex ist keine Agentur, sondern eine ganzheitliche
                  Unternehmensberatung. Wir helfen dir nicht nur im Marketing,
                  im Vertrieb oder in der Kundenbetreuung, sondern betrachten
                  die Geschäftsprozesse in ihrem Zusammenhang und optimieren sie
                  von Grund auf. Das bedeutet: Wir verstehen uns als Partner,
                  nicht als Dienstleister und laufen nicht nur die extra Meile,
                  sondern wenn nötig einen ganzen Marathon, damit dein
                  Unternehmen zu einer echten Umsatzmaschine wird!
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="700"
              data-aos-duration="1400"
            >
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Kann man im Internet noch neue Kunden gewinnen?
                </Accordion.Header>
                <Accordion.Body>
                  Consaltex ist keine Agentur, sondern eine ganzheitliche
                  Unternehmensberatung. Wir helfen dir nicht nur im Marketing,
                  im Vertrieb oder in der Kundenbetreuung, sondern betrachten
                  die Geschäftsprozesse in ihrem Zusammenhang und optimieren sie
                  von Grund auf. Das bedeutet: Wir verstehen uns als Partner,
                  nicht als Dienstleister und laufen nicht nur die extra Meile,
                  sondern wenn nötig einen ganzen Marathon, damit dein
                  Unternehmen zu einer echten Umsatzmaschine wird!
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="700"
              data-aos-duration="1600"
            >
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Gibt es eine eins-zu-eins Betreuung?
                </Accordion.Header>
                <Accordion.Body>
                  Consaltex ist keine Agentur, sondern eine ganzheitliche
                  Unternehmensberatung. Wir helfen dir nicht nur im Marketing,
                  im Vertrieb oder in der Kundenbetreuung, sondern betrachten
                  die Geschäftsprozesse in ihrem Zusammenhang und optimieren sie
                  von Grund auf. Das bedeutet: Wir verstehen uns als Partner,
                  nicht als Dienstleister und laufen nicht nur die extra Meile,
                  sondern wenn nötig einen ganzen Marathon, damit dein
                  Unternehmen zu einer echten Umsatzmaschine wird!
                </Accordion.Body>
              </Accordion.Item>
            </div>
          </Accordion>
          <div className=" text-center pt-5 position-relative">
            <img src={sads_1} alt="sads_1" className="w_sm_100" />
          </div>
        </div>
      </Container>
      <img
        src={image_12}
        alt="image_12"
        className=" position-absolute end-0 bottom_image_12_setup d-none d-lg-inline-block"
      />
    </section>
  );
}

export default FlushExample;
