import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <>
    <Container
      fluid
      className="py-5"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Animated Title Section */}
      <Row className="justify-content-center text-center mb-5">
        <Col md={8} 
            style={{padding:"60px 20px"}}>
          <motion.h1
            className="display-4 text-white text-center mb-5 glow-text"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              ease: "easeOut",
            }}
            style={{
              fontSize: "1.2rem",
              color: "#babcbe",
              fontStyle: "italic",
            }}
          >
            Connect with me for exciting opportunities, collaborations, or even
            just a friendly chat!
          </motion.p>
        </Col>
      </Row>

      {/* Animated Contact Info Section */}
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <Card
              className="shadow-lg border-0"
              style={{
                background:
                  "linear-gradient(135deg, #1a1a1a ,0%, #2d1a4a 100%)",
                borderRadius: "20px",
                padding: "20px",
              }}
            >
              <Card.Body className="p-5">
                <Row>
                  <Col md={4} className="text-center mb-4 mb-md-0">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        color: "#babcbe",
                      }}
                    >
                      <h5 className="display-6 text-white text-center mb-5 glow-text">
                        Address
                      </h5>
                      <p style={{ color: "#babcbe", fontSize: "1rem" }}>
                        Syria, Homs
                      </p>
                    </motion.div>
                  </Col>
                  <Col md={4} className="text-center mb-4 mb-md-0">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        color: "#babcbe",
                      }}
                    >
                      <h5 className="display-6 text-white text-center mb-5 glow-text">
                        Phone
                      </h5>
                      <p style={{ color: "#babcbe", fontSize: "1rem" }}>
                        +963 943527267
                      </p>
                    </motion.div>
                  </Col>
                  <Col md={4} className="text-center">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        color: "#babcbe",
                      }}
                    >
                      <h5 className="display-6 text-white text-center mb-5 glow-text">
                        Email
                      </h5>
                      <a style={{color:"#babcbe"}} href="humamsafi20@gmail.com">humamsafi20@gmail.com</a>
                    </motion.div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Contact;
