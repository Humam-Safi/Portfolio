import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImage from "../assets/profile.jpg";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const text = "I'm Humam Safi";
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    let timeout;

    const typeText = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
        timeout = setTimeout(typeText, 100);
      } else {
        timeout = setTimeout(() => {
          eraseText();
        }, 2000);
      }
    };

    const eraseText = () => {
      if (currentIndex > 0) {
        setDisplayText(text.slice(0, currentIndex - 1));
        currentIndex--;
        timeout = setTimeout(eraseText, 50);
      } else {
        timeout = setTimeout(typeText, 500);
      }
    };

    typeText();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="py-5" id="home">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} md={12} className="mb-4 mb-lg-0" data-aos="fade-right">
            <h1 className="display-3 fw-bold text-light" style={{ fontSize: "65px" }}>
              Hi, {displayText}
              {showCursor && <span className="text-light">|</span>}
            </h1>
            <h2 className="h3 text-light mb-4" style={{ color: "black" }}>
              Frontend Developer
            </h2>
            <motion.p 
              className="lead text-light mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              A motivated junior frontend developer specializing in React.js and
              dedicated to building seamless, interactive user interfaces.
              Continuously exploring modern development practices and striving
              for improvement through hands-on coding and collaboration.
              Equipped with a solid foundation in web technologies like HTML,
              CSS, and JavaScript, with a strong focus on React's
              component-driven architecture. Passionate about learning,
              evolving, and contributing to innovative projects. Determined to
              bring fresh energy and creativity to dynamic development teams.
            </motion.p>
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 8px 15px rgba(128, 0, 128, 0.5)",
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="me-3"
              style={{
                backgroundColor: "#800080",
                border: "none",
                padding: "10px 20px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#fff",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(128, 0, 128, 0.5)",
                transition: "all 0.3s ease-in-out",
                width: "fit-content"
              }}
            >
              Download Resume
            </motion.button>
          </Col>
          <Col lg={6} md={12} data-aos="fade-left">
            <div
              className="hero-image"
              style={{
                maxWidth: "500px",
                width: "100%",
                height: "auto",
                aspectRatio: "1/1",
                margin: "0 auto",
              }}
            >
              <img
                src={profileImage}
                alt="Hero"
                className="img-fluid"
                style={{
                  width: "90%",
                  height: "90%",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
