import React from "react";
import { Button, Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import image from "../assets/images/pic5.png";
import mongodb from "../assets/images/mongodb.png";
import express from "../assets/images/express.png";
import cv from "../assets/images/Kaighassy Suresh Cv.pdf";

import ProjectCards from "./ProjectCards";


function Home() {
  return (
    <div className="body">
        {/* Navbar */}
        <Navbar expand="lg" className="navbar ">
          <Container>
            <Navbar.Brand style={{color:'#ffeaea',fontSize:'1.5rem',fontWeight:'bold',letterSpacing:'2px',fontStyle:'italic',fontFamily:'cursive'}} href="#home">KS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#skill">Skills</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Home Section */}
        <section className="home-container">
        <div className="intro-container text-center">
  <p className="fs-3 hello-text">HELLO! <span className="wave"><i class="fa-solid fa-hand"></i></span></p>
  <h2 className="fw-bold">
    I'm <span className="typing-effect text-light">Kaighassy Suresh</span>
  </h2>
  <h5 className="reveal-text">FULL STACK DEVELOPER</h5>
  <div className="mt-3">
    <i className="fa-brands fa-linkedin social-icon linkedin"></i>
    <i className="fa-brands fa-github social-icon github"></i>
  </div>
</div>

          <div>
            <img className="profile-img" src={image} alt="Profile" />
          </div>
        </section>
      {/* About Me */}
      <section className="about-section" id="about">
        <div className="about ">
          <div>
            <div className="about-rectangel"></div>
            <img className="about-image" height={"300px"} src={image} alt="" />
          </div>

          <div className="about-2">
            <h2>WHO AM I?</h2>
            <p>
              As a Full Stack Developer, I am responsible for designing and developing web pages. My primary focus is on creating responsive,
              user-friendly websites. I am committed to delivering high-quality code and seamless user experiences.
            </p>
            <Button id="download" variant="outline-primary"><a style={{textDecoration:'none'}} href={cv}>Resume</a></Button>
          </div>
        </div>
      </section>

      {/* Skills */}

      <div className="skill-con">
        <div></div>
        <div class="skills-section">
    <h2>Skills</h2>
    <div class="skills-container">
      
      <div id="skill" class="skill">
        <div class="outer-circle html-bar">
          <div class="inner-circle">
            <i class="fa-brands fa-html5"></i>
          </div>
        </div>
        <h3>HTML</h3>
      </div>
  
      <div class="skill">
        <div class="outer-circle css-bar">
          <div class="inner-circle">
            <i class="fa-brands fa-css3-alt"></i>
          </div>
        </div>
        <h3>CSS</h3>
      </div>
      <div class="skill">
        <div class="outer-circle js-bar">
          <div class="inner-circle">
          <i class="fa-brands fa-js"></i>
          </div>
        </div>
        <h3>JavaScript</h3>
      </div>
  
      <div class="skill">
        <div class="outer-circle react-bar">
          <div class="inner-circle">
            <i class="fa-brands fa-react"></i>
          </div>
        </div>
        <h3>React</h3>
      </div>
  
      <div class="skill">
        <div class="outer-circle node-bar">
          <div class="inner-circle">
            <i class="fa-brands fa-node-js"></i>
          </div>
        </div>
        <h3>Node.js</h3>
      </div>
  
      <div class="skill">
        <div class="outer-circle express-bar">
          <div class="inner-circle">
            <img height={'40%'} src={express} alt="" />
          </div>
        </div>
        <h3>Express Js</h3>
      </div>
      <div class="skill">
        <div class="outer-circle mongodb-bar">
          <div class="inner-circle">
            <img height={'40%'} src={mongodb} alt="" />
          </div>
        </div>
        <h3>MongoDb</h3>
      </div>
  
      <div class="skill">
        <div class="outer-circle bootstrap-bar">
          <div class="inner-circle">
            <i class="fa-brands fa-bootstrap"></i>
          </div>
        </div>
        <h3>Bootstrap</h3>
      </div>
  
      <div class="skill">
        <div class="outer-circle git-bar">
          <div class="inner-circle">
            <i class="fa-brands fa-git-alt"></i>
          </div>
        </div>
        <h3>Git</h3>
      </div>
  
      <div class="skill">
        <div class="outer-circle github-bar">
          <div class="inner-circle">
            <i class="fa-brands fa-github"></i>
          </div>
        </div>
        <h3>GitHub</h3>
      </div>
  
    </div>
  </div>
      </div>

           


      {/* Projects */}
      <section className="projects-section " id="projects">
        <h2>My Projects</h2>
        <ProjectCards />
      </section>

      {/* Contact */}
    <div className="cont-bg">
        <section id="contact" className="contact-section py-5">
        <Container>
          <Row className="align-items-center">
            
           {/* Left Side - Geometric Design */}
           <Col md={6} className="position-relative d-none d-md-block geometric-container">
              {/* Random geometric shapes */}
              <div className="shape small-circle"></div>
              <div className="shape large-circle"></div>
              <div className="shape square"></div>
              <div className="shape outlined-square"></div>
              <div className="shape triangle"></div>
              <div className="shape outlined-triangle"></div>
              <div className="shape hexagon"></div>
              <div className="shape outlined-hexagon"></div>
            </Col>
  
            {/* Right Side - Contact Form */}
            <Col md={6} className="p-4 form-container">
              <h2 className="text-center mb-4">Contact Me</h2>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
  
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
  
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Your message" />
                </Form.Group>
  
                <Button variant="primary" type="submit" className="w-100">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
     
      </section>
  
      {/* footer */}
  
      <section className="text-center ps-3 pe-3  text-light footer">
    <hr className="glowing-hr" />
    <div>
      <p>Copyright &copy; Kaighassy Suresh</p>
    </div>
    <div className="mt-3">
      <i className="fa-brands fa-linkedin mx-2 fs-4"></i>
      <i className="fa-brands fa-github mx-2 fs-4"></i>
    </div>
  </section>
    </div>

    </div>
  );
}

export default Home;
