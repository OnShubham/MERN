import { Container, Row, Col, Image } from "react-bootstrap";

export const About = () => {
  return (
    <Container>
      <Row>
        <Col md={4} xs={10}>
          <Image src="/images/home.png" fluid />
        </Col>
        <Col md={6}>
          <h1>About Us</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Proin id ex justo. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Sed
            vulputate, odio id feugiat sollicitudin, nisi nulla fermentum nulla,
            ut rutrum urna dolor at magna.
          </p>
        <br />
          <p>
            Nunc at velit scelerisque, lacinia felis vel, dignissim orci. Nullam
            fringilla felis et est volutpat, vel tincidunt eros mattis. Donec et
            ligula at nunc eleifend bibendum eget id purus. Integer fermentum mi
            vitae nisi tempus auctor.
          </p>
          <br />
          <p>
            Donec vel justo sit amet metus scelerisque sodales. Proin vehicula
            ex ut arcu tincidunt rutrum. Maecenas maximus justo ac leo
            condimentum, eget faucibus purus faucibus.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
