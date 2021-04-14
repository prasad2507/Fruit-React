import React from "react";
import { Card, Col, Container, Navbar, Row, Table } from "react-bootstrap";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Container>
        <Navbar bg="dark">
          <Navbar.Brand href="#" style={{ color: "white" }}>
            Healthy Fruits
          </Navbar.Brand>
        </Navbar>
        {/*  */}
        <div>
          <Card>
            <Row>
              <Col md={6}>
                <div className="text-center posRel">
                  <h1 className="textRed">Lorem Ipsum</h1>
                  <p className="mt-3 px-5">
                    Donec sollicitudin molestie malesuada. Vestibulum ac diam
                    sit amet quam vehicula elementum sed sit amet dui
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <img
                  src="https://image.freepik.com/free-photo/fresh-fruits-isolated-white-background_144627-10547.jpg"
                  style={{ height: "100%", width: "100%" }}
                  alt="mango"
                />
              </Col>
            </Row>
            {/* 2nd */}
            <Row>
              <Col md={6}>
                <img
                  src="https://image.freepik.com/free-photo/juicy-ripe-pineapple-white-background_320146-62.jpg"
                  style={{ height: "100%", width: "100%" }}
                  alt="mango"
                />
              </Col>
              <Col md={6}>
                <div className="text-center posRel">
                  <h1 className="textRed">Lorem Ipsum</h1>
                  <p className="mt-3 px-5">
                    Donec sollicitudin molestie malesuada. Vestibulum ac diam
                    sit amet quam vehicula elementum sed sit amet dui
                  </p>
                </div>
              </Col>
            </Row>
            {/* 3rd */}
            <Row>
              <Col md={6}>
                <div className="text-center posRel">
                  <h1 className="textRed">Lorem Ipsum</h1>
                  <p className="mt-3 px-5">
                    Donec sollicitudin molestie malesuada. Vestibulum ac diam
                    sit amet quam vehicula elementum sed sit amet dui
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <img
                  src="https://image.freepik.com/free-photo/ripe-avocado-white-wall_62193-1357.jpg"
                  style={{ height: "100%", width: "100%" }}
                  alt="mango"
                />
              </Col>
            </Row>
          </Card>
        </div>
        {/* table */}
        <div className="bgWhite">
          <Col md={11} className="mx-auto">
            <Card style={{ borderRadius: "20px" }}>
              <Card.Body>
                <h3>Nutrition Fact</h3>
                <Row className="mt-3 mb2 ">
                  <Col md={6}>
                    <strong>Serving size</strong>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex justify-content-end">
                      <span>100g</span>
                    </div>
                  </Col>
                </Row>
                <div>
                  <span>Amounts Per Serving</span>
                </div>
                <Row className="mt-3 mb2 ">
                  <Col md={6}>
                    <strong className="fs30">Calories</strong>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex justify-content-end">
                      <span className="fs30">89</span>
                    </div>
                  </Col>
                </Row>
                <div className="d-flex justify-content-end mt-2">
                  <span>% Daily Value *</span>
                </div>
                <Row className="btb p-2">
                  <Col md={6}>
                    <span>
                      <strong>Total Fat:</strong>&nbsp;0.3g
                    </span>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex justify-content-end">
                      <span>0%</span>
                    </div>
                  </Col>
                </Row>
                <Row className="btb p-2">
                  <Col md={6}>
                    <span className="ml-2">Saturated fat 0.1g</span>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex justify-content-end">
                      <span>0%</span>
                    </div>
                  </Col>
                </Row>
                <Row className="btb p-2">
                  <Col md={6}>
                    <span>
                      <strong>Sodiun</strong>
                    </span>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex justify-content-end">
                      <span>0%</span>
                    </div>
                  </Col>
                </Row>
                <Row className="btb p-2">
                  <Col md={6}>
                    <span>
                      <strong>Total Carbohydrates:</strong>
                    </span>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex justify-content-end">
                      <span>0%</span>
                    </div>
                  </Col>
                </Row>
                <Row className="btb p-2">
                  <Col md={6}>
                    <span className="ml-2">Dietry Fiber 2.6g</span>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex justify-content-end">
                      <span>9%</span>
                    </div>
                  </Col>
                </Row>
                <Row className="btb p-2">
                  <Col md={6}>
                    <span className="ml-2">Sugar 12g</span>
                  </Col>
                </Row>
                <Row className="mt-3 mb2 ">
                  <Col md={6}>
                    <strong>Protein 1.1g</strong>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex justify-content-end">
                      <span>2%</span>
                    </div>
                  </Col>
                </Row>
                <Row className="btb p-2">
                  <Col md={6}>
                    <span>Vitamin D</span>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex justify-content-end">
                      <span>0%</span>
                    </div>
                  </Col>
                </Row>
                <Row className="btb p-2">
                  <Col md={6}>
                    <span>Calcium 5.00mg</span>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex justify-content-end">
                      <span>0%</span>
                    </div>
                  </Col>
                </Row>
                <Row className="btb p-2">
                  <Col md={6}>
                    <span>Iron 0.26g</span>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex justify-content-end">
                      <span>0%</span>
                    </div>
                  </Col>
                </Row>
                <Row className="mb2 p-2">
                  <Col md={6}>
                    <span>Potassium 256g</span>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex justify-content-end">
                      <span>0%</span>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <div className="mt-5">
            <ul className="ulList">
              <li>Delivering with love and care for you to relish</li>
            </ul>
          </div>
          <hr className="hrW mt-5" />
          <div className="px-4">
            <span>
              <strong>About Demo Group</strong>
            </span>
            <p className="mt-3">
              Sed porttitor lectus nibh. Praesent sapien massa, convallis a
              pellentesque nec, egestas non nisi. Nulla quis lorem ut libero
              malesuada feugiat. Donec sollicitudin molestie malesuada. Quisque
              velit nisi, pretium ut lacinia in, elementum id enim.
            </p>
            <span>We are happy to serve fresh & delicious fruits</span>
          </div>
          <hr className="hrW mt-5" />
        </div>
      </Container>
    </div>
  );
};

export default Home;
